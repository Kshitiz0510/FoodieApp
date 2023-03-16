package com.mail.mailService.rabbitq;


import com.mail.mailService.model.EmailData;
import com.mail.mailService.service.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private EmailService emailService;
    @RabbitListener(queues = "mail_queue")
    public void getToSendMail(EmailDTO emailDTO){
        EmailData emailData=new EmailData();
        emailData.setReciversEmail(emailDTO.getReciversEmail());
        emailData.setSubject(emailDTO.getSubject());
        emailData.setMessageBody(emailDTO.getMessageBody());
        emailService.sendEmail(emailData);
    }
}
