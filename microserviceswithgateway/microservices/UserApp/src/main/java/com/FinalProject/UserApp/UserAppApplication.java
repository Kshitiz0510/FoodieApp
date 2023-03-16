package com.FinalProject.UserApp;

import com.FinalProject.UserApp.jwtfilter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@EnableEurekaClient
public class UserAppApplication {
	@Bean
	public FilterRegistrationBean filterUrl()
	{
		FilterRegistrationBean frb=new FilterRegistrationBean();
		frb.setFilter(new JwtFilter());

		frb.addUrlPatterns("/user-app-a1/get-all-users","/user-app-a1/get-user-details","/user-app-a1/add-restaurant/*","/user-app-a1/add-menuItem","/user-app-a1/remove-menuItem","/user-app-a1/addMenuToCart","/user-app-a1/removeMenuFromCart","/user-app-a1/getTotalOfCart","/user-app-a1/empty-cart");

		return frb;
	}
//	@Bean
//	public FilterRegistrationBean filterRegistrationBean(){
//		final CorsConfiguration config=new CorsConfiguration();
//		config.setAllowCredentials(true);
//		config.addAllowedOrigin("http://localhost:4200");
//		config.addAllowedHeader("*");
//		config.addAllowedMethod("*");
//		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/**",config);
//		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
//		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//		return bean;
//
//	}

	public static void main(String[] args) {
		SpringApplication.run(UserAppApplication.class, args);

	}

}
