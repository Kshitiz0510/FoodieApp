package com.FinalProject.AuthenticationApp.service;


import com.FinalProject.AuthenticationApp.exception.UserAlredyExists;
import com.FinalProject.AuthenticationApp.model.User;
import com.FinalProject.AuthenticationApp.model.UserSignIn;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UserService
{

//    public abstract User registerUser(User user);
    public abstract User registerUser(UserSignIn userSignIn, MultipartFile file) throws IOException, UserAlredyExists;
    public abstract User updateRole(String role,String emailId);
    public abstract User loginCheck(User user);

    public abstract boolean conformOrder(String emailId,float totalValue);
}
