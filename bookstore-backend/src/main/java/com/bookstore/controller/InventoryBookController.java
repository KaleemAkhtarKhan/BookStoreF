package com.bookstore.controller;

import com.bookstore.model.InventoryBook;
import com.bookstore.service.InventoryBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class InventoryBookController {

    @Autowired
    private InventoryBookService inventoryBookService;

    // Add a new book to the inventory
    @PostMapping("/add")
    public ResponseEntity<?> addBook(@RequestBody InventoryBook book) {
        String result = inventoryBookService.addBook(book);
        return ResponseEntity.ok(result);
    }

    // Update an existing book
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateBook(@PathVariable Long id, @RequestBody InventoryBook book) {
        String result = inventoryBookService.updateBook(id, book);
        return ResponseEntity.ok(result);
    }

    // Get all books in the inventory
    @GetMapping("/")
    public ResponseEntity<List<InventoryBook>> getAllBooks() {
        List<InventoryBook> books = inventoryBookService.getAllBooks();
        return ResponseEntity.ok(books);
    }

    // Get books by category
    @GetMapping("/category/{category}")
    public ResponseEntity<List<InventoryBook>> getBooksByCategory(@PathVariable String category) {
        List<InventoryBook> books = inventoryBookService.getBooksByCategory(category);
        return ResponseEntity.ok(books);
    }

    // Get a book by title
    @GetMapping("/title/{title}")
    public ResponseEntity<?> getBookByTitle(@PathVariable String title) {
        Optional<InventoryBook> book = inventoryBookService.getBookByTitle(title);
        if (book.isPresent()) {
            return ResponseEntity.ok(book.get());
        } else {
            return ResponseEntity.status(404).body("Book not found");
        }
    }

    // Delete a book from the inventory
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        String result = inventoryBookService.deleteBook(id);
        return ResponseEntity.ok(result);
    }
}
