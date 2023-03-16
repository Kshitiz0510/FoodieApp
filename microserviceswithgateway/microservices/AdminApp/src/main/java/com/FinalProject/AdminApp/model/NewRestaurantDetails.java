package com.FinalProject.AdminApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class NewRestaurantDetails {

        @Id
        private String emailId;
        String restaurantName,location,ratings;
        String restaurantImage;
        List<Menu> menuList;

}
