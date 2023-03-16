package com.mail.mailService.rabbitq;

import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfiguration {
    @Bean
    public Jackson2JsonMessageConverter getMailConvertor(){
        return new Jackson2JsonMessageConverter();
    }
}
