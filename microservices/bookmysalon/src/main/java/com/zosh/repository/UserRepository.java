package com.zosh.repository;

import com.zosh.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    void deleteById(Long id);
}
