package com.FinalProject.UserApp.repository;


import com.FinalProject.UserApp.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface UserProductRepository extends MongoRepository<User,String>
{

}
