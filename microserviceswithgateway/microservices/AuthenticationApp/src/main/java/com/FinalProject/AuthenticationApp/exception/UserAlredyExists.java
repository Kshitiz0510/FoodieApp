package com.FinalProject.AuthenticationApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason = "User already Exists")
public class UserAlredyExists extends Exception{

}
