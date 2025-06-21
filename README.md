# 📚 BookNerds – Online Rehashed Bookstore

![Login and Footer UI Preview](./frontend/public/login-footer-screenshot.png)

## 🌐 Live Demo
> _Coming soon

---

## 📌 Project Overview
BookNerds is an online platform where users can **buy** and **sell** used books. It is designed to promote book recycling and offer affordable options to readers.

---

## 🧩 Tech Stack

| Frontend | Backend | Database |
|----------|---------|----------|
| React.js, Bootstrap | Spring Boot (Java) | MySQL |

---

## ✨ Features
- 🛒 Browse and Buy Books
- 📦 Sell Books (with image upload support)
- 🧾 Cart Management (Add, Remove, Quantity Update)
- 🔐 JWT-Based User Authentication (Login/Register)
- 📷 Upload images using public Google Drive shareable links
- 📞 Beautiful footer with contact details and social icons

---

## 📁 Project Structure

### 📦 Frontend – React
```
bookstore-frontend/
├── public/
│   └── login-footer-screenshot.png
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── BuyBooks.js
│   │   ├── SellBooks.js
│   │   ├── BookDetails.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── styles/
│   │       ├── PageStyles.css
│   │       └── Auth.css
│   ├── App.js
│   ├── App.css
│   └── index.js
```

### 🖥️ Backend – Spring Boot
```
bookstore-backend/
├── controller/
├── model/
├── repository/
├── service/
├── security/
└── application.properties
```

---

## 🔐 Authentication
- JWT token-based authentication.
- Secure API routes with Spring Security.
- Token saved in `localStorage` and passed in headers.

---

## 🖼️ Image Handling
- Images can be hosted via public Google Drive links.
- Make sure to get the **shareable link**, extract the file ID, and format as:

```
https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
```

Example:
```js
imageUrl: 'https://drive.google.com/uc?export=view&id=1kL-SYk4DHkp0bzwUEhJGz0wKCtBqJlqa'
```

---

## 🧪 How to Run Locally
### Backend
```bash
cd bookstore-backend
./mvnw spring-boot:run
```
### Frontend
```bash
cd bookstore-frontend
npm install
npm start
```

---

## 🧑‍💻 Author
**Kaleem Akhtar Khan**  
📧 Email: kaleemakhtarkhan1@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/kaleem-akhtar-khan-3075092b6/)  
📍 Location: Lucknow, INDIA  

---

## 🫶 Credits
© 2025 **BookNerds**. Powered by KaleemAkhtar / DevTeam  
Made with ❤️ and ☕ in India.

---
