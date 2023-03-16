package com.FinalProject.UserApp.controller;


import com.FinalProject.UserApp.model.Menu;
import com.FinalProject.UserApp.model.User;
import com.FinalProject.UserApp.service.UserProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
//@CrossOrigin
@RestController
@RequestMapping("/user-app-a1")
public class UserProductController
{
    @Autowired
    UserProductService userProductService;

    @PostMapping("/add-user")
    public ResponseEntity<?> addUser(@RequestBody User user)
    {
        user.setRestaurantId(new ArrayList<String>());
        user.setMenu(new ArrayList<Menu>());
        user.setCart(new ArrayList<Menu>());
        return new ResponseEntity<>(userProductService.addUser(user), HttpStatus.OK);
    }
    @GetMapping("/get-user-details")
    public ResponseEntity<?> getUserDetails(HttpServletRequest request)
    {
        String emailid=(String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userProductService.getUserDetails(emailid),HttpStatus.OK);
    }
    @PostMapping("/add-restaurant/{restaurantId}")
    public ResponseEntity<?> addRestaurant(HttpServletRequest request,@PathVariable String restaurantId)
    {
       String emailid=(String) request.getAttribute("current_user_emailid");
        System.out.println(emailid);
        return new ResponseEntity<>(userProductService.addRestaurent(emailid,restaurantId),HttpStatus.OK);
    }
    @DeleteMapping("/delete-restaurant/{restaurantId}")
    public ResponseEntity<?> deleteRestaurant(HttpServletRequest request,@PathVariable String restaurantId)
    {
        String emailid=(String) request.getAttribute("current_user_emailid");
        System.out.println(emailid);
        return new ResponseEntity<>(userProductService.addRestaurent(emailid,restaurantId),HttpStatus.OK);
    }

    @PostMapping("/add-menuItem")
    public ResponseEntity<?> addItem(HttpServletRequest request,@RequestBody Menu menu)
    {
        String emailid=(String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userProductService.addMenuItem(emailid,menu),HttpStatus.OK);
    }

    @PostMapping ("/remove-menuItem")
    public ResponseEntity<?> deleteItem(HttpServletRequest request,@RequestBody Menu menu)
    {
        String emailid=(String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userProductService.deleteMenuItem(emailid,menu),HttpStatus.OK);
    }
    @DeleteMapping("/empty-cart")
    public ResponseEntity<?>emptyCart(HttpServletRequest request){
        String emailid=(String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userProductService.emptyCart(emailid),HttpStatus.OK);
    }

    @PostMapping("/addMenuToCart")
    public ResponseEntity<?> addMenuToCart(HttpServletRequest request,@RequestBody Menu menu)
    {
        String emailid=(String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userProductService.addMenuToCart(emailid,menu),HttpStatus.OK);
    }
    @PostMapping ("/removeMenuFromCart")
    public ResponseEntity<?> removeMenuToCart(HttpServletRequest request,@RequestBody Menu menu)
    {
        String emailid=(String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userProductService.removeMenuFromCart(emailid,menu),HttpStatus.OK);
    }
    @GetMapping("/getTotalOfCart")
    public ResponseEntity<?> total(HttpServletRequest request){
        String emailid=(String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userProductService.totalPrice(emailid),HttpStatus.OK);
    }



}
