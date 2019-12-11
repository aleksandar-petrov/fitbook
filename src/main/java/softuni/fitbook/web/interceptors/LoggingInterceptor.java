package softuni.fitbook.web.interceptors;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import softuni.fitbook.services.LogService;
import softuni.fitbook.services.models.LogServiceModel;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.time.LocalDateTime;

@Component
public class LoggingInterceptor extends HandlerInterceptorAdapter {


    private final LogService logService;

    public LoggingInterceptor(LogService logService) {
        this.logService = logService;
    }


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {


        String requestURI = request.getRequestURI();
        String method = request.getMethod();
        Principal userPrincipal = request.getUserPrincipal();

        logService.createLog(new LogServiceModel(requestURI, method, LocalDateTime.now(), userPrincipal.getName()));

        return super.preHandle(request, response, handler);
    }
}
