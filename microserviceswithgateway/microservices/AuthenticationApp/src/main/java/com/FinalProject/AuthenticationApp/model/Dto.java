package com.FinalProject.AuthenticationApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dto {
    private String emailId;
    private String userName,address,mobileNo;
    private String file;


}