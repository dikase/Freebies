package ee.ttu.freebies.model;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;


@Getter
@Setter
public class Product {
   @NonNull Category category;
   @NonNull String title;
   @NonNull String description;
   @NonNull String location;
   @NonNull String size;

    public enum Category { Accessories, Electronics, Art, Furniture, Books, Clothing;}
}