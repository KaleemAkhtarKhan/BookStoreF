// src/main/java/com/bookstore/controller/CartController.java
package com.bookstore.controller;

import com.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    // Add a book to the cart
    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestParam Long userId, @RequestParam Long bookId, @RequestParam int quantity) {
        String result = cartService.addToCart(userId, bookId, quantity);
        return ResponseEntity.ok(Map.of("message", result));
    }

    // Get all items in the user's cart
    @GetMapping("/items")
    public ResponseEntity<?> getCartItems(@RequestParam Long userId) {
        return ResponseEntity.ok(cartService.getCartItems(userId));
    }

    // Remove a book from the cart
    @DeleteMapping("/remove")
    public ResponseEntity<?> removeFromCart(@RequestParam Long userId, @RequestParam Long bookId) {
        String result = cartService.removeFromCart(userId, bookId);
        return ResponseEntity.ok(Map.of("message", result));
    }

    // Update the quantity of a book in the cart
    @PutMapping("/update")
    public ResponseEntity<?> updateQuantity(@RequestParam Long userId, @RequestParam Long bookId, @RequestParam int quantity) {
        String result = cartService.updateQuantity(userId, bookId, quantity);
        return ResponseEntity.ok(Map.of("message", result));
    }
    @GetMapping("/test")
public String test() {
    return "CartController is working!";
}

}
