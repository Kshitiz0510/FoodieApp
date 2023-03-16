package com.FinalProject.AdminApp.repository;

import com.FinalProject.AdminApp.model.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface RestaurantRepo extends MongoRepository<Restaurant, String > {

    @Query("{'emailId':?0}")
    public abstract Restaurant getRestaurantByEmailId(String restaurantEmailId);
}
