package com.FinalProject.AuthenticationApp.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.lang.annotation.Documented;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User
{
    @Id
    private String emailId;
    private String password,role;
}
