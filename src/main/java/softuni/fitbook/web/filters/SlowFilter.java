package softuni.fitbook.web.filters;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import java.io.IOException;


public class SlowFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {


        try {
            Thread.sleep(4000);
        } catch (InterruptedException ignored) {

        }

        filterChain.doFilter(servletRequest, servletResponse);

    }
}
