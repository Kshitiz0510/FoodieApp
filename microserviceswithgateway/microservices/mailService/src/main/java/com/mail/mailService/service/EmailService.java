package com.mail.mailService.service;

import com.mail.mailService.model.EmailData;
import com.mail.mailService.rabbitq.EmailDTO;

public interface EmailService {
    public abstract void sendEmail(EmailData emailData);
}
