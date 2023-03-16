package com.FinalProject.AdminApp.service;

import com.FinalProject.AdminApp.model.DTO;
import com.FinalProject.AdminApp.model.Menu;
import com.FinalProject.AdminApp.model.NewRestaurantDetails;
import com.FinalProject.AdminApp.model.Restaurant;
import com.FinalProject.AdminApp.proxy.ProxyService;
import com.FinalProject.AdminApp.repository.NewRestaurantRepo;
import com.FinalProject.AdminApp.repository.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    RestaurantRepo restaurantRepo;

    @Autowired
    NewRestaurantRepo newRestaurantRepo;

    @Autowired
    ProxyService proxyService;
    @Override
    public Restaurant addRestaurant(Restaurant restaurant) {
        if (restaurantRepo.findById(restaurant.getRestaurantId()).isPresent()){
            return null;
        }else {
            return restaurantRepo.insert(restaurant);
        }

    }

    @Override
    public List<Restaurant> getAllRestaurents() {
        return restaurantRepo.findAll();
    }

    @Override
    public List<NewRestaurantDetails> getAllNewRestaurents() {
        return newRestaurantRepo.findAll();
    }

@Override
public NewRestaurantDetails addNewRestaurant(NewRestaurantDetails newRestaurantDetails) {
    if (newRestaurantRepo.findById(newRestaurantDetails.getEmailId()).isPresent()){
        return null;
    }else {
        return newRestaurantRepo.insert(newRestaurantDetails);
    }
}

    @Override
    public boolean removeNewRestaurant(String restaurantId) {
        if (newRestaurantRepo.findById(restaurantId).isPresent()){
            newRestaurantRepo.deleteById(restaurantId);
            return true;
        }else {
            return false;
        }
    }

    @Override
    public Restaurant updateRestaurant(Restaurant restaurant) {
        if (restaurantRepo.findById(restaurant.getRestaurantId()).isPresent()){
            return restaurantRepo.save(restaurant);
        }else {
            return null;
        }
    }

    @Override
    public boolean deleteRestaurant(String restaurantId) {
        if (restaurantRepo.findById(restaurantId).isPresent()){
            restaurantRepo.deleteById(restaurantId);
            return true;
        }else {
            return false;
        }
    }

    @Override
    public Restaurant addMenuItem(Menu menu, String restaurantId) {
        if (restaurantRepo.findById(restaurantId).isPresent()){
            Restaurant result=restaurantRepo.findById(restaurantId).get();
            result.getMenuList().add(menu);
            return restaurantRepo.save(result);
        }else {
            return null;
        }
    }

    @Override
    public Restaurant updateMenu(Menu menu, String restaurantId) {

        Restaurant restaurant=restaurantRepo.findById(restaurantId.substring(0,10)).get();
        if (!restaurant.getMenuList().contains(menu)){
            for (Menu value:restaurant.getMenuList()){
                if (value.getItemId().equals(menu.getItemId())){
                    value.setItemId(menu.getItemId());
                    value.setCuisine(menu.getCuisine());
                    value.setItemPrice(menu.getItemPrice());
                    value.setItemName(menu.getItemName());
                    value.setRating(menu.getRating());
                    value.setQuantity(menu.getQuantity());
                }
            }
        }
        return restaurantRepo.save(restaurant);
    }

    @Override
    public boolean deleteMenuItem(Menu menu, String restaurantId) {
        if (restaurantRepo.findById(restaurantId.substring(0,10)).isPresent()){
            Restaurant result=restaurantRepo.findById(restaurantId.substring(0,10)).get();

            result.getMenuList().remove(menu);
            restaurantRepo.save(result);

            return true;
        }else {
            return false;
        }
    }
    @Override
    public Restaurant restaurantByEmailId(String restaurantEmailId) {
        return restaurantRepo.getRestaurantByEmailId(restaurantEmailId.toLowerCase());

    }

    @Override
    public Restaurant restaurantById(String restaurantId) {
        if(restaurantRepo.findById(restaurantId).isPresent()){
            return restaurantRepo.findById(restaurantId).get();

        }else {
            return null;

        }

    }
}
