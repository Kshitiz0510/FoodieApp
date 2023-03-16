package com.FinalProject.AdminApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason = "You Can't Access This URL")
public class AccessDenied extends Exception{
}
