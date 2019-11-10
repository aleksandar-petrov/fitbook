package softuni.fitbook.config;

import com.cloudinary.utils.ObjectUtils;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import softuni.fitbook.utils.implementation.FileUploaderImpl;

@Configuration
public class ApplicationBeanConfiguration {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    public FileUploaderImpl fileUploader() {
        return new FileUploaderImpl(ObjectUtils.asMap(
                "cloud_name", "fitbook",
                "api_key", "223764263971412",
                "api_secret", "cXg63sRwddnSmFOoPaWXFJMg9k0"));
    }

}
