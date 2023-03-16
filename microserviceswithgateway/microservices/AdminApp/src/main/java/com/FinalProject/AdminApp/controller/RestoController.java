package com.FinalProject.AdminApp.controller;
import com.FinalProject.AdminApp.exception.AccessDenied;
import com.FinalProject.AdminApp.model.Menu;
import com.FinalProject.AdminApp.model.NewRestaurantDetails;
import com.FinalProject.AdminApp.model.Restaurant;
import com.FinalProject.AdminApp.service.RestaurantService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;

import java.util.Random;
//@CrossOrigin
@RestController
@RequestMapping("/admin-app")
public class RestoController {
    @Autowired
    RestaurantService restaurantService;

    @Autowired
    private ObjectMapper mapper;

    @GetMapping("/get-all-restaurant")
    public ResponseEntity<?> getAllRestaurents(){
        return new ResponseEntity<>(restaurantService.getAllRestaurents(),HttpStatus.OK);
    }

    @GetMapping("/get-all-new-restaurant")
    public ResponseEntity<?> getAllNewRestaurents(HttpServletRequest request) throws AccessDenied {
        String roleforverification=(String) request.getAttribute("roleforVerification");
        if(roleforverification.equals("ADMIN")){
            return new ResponseEntity<>(restaurantService.getAllNewRestaurents(),HttpStatus.OK);
        }else {
            throw new AccessDenied();
        }

    }

    @PostMapping("/add-restaurant")
    public ResponseEntity<?> addRestaurant(HttpServletRequest request,@RequestBody Restaurant restaurant) throws AccessDenied {


        restaurant.setMenuList(new ArrayList<Menu>());

        IdGeneratorr id=new IdGeneratorr();
        restaurant.setRestaurantId(id.generateId(restaurant.getRestaurantName()));

        String roleforverification=(String) request.getAttribute("roleforVerification");
        if(roleforverification.equals("ADMIN")) {
            return new ResponseEntity<>(restaurantService.addRestaurant(restaurant), HttpStatus.OK);
        }else {
            throw new AccessDenied();
        }
    }

//    @PostMapping("/add-new-restaurant")
//    public ResponseEntity<?> addNewRestaurant(@RequestBody NewRestaurantDetails newRestaurantDetails){
//        newRestaurantDetails.setMenuList(new ArrayList<Menu>());
//        return new ResponseEntity<>(restaurantService.addNewRestaurant(newRestaurantDetails), HttpStatus.OK);
//    }
@PostMapping("/add-new-restaurant")
public ResponseEntity<?> addNewRestaurant(@RequestParam("newRestaurant") String restaurantString,
                                          @RequestParam("restaurantImage") MultipartFile image) throws IOException {
    NewRestaurantDetails newRestaurantDetails= mapper.readValue(restaurantString, NewRestaurantDetails.class);
    newRestaurantDetails.setRestaurantImage(Base64.getEncoder().encodeToString(image.getBytes()));
    newRestaurantDetails.setMenuList(new ArrayList<Menu>());
    return new ResponseEntity<>(restaurantService.addNewRestaurant(newRestaurantDetails), HttpStatus.OK);
}

    @DeleteMapping("/delete-new-restaurant/{restaurantId}")
    public ResponseEntity<?> deleteNewRestaurant(HttpServletRequest request,@PathVariable String restaurantId) throws AccessDenied {
        String roleforverification=(String) request.getAttribute("roleforVerification");
        if(roleforverification.equals("ADMIN")) {
            return new ResponseEntity<>(restaurantService.removeNewRestaurant(restaurantId), HttpStatus.OK);
        }else {
            throw new AccessDenied();
        }
    }

    @PutMapping("/update-restaurant")
    public ResponseEntity<?> updateRestaurant(HttpServletRequest request,@RequestBody Restaurant restaurant) throws AccessDenied {
        String roleforverification=(String) request.getAttribute("roleforVerification");
        if(roleforverification.equals("ADMIN")) {
            return new ResponseEntity<>(restaurantService.updateRestaurant(restaurant), HttpStatus.OK);
        }else {
            throw new AccessDenied();
        }
    }


    @DeleteMapping("/delete-restaurant/{restaurantId}")
    public ResponseEntity<?> deleteRestaurant(HttpServletRequest request,@PathVariable String restaurantId) throws AccessDenied {
        String roleforverification=(String) request.getAttribute("roleforVerification");
        if(roleforverification.equals("ADMIN")) {
            return new ResponseEntity<>(restaurantService.deleteRestaurant(restaurantId), HttpStatus.OK);
        }else {
            throw new AccessDenied();
        }
    }




//    @PostMapping("/add-menu/{restaurantId}")
//    public ResponseEntity<?> addMenu(@RequestBody Menu menu,@PathVariable String restaurantId){
//        IdGenerator id=new IdGenerator();
//        menu.setItemId(id.generateMenuId(restaurantId,menu.getItemName()));
//        return new ResponseEntity<>(restaurantService.addMenuItem(menu,restaurantId), HttpStatus.OK);
//
//    }

        @PostMapping("/add-menu/{restaurantId}")
       public ResponseEntity<?> addMenu(@RequestParam("menu") String menuString,
                                        @RequestParam("itemImage") MultipartFile image,@PathVariable String restaurantId) throws IOException {
            IdGeneratorr id=new IdGeneratorr();
            Menu menu= mapper.readValue(menuString, Menu.class);
            menu.setItemId(id.generateMenuId(restaurantId,menu.getItemName()));
            menu.setQuantity(1);
            menu.setItemImage(Base64.getEncoder().encodeToString(image.getBytes()));
            return new ResponseEntity<>(restaurantService.addMenuItem(menu,restaurantId), HttpStatus.OK);
    }

    @PutMapping("/update-menu/{restaurantId}")
    public ResponseEntity<?> updateMenu(@RequestBody Menu menu,@PathVariable String restaurantId){
        return new ResponseEntity<>(restaurantService.updateMenu(menu,restaurantId), HttpStatus.OK);
    }

    @PostMapping("/delete-menuItem/{restaurantId}")
    public ResponseEntity<?> deleteMenuItem(@RequestBody Menu menu,@PathVariable String restaurantId){
        return new ResponseEntity<>(restaurantService.deleteMenuItem(menu,restaurantId),HttpStatus.OK);
    }

    @GetMapping("/get-restaurantByEmailId/{restaurantEmailId}")
    public ResponseEntity<?> restaurantByEmailId(@PathVariable String restaurantEmailId){
        return  new ResponseEntity<>(restaurantService.restaurantByEmailId(restaurantEmailId),HttpStatus.OK);
    }

    @GetMapping("/get-returantById/{restaurantId}")
    public ResponseEntity<?> restaurantById(@PathVariable String restaurantId){
        return  new ResponseEntity<>(restaurantService.restaurantById(restaurantId),HttpStatus.OK);
    }
}
