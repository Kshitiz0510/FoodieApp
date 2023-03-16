package com.FinalProject.AuthenticationApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSignIn {
    private String emailId;
    private String password;
    private String userName,address,mobileNo,role;
}
