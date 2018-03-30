package ee.ttu.freebies.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
public class Product {
    public Product(){
    }
    @Id
    @GeneratedValue(strategy = AUTO)
    long id;
    @NonNull Category category;
    @NonNull String title;
    @NonNull String description;
    @NonNull String location;
    @NonNull String size;

    public enum Category { Accessories, Electronics, Art, Furniture, Books, Clothing;}
}