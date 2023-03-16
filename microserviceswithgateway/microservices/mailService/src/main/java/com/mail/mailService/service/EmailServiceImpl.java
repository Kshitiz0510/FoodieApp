package com.mail.mailService.service;

import com.mail.mailService.model.EmailData;
import com.mail.mailService.rabbitq.EmailDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService{
    @Autowired
    private JavaMailSender javaMailSender;
    @Override
    public void sendEmail(EmailData emailData) {
        SimpleMailMessage mailMessage
                = new SimpleMailMessage();
        mailMessage.setFrom("asakasa007@gmail.com");
        mailMessage.setTo(emailData.getReciversEmail());
        mailMessage.setText(emailData.getMessageBody());
        mailMessage.setSubject(emailData.getSubject());
        javaMailSender.send(mailMessage);
        System.out.println(emailData.toString());
    }
}
