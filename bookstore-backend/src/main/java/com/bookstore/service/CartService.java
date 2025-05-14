
package com.bookstore.service;

import com.bookstore.model.CartItem;
import com.bookstore.model.CartItemResponse;
import com.bookstore.model.InventoryBook;
import com.bookstore.repository.CartItemRepository;
import com.bookstore.repository.InventoryBookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class CartService {
    
    @Autowired
    private InventoryBookRepository inventoryBookRepository;


    @Autowired
    private CartItemRepository cartItemRepository;

    
    

    // Add a book to the cart
    public String addToCart(Long userId, Long bookId, int quantity) {
        Optional<CartItem> existingCartItem = cartItemRepository.findByUserIdAndBookId(userId, bookId);

        if (existingCartItem.isPresent()) {
            CartItem cartItem = existingCartItem.get();
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
            cartItemRepository.save(cartItem);
        } else {
            CartItem cartItem = new CartItem(userId, bookId, quantity);
            cartItemRepository.save(cartItem);
        }

        return "Book added to cart successfully!";
    }

    // Get all cart items for a user
  public List<CartItemResponse> getCartItems(Long userId) {
    List<CartItem> items = cartItemRepository.findByUserId(userId);
    List<CartItemResponse> response = new ArrayList<>();

    for (CartItem item : items) {
        Optional<InventoryBook> bookOpt = inventoryBookRepository.findById(item.getBookId());
        if (bookOpt.isPresent()) {
            InventoryBook book = bookOpt.get();
            response.add(new CartItemResponse(
                book.getId(),
                book.getTitle(),
                book.getImageUrl(),
                book.getPrice(),
                item.getQuantity()
            ));
        }
    }

    return response;
    }

    // Remove an item from the cart
    public String removeFromCart(Long userId, Long bookId) {
        Optional<CartItem> cartItem = cartItemRepository.findByUserIdAndBookId(userId, bookId);
        if (cartItem.isPresent()) {
            cartItemRepository.delete(cartItem.get());
            return "Book removed from cart successfully!";
        } else {
            return "Book not found in cart!";
        }
    }

    // Update the quantity of a book in the cart
    public String updateQuantity(Long userId, Long bookId, int quantity) {
        Optional<CartItem> cartItem = cartItemRepository.findByUserIdAndBookId(userId, bookId);
        if (cartItem.isPresent()) {
            CartItem item = cartItem.get();
            item.setQuantity(quantity);
            cartItemRepository.save(item);
            return "Quantity updated successfully!";
        } else {
            return "Book not found in cart!";
        }
    }
}
