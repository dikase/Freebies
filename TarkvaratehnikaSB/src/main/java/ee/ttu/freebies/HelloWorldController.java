package ee.ttu.freebies;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import ee.ttu.freebies.model.Product;

@RestController
public class HelloWorldController {
   List<Product> products = new ArrayList<>();


   @CrossOrigin
   @RequestMapping("/")
   public String sayHello() {
      return "Hello Spring Boot!!";
   }

   @CrossOrigin
   @RequestMapping("/getProducts")
   public List<Product> getProducts(){
      return products;
   }

   @CrossOrigin
   @RequestMapping("/addProduct")
   public void addProduct(@RequestBody Product product){
      products.add(product);
   }
}
