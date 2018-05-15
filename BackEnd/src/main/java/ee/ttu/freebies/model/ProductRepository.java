package ee.ttu.freebies.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends CrudRepository<Product, Long> {
	List<Product> findByState(Product.State state);
	List<Product> findAllByCategory(@Param("category") Product.Category category);
    List<Product> findByCategoryAndState(Product.Category category, Product.State state);
    Optional<Product> findByIdAndState(Long id, Product.State state);
}
