package com.bookstore.repository;

import com.bookstore.model.InventoryBook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InventoryBookRepository extends JpaRepository<InventoryBook, Long> {

    // Find books by category
    List<InventoryBook> findByCategory(String category);

    // Find a book by title
    Optional<InventoryBook> findByTitle(String title);

// Find a book by author
    List<InventoryBook> findByAuthor(String author);
    }