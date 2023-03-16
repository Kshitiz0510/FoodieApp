package com.FinalProject.AuthenticationApp.service;



import com.FinalProject.AuthenticationApp.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator
{

    @Override
    public Map<String, String> generateToken(User user)
    {
        Map<String,String> result=new HashMap<String,String>();
        user.setPassword("");
       long date= new Date().getTime()+ 120000l;


        Map<String,Object> userdata=new HashMap<>();
        userdata.put("user_role",user.getRole());
        userdata.put("user_email",user.getEmailId().toLowerCase());
//        userdata.put("user",user);
        String jwt= Jwts.builder()
                .setClaims(userdata)
                .setIssuedAt(new Date())
//                .setExpiration(new Date(date))
                .signWith(SignatureAlgorithm.HS512,"mysecretKey")
                .compact();
        result.put("token",jwt);
        result.put("message","User login success");
        return result;
    }

}
