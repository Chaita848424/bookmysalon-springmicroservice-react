package com.zosh.service.impl;

import com.zosh.dto.SalonDTO;
import com.zosh.modal.Category;
import com.zosh.repository.CategoryRepository;
import com.zosh.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    @Override
    public Category saveCategory(Category category, SalonDTO salonDTO) {
        Category newCategory=new Category();
        newCategory.setName(category.getName());
        newCategory.setSalonId(salonDTO.getId());
        newCategory.setImage(category.getImage());
        return categoryRepository.save(newCategory);
    }

    @Override
    public Set<Category> getAllCategoriesBySalon(Long id) {
        return categoryRepository.findBySalonId(id);
    }

    @Override
    public Category getCategoryById(Long id) {
        Category category=categoryRepository.findById(id).orElse(null);

        return null;
    }

    @Override
    public void deleteCategoryById(Long id) {

    }
}
