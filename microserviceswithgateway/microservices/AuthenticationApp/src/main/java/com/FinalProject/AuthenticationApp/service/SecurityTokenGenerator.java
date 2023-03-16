package com.FinalProject.AuthenticationApp.service;



import com.FinalProject.AuthenticationApp.model.User;

import java.util.Map;

public interface SecurityTokenGenerator
{
public abstract Map<String,String> generateToken(User user);
}
