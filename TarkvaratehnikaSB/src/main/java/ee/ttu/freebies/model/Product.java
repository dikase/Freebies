package ee.ttu.freebies.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.UUID;

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
    @Data
    public static class Ticket {
        long id;
        String password;
    }

    public interface PublicView {}
    public interface PrivateView extends PublicView {}

    public Product(){
    }

    @JsonView(PublicView.class) @Id @GeneratedValue(strategy = AUTO) long id;
    @JsonView(PublicView.class) @NonNull State state = State.Available;
    @JsonView(PrivateView.class) @NonNull String password = UUID.randomUUID().toString();
    @JsonView(PrivateView.class) @NonNull String email;
    @JsonView(PublicView.class) @NonNull Category category;
    @JsonView(PublicView.class) @NonNull String title;
    @JsonView(PublicView.class) @NonNull String description;
    @JsonView(PublicView.class) @NonNull String location;
    @JsonView(PublicView.class) @NonNull String size;

    public enum State {
        /** The product is available */
        Available,
        /** Someone is interested in the product and is negotiating with the owner */
        UnderNegotiation,
        /** The product has already been given away and has been archived */
        Archived
    }
    public enum Category { Accessories, Electronics, Art, Furniture, Books, Clothing;}
}