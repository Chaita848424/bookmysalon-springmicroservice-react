package com.zosh.modal;

import lombok.Data;

@Data
public class SalonReport {
    private Long salonId;
    private String salonName;
    private Long totalBookings;
    private Long totalEarnings;
    private Integer cancelledBookings;
    private Double totalRefund;


    public void setTotalBookings(int totalEarnings) {
    }
}
