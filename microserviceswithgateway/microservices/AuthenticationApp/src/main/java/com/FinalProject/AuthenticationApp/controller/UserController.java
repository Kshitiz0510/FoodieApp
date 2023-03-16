package com.FinalProject.AuthenticationApp.controller;



import com.FinalProject.AuthenticationApp.exception.IncorrectUserIdPassword;
import com.FinalProject.AuthenticationApp.exception.UserAlredyExists;
import com.FinalProject.AuthenticationApp.model.User;
import com.FinalProject.AuthenticationApp.model.UserSignIn;
import com.FinalProject.AuthenticationApp.service.SecurityTokenGenerator;
import com.FinalProject.AuthenticationApp.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
//@CrossOrigin
@RestController
@RequestMapping("/auth-app-a1")
public class UserController
{


    @Autowired
    UserService userService;

    @Autowired
    SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    private ObjectMapper mapper;

//    @PostMapping("/register-user")
//    public ResponseEntity<?> registerUser(@RequestBody UserSignIn userSignIn)
//    {
//        return new ResponseEntity<>(userService.registerUser( userSignIn), HttpStatus.OK);
//    }

    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(@RequestParam ("file")MultipartFile file,@RequestParam("userData")String userData) throws IOException, UserAlredyExists {


       UserSignIn userSignIn= mapper.readValue(userData, UserSignIn.class);
        try {
            return new ResponseEntity<>(userService.registerUser( userSignIn ,file), HttpStatus.OK);
        } catch (UserAlredyExists e) {
            throw new UserAlredyExists();
        }

//       return new ResponseEntity<>("got file", HttpStatus.OK);
    }



    @PostMapping("/update-role/{role}/{emailId}")
    public ResponseEntity<?> updateRole(HttpServletRequest request,@PathVariable String role,@PathVariable String emailId){

        String roleforverification=(String) request.getAttribute("roleforVerification");
        System.out.println(roleforverification);
        if(roleforverification.equals("ADMIN")){
            return new ResponseEntity<>(userService.updateRole(role,emailId),HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>("Access Denied",HttpStatus.NOT_ACCEPTABLE);
    }

    @PostMapping("/login-check")
    public ResponseEntity<?> loginCheck(@RequestBody User user) throws IncorrectUserIdPassword {
        User res = userService.loginCheck(user);
        if (res != null) {
            return new ResponseEntity<>(securityTokenGenerator.generateToken(res), HttpStatus.OK);
        } else {
            throw new IncorrectUserIdPassword();
//            return new ResponseEntity<>("Authentication failed", HttpStatus.OK);
        }
    }
    @PostMapping("/confirm-order/{totalValue}")
    public ResponseEntity<?> confirmOrder(HttpServletRequest request,@PathVariable Float totalValue){
        String emailid=(String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userService.conformOrder(emailid,totalValue),HttpStatus.OK);
    }






    }


