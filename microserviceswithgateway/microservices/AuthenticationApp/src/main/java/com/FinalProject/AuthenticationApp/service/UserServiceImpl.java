package com.FinalProject.AuthenticationApp.service;


import com.FinalProject.AuthenticationApp.exception.UserAlredyExists;
import com.FinalProject.AuthenticationApp.model.Dto;
import com.FinalProject.AuthenticationApp.model.User;
import com.FinalProject.AuthenticationApp.model.UserSignIn;
import com.FinalProject.AuthenticationApp.proxy.ProxyService;
import com.FinalProject.AuthenticationApp.rabitmq.EmailDTO;
import com.FinalProject.AuthenticationApp.rabitmq.MailProducer;
import com.FinalProject.AuthenticationApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;

import java.io.IOException;
import java.util.Base64;

@Service
public class UserServiceImpl implements UserService
{

    @Autowired
    UserRepository userRepository;
    @Autowired
    ProxyService proxyService;
    @Autowired
    MailProducer mailProducer;

//    @Override
//    public User registerUser(User user)
//    {
//        return userRepository.save(user);
//    }


    @Override
    public User registerUser(UserSignIn userSignIn, MultipartFile file) throws IOException, UserAlredyExists {
        if (userRepository.findById(userSignIn.getEmailId()).isPresent()){
            throw new UserAlredyExists();
        }else {
                Dto dto = new Dto(userSignIn.getEmailId().toLowerCase(), userSignIn.getUserName(), userSignIn.getAddress(),
                        userSignIn.getMobileNo(), Base64.getEncoder().encodeToString(file.getBytes()));
                proxyService.sendUserDtoToProductApp(dto);
                User user = new User(userSignIn.getEmailId().toLowerCase(), userSignIn.getPassword(), "USER");
                User result = userRepository.save(user);
//                EmailDTO emailDTO=new EmailDTO(result.getEmailId(),"welcome to our application","sign up success");
//                mailProducer.sendMailToQue(emailDTO);
                return result;
        }
    }

@Override
public User updateRole(String role,String emailId){

        if(userRepository.findById(emailId).isPresent()){
            User user=userRepository.findById(emailId).get();
            user.setRole(role);

            return userRepository.save(user);
        }else {
            return null;
        }

}

    @Override
    public User loginCheck(User user)
    {
//        User result=userRepository.findByEmailIdAndPassword(user.getEmailId(), user.getPassword());
//
//        return result;

        if (userRepository.findById(user.getEmailId().toLowerCase()).isPresent()) {
            User result = userRepository.findById(user.getEmailId().toLowerCase()).get();

            if (result.getPassword().equals(user.getPassword())) {
                return result;
            } else {
                return null;
            }
        } else {
            return null;
        }
     }

    @Override
    public boolean conformOrder(String emailId, float totalValue) {
        String mail="Total value for your bill is= "+totalValue+" thank you for ordering";
//        EmailDTO emailDTO=new EmailDTO(emailId,mail,"Order Conformation");
//        mailProducer.sendMailToQue(emailDTO);
        return true;
    }
}



