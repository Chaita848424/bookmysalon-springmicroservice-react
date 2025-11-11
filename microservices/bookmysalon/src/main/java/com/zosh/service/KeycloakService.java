package src.main.java.com.zosh.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KeycloakService {
    private  static final String KEYCLOAK_BASE_URL="http://localhost:8080";
private static final String KEYCLOAK_ADMIN_API=KEYCLOAK_BASE_URL+"/admin/realms/master/users";
private static final String TOKEN_URL= KEYCLOAK_BASE_URL+""
}
