package com.zosh.service.client;

import com.zosh.payload.dto.UserDTO;
import org.apache.catalina.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient("USER")
public interface UserFeignClient {
    @GetMapping("/api/users/{userId}")
    public ResponseEntity<UserDTO>
    getUserById(
            @PathVariable("userId") Long id)
            throws Exception;

    @GetMapping("/api/users/profilr")
    public default ResponseEntity<UserDTO>
    getUserProfile(@RequestHeader("Authorization") String jwt)
            throws Exception {
        return null;
    }
}
