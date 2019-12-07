package softuni.fitbook.web.filters;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import softuni.fitbook.config.Constants;
import softuni.fitbook.data.models.User;
import softuni.fitbook.data.models.UserRole;
import softuni.fitbook.web.controllers.models.request.user.UserLoginRequestModel;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
        this.setFilterProcessesUrl("/api/users/signin");
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            UserLoginRequestModel loginBindingModel = new ObjectMapper()
                    .readValue(request.getInputStream(), UserLoginRequestModel.class);

            return this.authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginBindingModel.getUsername(),
                            loginBindingModel.getPassword(),
                            new ArrayList<>())
            );
        } catch (IOException ignored) {
            return null;
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        User user = ((User) authResult.getPrincipal());
        String authority = extractHighestAuthorityFromAuthorities(user.getAuthorities());
        String token = Jwts.builder()
                .setSubject(user.getUsername())
                .setExpiration(new Date(new Date().getTime() + 864000000L))
                .claim("role", authority)
                .claim("userId", user.getId())
                .signWith(SignatureAlgorithm.HS256, "Secret".getBytes())
                .compact();


        response.addHeader("Authorization", "Bearer " + token);
    }

    private String extractHighestAuthorityFromAuthorities(Set<UserRole> authorities) {

        Set<String> allAuthoritiesAsString = authorities
                .stream()
                .map(UserRole::getAuthority)
                .collect(Collectors.toSet());

        if (allAuthoritiesAsString.contains(Constants.AUTHORITY_ROOT_ADMIN)) {
            return Constants.AUTHORITY_ROOT_ADMIN;
        } else if (allAuthoritiesAsString.contains(Constants.AUTHORITY_ADMIN)) {
            return Constants.AUTHORITY_ADMIN;
        } else if (allAuthoritiesAsString.contains(Constants.AUTHORITY_MODERATOR)) {
            return Constants.AUTHORITY_MODERATOR;
        } else if (allAuthoritiesAsString.contains(Constants.AUTHORITY_USER)) {
            return Constants.AUTHORITY_USER;
        } else {
            throw new IllegalArgumentException("No such role");
        }
    }
}
