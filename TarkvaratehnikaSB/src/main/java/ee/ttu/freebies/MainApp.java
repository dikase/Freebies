package ee.ttu.freebies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;


// Causes explicit errors (warnings?) if the properties file is missing/fails to load
@PropertySource(value = "classpath:application.properties")
@SpringBootApplication
public class MainApp {

   public static void main(String[] args) {
      SpringApplication.run(MainApp.class, args);
   }

}