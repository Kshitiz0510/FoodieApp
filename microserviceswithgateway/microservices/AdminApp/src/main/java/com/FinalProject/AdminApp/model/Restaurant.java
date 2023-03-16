package com.FinalProject.AdminApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Restaurant {
    @Transient
    public static final String SEQUENCE_NAME="restaurantId_sequence";

    @Id
    String restaurantId;
    String restaurantName,location,ratings,emailId;
    String restaurantImage;
    List<Menu> menuList;

}
