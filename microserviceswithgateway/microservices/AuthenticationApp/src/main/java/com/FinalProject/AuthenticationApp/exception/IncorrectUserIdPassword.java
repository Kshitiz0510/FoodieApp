package com.FinalProject.AuthenticationApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(code = HttpStatus.BAD_REQUEST,reason = "Incorrect user Id Password")
public class IncorrectUserIdPassword extends Exception{
}
