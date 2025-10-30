package com.zosh.service;

import com.zosh.dto.SalonDTO;
import com.zosh.modal.Category;

import java.util.Set;

public interface CategoryService {
   Category saveCategory(Category category, SalonDTO salonDTO);
   Set<Category> getAllCategoriesBySalon(Long id);
   Category getCategoryById(Long id);
   void deleteCategoryById(Long id);

}
