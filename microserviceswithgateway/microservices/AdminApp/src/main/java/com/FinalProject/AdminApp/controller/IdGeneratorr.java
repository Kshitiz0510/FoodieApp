package com.FinalProject.AdminApp.controller;

public class IdGeneratorr {
//    String restaurantName;
//
//    public IdGenerator(String restaurantName) {
//        this.restaurantName = restaurantName;
//    }

    public String generateId(String restaurantName){
        int max = 9999999;
        int min = 1000000;
        int range = max - min + 1;
        // generate random numbers within 1 to 10
        int rand = (int)(Math.random() * range) + min;
        // Output is different everytime this code is executed

        String name=restaurantName.substring(0,3);
        String result=name+rand;
        System.out.println(result);
        return result;
    }

    public String generateMenuId(String restaurantId,String menuName){
        int max = 9999;
        int min = 1000;
        int range = max - min + 1;
        int rand = (int)(Math.random() * range) + min;
        return restaurantId+menuName.substring(0,3)+rand;
    }
}
