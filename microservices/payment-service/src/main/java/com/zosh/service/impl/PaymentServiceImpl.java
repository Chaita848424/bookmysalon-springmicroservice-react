package com.zosh.service.impl;

import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

//import com.stripe.param.financialconnections.SessionCreateParams;
import com.zosh.domain.PaymentMethod;
import com.zosh.domain.PaymentOrderStatus;
import com.zosh.modal.PaymentOrder;
import com.zosh.repository.PaymentOrderRepository;
import com.zosh.response.PaymentLinkResponse;
import com.zosh.response.dto.BookingDTO;
import com.zosh.response.dto.UserDTO;
import com.zosh.service.PaymentService;
import lombok.RequiredArgsConstructor;
//import org.hibernate.Session;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
private final PaymentOrderRepository paymentOrderRepository;
@Value("${stripe.api.key}")
private String stripeSecretKey;

@Value("${razorpay.api.key}")
private String razorpayApiKey;

    @Value("${razorpay.api.secret}")
    private String razorpayApiSecret;

    @Override
    public PaymentLinkResponse createOrder(UserDTO user,
                                           BookingDTO booking,
                                           PaymentMethod paymentMethod) throws RazorpayException, StripeException {
       Long amount=(long)booking.getTotalPrice();

       PaymentOrder order=new PaymentOrder();
       order.setAmount(amount);
       order.setPaymentMethod(paymentMethod);
       order.setBookingId(booking.getId());
       order.setSalonId(booking.getSalonId());
       PaymentOrder savedOrder=paymentOrderRepository.save(order);

       PaymentLinkResponse paymentLinkResponse=new PaymentLinkResponse();

       if(paymentMethod.equals(PaymentMethod.RAZORPAY)){
           PaymentLink payment=createRazorpayPaymentLink(user,
                   savedOrder.getAmount(),
                   savedOrder.getId());

           String paymentUrl=payment.get("short_url");
           String paymentUrlId=payment.get("id");

           paymentLinkResponse.setPayment_link_url(paymentUrl);
savedOrder.setPaymentLinkId(paymentUrlId);
paymentOrderRepository.save(savedOrder);
       }else{
           String paymentUrl=createStripePaymentLink(user,
                 savedOrder.getAmount(),
                   savedOrder.getId());
           paymentLinkResponse.setPayment_link_url(paymentUrl);
        }

        return paymentLinkResponse;
    }

    @Override
    public PaymentOrder getPaymentOrderById(Long id) throws Exception {
        PaymentOrder paymentOrder=paymentOrderRepository.findById(id).orElse(null);
        if(paymentOrder==null){
            throw new Exception("payment order not found");
        }
        return paymentOrder;
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String paymentId) {

        return paymentOrderRepository.findByPaymentLinkId(paymentId);
    }

    @Override
    public PaymentLink createRazorpayPaymentLink(UserDTO user,
                                                 Long Amount,
                                                 Long orderId) throws RazorpayException {
        Long amount=Amount*100;

            RazorpayClient razorpay=new RazorpayClient(razorpayApiKey,razorpayApiSecret);

        JSONObject paymentLinkRequest=new JSONObject();
        paymentLinkRequest.put("amount",amount);
        paymentLinkRequest.put("currency","INR");

        JSONObject customer=new JSONObject();
        customer.put("name",user.getFullName());
        customer.put("email",user.getEmail());

        paymentLinkRequest.put("customer",customer);

        JSONObject notify=new JSONObject();
        notify.put("email",true);
        paymentLinkRequest.put("notify",notify);

        paymentLinkRequest.put("reminder enable",true);
        paymentLinkRequest.put("callback url","http://localhost:3000/payment-sucess/"+orderId);
        paymentLinkRequest.put("callback method","get");
        return razorpay.paymentLink.create(paymentLinkRequest);

    }

    @Override
    public String createStripePaymentLink(UserDTO user, Long amount, Long orderId) throws StripeException {
        Stripe.apiKey=stripeSecretKey;
        SessionCreateParams params=SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/payment-success/"+orderId)
                .setCancelUrl("http://localhost:3000/payment/cancel")
                .setCancelUrl("http://localhost:3000/payment/cancel")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(amount+100)
                                .setProductData(SessionCreateParams
                                        .LineItem
                                        .PriceData
                                        .ProductData
                                        .builder().setName("salon appointment booking").build()
                                ).build()
                        ).build()
                ).build();
        Session session=Session.create(params);
        return session.getUrl();
    }

    @Override
    public Boolean proceedPayment(PaymentOrder paymentOrder,
                                  String paymentId,
                                  String paymentLinkId) throws RazorpayException {
        if(paymentOrder.getStatus().equals(PaymentOrderStatus.PENDING)){
            if(paymentOrder.getPaymentMethod().equals(PaymentMethod.RAZORPAY)){
RazorpayClient razorpay =new RazorpayClient(razorpayApiKey,razorpayApiSecret);
                Payment payment=razorpay.payments.fetch(paymentId);
                Integer amount=payment.get("amount");
                String status=payment.get("status");
                if (status.equals("captured")){
                    //produce kafka event
                   paymentOrder.setStatus(PaymentOrderStatus.SUCCESS);
                   paymentOrderRepository.save(paymentOrder);
                   return true;
                }
                return false;
            }
            else{
                paymentOrder.setStatus(PaymentOrderStatus.SUCCESS);
                paymentOrderRepository.save(paymentOrder);
                return true;
            }
        }
        return false;
    }
}
