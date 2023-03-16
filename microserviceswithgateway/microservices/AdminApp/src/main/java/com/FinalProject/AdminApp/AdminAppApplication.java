package com.FinalProject.AdminApp;

import com.FinalProject.AdminApp.jwtfilter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@EnableFeignClients
@EnableEurekaClient
public class AdminAppApplication {
	@Bean
	public FilterRegistrationBean filterUrl()
	{
		FilterRegistrationBean frb=new FilterRegistrationBean();
		frb.setFilter(new JwtFilter());

		frb.addUrlPatterns("/admin-app/get-all-new-restaurant","/admin-app/add-restaurant","/admin-app/add-new-restaurant","/admin-app/delete-new-restaurant/*","/admin-app/update-restaurant","/admin-app/delete-restaurant/*","/admin-app/add-menu/*","/admin-app/update-menu/*","/admin-app/delete-menuItem/*");

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
		SpringApplication.run(AdminAppApplication.class, args);
	}

}
