package softuni.fitbook.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import softuni.fitbook.web.interceptors.CommentInterceptor;
import softuni.fitbook.web.interceptors.LoggingInterceptor;

@Configuration
@EnableScheduling
public class WebApplicationConfiguration implements WebMvcConfigurer {

    private final LoggingInterceptor loggingInterceptor;
    private final CommentInterceptor commentInterceptor;

    @Autowired
    public WebApplicationConfiguration(LoggingInterceptor loggingInterceptor, CommentInterceptor commentInterceptor) {
        this.loggingInterceptor = loggingInterceptor;
        this.commentInterceptor = commentInterceptor;
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/notFound").setViewName("index");
        registry.addViewController("/error").setViewName("index");
    }


    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loggingInterceptor);
        registry.addInterceptor(commentInterceptor)
                .addPathPatterns("/api/workouts/comment/*",
                        "/api/workout-plans/comment/*",
                        "/api/meals/comment/*",
                        "/api/diet-plans/comment/*");

    }

    @Bean
    public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> containerCustomizer() {
        return container -> {
            container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND,
                    "/notFound"));
            container.addErrorPages(new ErrorPage(HttpStatus.UNAUTHORIZED,
                    "/error"));
        };
    }

}