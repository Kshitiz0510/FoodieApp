package com.FinalProject.AdminApp.service;

import com.FinalProject.AdminApp.model.Menu;
import com.FinalProject.AdminApp.model.NewRestaurantDetails;
import com.FinalProject.AdminApp.model.Restaurant;

import java.util.List;

public interface RestaurantService {
    public abstract Restaurant addRestaurant(Restaurant restaurant);
    public abstract List<Restaurant> getAllRestaurents();
    public abstract List<NewRestaurantDetails> getAllNewRestaurents();
//    public abstract Restaurant addRestaurantAndChangeUserRole(NewRestaurantDetails newRestaurantDetails);
    public abstract NewRestaurantDetails addNewRestaurant(NewRestaurantDetails newRestaurantDetails);
    public abstract boolean removeNewRestaurant(String restaurant);
    public abstract Restaurant updateRestaurant(Restaurant restaurant);
    public abstract boolean deleteRestaurant(String restaurantId);
    public abstract Restaurant addMenuItem(Menu menu,String restaurantId);
    public abstract Restaurant updateMenu(Menu menu,String restaurantId);
    public abstract boolean deleteMenuItem(Menu menu,String restaurantId);
    public abstract Restaurant restaurantByEmailId(String restaurantEmailId);
    public abstract Restaurant restaurantById(String restaurantId);

}
