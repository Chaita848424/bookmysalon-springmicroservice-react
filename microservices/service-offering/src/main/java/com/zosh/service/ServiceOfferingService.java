package com.zosh.service;

import com.zosh.dto.CategoryDTO;
import com.zosh.dto.SalonDTO;
import com.zosh.dto.ServiceDTO;
import com.zosh.modal.ServiceOffering;

import java.util.Set;

public interface ServiceOfferingService {

    ServiceOffering createService(SalonDTO salonDto, ServiceDTO serviceDTO ,

                                  CategoryDTO categoryDTO);
ServiceOffering updateService(Long serviceId,ServiceOffering service) throws Exception;
Set<ServiceOffering> getAllServiceBySalonId(Long salonId, Long categoryId);
Set<ServiceOffering> getServicesByIds(Set<Long> ids);
ServiceOffering getServiceById(Long id) throws Exception;
}
