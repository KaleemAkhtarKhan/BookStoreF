// src/main/java/com/bookstore/repository/CartItemRepository.java
package com.bookstore.repository;

import com.bookstore.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    List<CartItem> findByUserId(Long userId);  // Find all cart items for a specific user
    Optional<CartItem> findByUserIdAndBookId(Long userId, Long bookId);  // Find specific cart item for a user
}
