package ee.ttu.freebies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import ee.ttu.freebies.model.Product;
import ee.ttu.freebies.model.ProductRepository;


@RestController
@CrossOrigin //TODO: Remove in production
public class HelloWorldController {
   private final ProductRepository repo;

   @Autowired
   public HelloWorldController(ProductRepository repo) {
      this.repo = repo;
   }

   @RequestMapping("/getProducts")
   public Iterable<Product> getProducts(){
      return repo.findAll();
   }

   @RequestMapping("/addProduct")
   public void addProduct(@RequestBody Product product){
      repo.save(product);
   }
}