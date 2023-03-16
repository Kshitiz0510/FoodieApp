package com.FinalProject.UserApp.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class User
{
    @Id
    private String emailId;
    private String userName,address,mobileNo;
    private List<String> restaurantId;
    private List<Menu> menu;
    private List<Menu> cart;
    private String file;

}
