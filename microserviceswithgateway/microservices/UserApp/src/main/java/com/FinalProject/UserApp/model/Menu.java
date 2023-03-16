package com.FinalProject.UserApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

