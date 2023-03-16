package com.FinalProject.AuthenticationApp.rabitmq;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailDTO {
    String reciversEmail,messageBody,subject;
}
