package com.FinalProject.UserApp.service;


import com.FinalProject.UserApp.model.Menu;
import com.FinalProject.UserApp.model.User;

import java.util.List;


public interface UserProductService
{
    public abstract User addUser(User user);

    public abstract List<User> getAllUsers();

    public abstract User getUserDetails(String emailId);

    public abstract User addRestaurent(String emailId,String restaurantId);

//    public abstract User deleteRestaurent(String emailId,String restaurantId);
    public abstract User addMenuItem(String emailId, Menu menu);

    public abstract User deleteMenuItem(String emailId, Menu menu);
    public abstract User addMenuToCart(String emailId,Menu menu);

    public abstract User removeMenuFromCart(String emailId,Menu menu);
    public abstract boolean emptyCart(String emailId);
    public abstract float totalPrice(String emailId);

}
