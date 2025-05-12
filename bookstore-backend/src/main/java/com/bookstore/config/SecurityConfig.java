
package com.bookstore.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.Customizer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.lang.NonNull;



@Configuration
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for simplicity
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/books/**").authenticated()
                .anyRequest().permitAll()
            )
            .httpBasic(Customizer.withDefaults()) // You can replace with .formLogin() if needed
            .cors(Customizer.withDefaults()); // Register CORS settings here

        return http.build();
    }

    // This method overrides addCorsMappings and explicitly defines it as non-null
    @Override
    public void addCorsMappings( @NonNull CorsRegistry registry) {
        // Allow frontend requests from localhost:5173 (React)
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173") // Update with your frontend URL
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
    @Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
    
}
