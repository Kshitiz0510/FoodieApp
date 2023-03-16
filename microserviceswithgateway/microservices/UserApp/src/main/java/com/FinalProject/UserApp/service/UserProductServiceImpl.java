package com.FinalProject.UserApp.service;


import com.FinalProject.UserApp.model.Menu;
import com.FinalProject.UserApp.model.User;
import com.FinalProject.UserApp.repository.UserProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserProductServiceImpl implements UserProductService
{

    @Autowired
    UserProductRepository userProductRepository;

    @Override
    public User addUser(User user) {
        return userProductRepository.insert(user);
    }

    @Override
    public List<User> getAllUsers()
    {
        return userProductRepository.findAll();
    }

    @Override
    public User getUserDetails(String emailId) {
        return userProductRepository.findById(emailId).get();
    }

    @Override
    public User addRestaurent(String emailId, String restaurantId) {
        User user=userProductRepository.findById(emailId).get();
        user.getRestaurantId().add(restaurantId);
        return userProductRepository.save(user);

    }

//    @Override
//    public User deleteRestaurent(String emailId, String restaurantId) {
//        User user=userProductRepository.findById(emailId).get();
//        if(user.getRestaurantId().equals(restaurantId.)){
//            user.getRestaurantId().remove(restaurantId);
//        }
//        return userProductRepository.save(user);
//    }

    @Override
    public User addMenuItem(String emailId, Menu menu) {
        User user=userProductRepository.findById(emailId).get();
        if (!user.getMenu().contains(menu)){
            user.getMenu().add(menu);
        }else {

        }
        return userProductRepository.save(user);
    }

    @Override
    public User deleteMenuItem(String emailId, Menu menu) {
        User user=userProductRepository.findById(emailId).get();
        if (user.getMenu().contains(menu)){
            user.getMenu().remove(menu);
        }else {

        }
        return userProductRepository.save(user);
    }

    @Override
    public User addMenuToCart(String emailId, Menu menu) {
        User user=userProductRepository.findById(emailId).get();
        boolean val=false;
        int quantity=0;
        if(!user.getCart().isEmpty()) {
            for (Menu value : user.getCart()) {
                if (value.getItemId().contains(menu.getItemId())) {
                    quantity = value.getQuantity();
                    val = true;
                }
            }
        }
      if(val){
          System.out.println("in thi update section");
            for (Menu value:user.getCart()) {
                if (value.getItemId().equals(menu.getItemId())) {
                    value.setItemId(menu.getItemId());
                    value.setCuisine(menu.getCuisine());
                    value.setItemPrice(menu.getItemPrice());
                    value.setItemName(menu.getItemName());
                    value.setRating(menu.getRating());
                    value.setQuantity(quantity+1);
                }
            }
        }else {
          System.out.println("in thi add section");
          user.getCart().add(menu);
      }
        return userProductRepository.save(user);
    }



    @Override
    public User removeMenuFromCart(String emailId, Menu menu) {
        User user=userProductRepository.findById(emailId).get();
        if(menu.getQuantity()<=1){
            user.getCart().remove(menu);
        }
        else if(user.getCart().contains(menu)){
            for (Menu value:user.getCart()){
                if(value.getItemId().equals(menu.getItemId()) && menu.getQuantity()>1 ){
                    value.setItemId(menu.getItemId());
                    value.setCuisine(menu.getCuisine());
                    value.setItemPrice(menu.getItemPrice());
                    value.setItemName(menu.getItemName());
                    value.setRating(menu.getRating());
                    value.setQuantity(menu.getQuantity()-1);
                }
            }
        }
        return userProductRepository.save(user);
    }

    @Override
    public boolean emptyCart(String emailId) {
        User user=userProductRepository.findById(emailId).get();
        user.getCart().clear();
        userProductRepository.save(user);
        return true;
    }

    @Override
    public float totalPrice(String emailId) {
        User user=userProductRepository.findById(emailId).get();
        float sum=0;
        for (Menu value:user.getCart()){

            int a=value.getQuantity();
            float b=value.getItemPrice();
            sum=sum+(a*b);

        }
        System.out.println(sum);
        return sum;

    }
}
