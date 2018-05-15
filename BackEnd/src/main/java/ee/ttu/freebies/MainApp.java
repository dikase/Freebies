package ee.ttu.freebies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


// Causes explicit errors (warnings?) if the properties file is missing/fails to load
@PropertySource(value = "classpath:application.properties")
@SpringBootApplication
public class MainApp {

   public static void main(String[] args) {
      SpringApplication.run(MainApp.class, args);
   }
   @Bean
      public CorsFilter corsFilter() {
           UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
           CorsConfiguration config = new CorsConfiguration();
           config.setAllowCredentials(true);
           config.addAllowedOrigin("*");
           config.addAllowedHeader("*");
           config.addAllowedMethod("GET");
           config.addAllowedMethod("POST");
           config.addAllowedMethod("PUT");
           config.addAllowedMethod("DELETE");
           config.addAllowedMethod("OPTIONS");
           source.registerCorsConfiguration("/**", config);
           return new CorsFilter(source);
      }

}