package com.mail.mailService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class  EmailData {
    private String reciversEmail,messageBody,subject;
}
