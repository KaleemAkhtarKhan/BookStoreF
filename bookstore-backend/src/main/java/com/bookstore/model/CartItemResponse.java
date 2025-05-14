package com.bookstore.model;

public class CartItemResponse {
    private Long bookId;
    private String title;
    private String imageUrl;
    private double price;
    private int quantity;

    public CartItemResponse(Long bookId, String title, String imageUrl, double price, int quantity) {
        this.bookId = bookId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;
    }

    public Long getBookId() {
        return bookId;
    }

    public String getTitle() {
        return title;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }
}
