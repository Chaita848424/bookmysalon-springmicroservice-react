package com.zosh.service;

import com.razorpay.PaymentLink;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.zosh.domain.PaymentMethod;
import com.zosh.modal.PaymentOrder;
import com.zosh.response.PaymentLinkResponse;
import com.zosh.response.dto.BookingDTO;
import com.zosh.response.dto.UserDTO;

public interface PaymentService {

PaymentLinkResponse createOrder(UserDTO user,
                                BookingDTO booking,
                                PaymentMethod paymentMethod) throws RazorpayException, StripeException;
PaymentOrder getPaymentOrderById(Long id) throws Exception;
PaymentOrder getPaymentOrderByPaymentId(String paymentId);
PaymentLink createRazorpayPaymentLink(UserDTO user,
                                      Long amount,
                                      Long orderId) throws RazorpayException;
String createStripePaymentLink(UserDTO user,
                              Long amount,
                               Long orderId) throws StripeException;
Boolean proceedPayment(PaymentOrder paymentOrder,
                       String paymentId,
                       String paymentLinkId) throws RazorpayException;
}
