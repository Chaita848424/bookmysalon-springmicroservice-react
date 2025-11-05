package com.zosh.modal;

import com.zosh.domain.PaymentMethod;
import com.zosh.domain.PaymentOrderStatus;
import jakarta.persistence.*;
import lombok.Data;
import jakarta.persistence.Id;

//import org.springframework.data.annotation.Id;

@Entity
@Data
public class PaymentOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
@Column(nullable = false)
    private Long amount;

@Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentOrderStatus status=PaymentOrderStatus.PENDING;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    private String paymentLinkId;

   @Column(nullable = false)
    private Long userId;

   @Column(nullable = false)
   private Long bookingId;

   @Column(nullable = false)
   private Long salonId;
}
