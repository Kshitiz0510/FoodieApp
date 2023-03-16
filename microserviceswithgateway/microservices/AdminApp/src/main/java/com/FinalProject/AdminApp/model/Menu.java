package com.FinalProject.AdminApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Menu {
    String itemId;
    String itemName;
    float itemPrice;
    String cuisine;
    String rating;
    String itemImage;
    int quantity;
}
