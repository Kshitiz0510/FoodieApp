package com.FinalProject.AdminApp.repository;

import com.FinalProject.AdminApp.model.NewRestaurantDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NewRestaurantRepo extends MongoRepository<NewRestaurantDetails,String> {

}
