package com.bookstore.service;

import com.bookstore.model.InventoryBook;
import com.bookstore.repository.InventoryBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryBookService {

    @Autowired
    private InventoryBookRepository inventoryBookRepository;

    // Add a new book to the inventory
    public String addBook(InventoryBook book) {
        inventoryBookRepository.save(book);
        return "Book added successfully!";
    }

    // Update an existing book
    public String updateBook(Long id, InventoryBook book) {
        Optional<InventoryBook> existingBook = inventoryBookRepository.findById(id);
        if (existingBook.isPresent()) {
            InventoryBook currentBook = existingBook.get();
            currentBook.setTitle(book.getTitle());
            currentBook.setAuthor(book.getAuthor());
            currentBook.setDescription(book.getDescription());
            currentBook.setPrice(book.getPrice());
            currentBook.setImageUrl(book.getImageUrl());
            currentBook.setCategory(book.getCategory());
            currentBook.setStock(book.getStock());
            inventoryBookRepository.save(currentBook);
            return "Book updated successfully!";
        }
        return "Book not found!";
    }

    // Get all books in inventory
    public List<InventoryBook> getAllBooks() {
        return inventoryBookRepository.findAll();
    }

    // Get books by category
    public List<InventoryBook> getBooksByCategory(String category) {
        return inventoryBookRepository.findByCategory(category);
    }

    // Get book by title
    public Optional<InventoryBook> getBookByTitle(String title) {
        return inventoryBookRepository.findByTitle(title);
    }

    // Delete a book from the inventory
    public String deleteBook(Long id) {
        Optional<InventoryBook> existingBook = inventoryBookRepository.findById(id);
        if (existingBook.isPresent()) {
            inventoryBookRepository.deleteById(id);
            return "Book deleted successfully!";
        }
        return "Book not found!";
    }
}
