# 🎬 Movie Management API


This project is a simple **Movie Management API** that supports full CRUD operations along with input validation, caching, and rate limiting.

---

## 🔹 Features
- **CRUD for Movies** – Create, Read, Update, Delete
- **Input Validation** – using  to validate request payloads
- **Caching Layer** – node-cache to reduce database load (similar in concept to Redis)
- **Rate Limiting** – express-rate-limitprevents IP-based DoS attacks
- **Database Access** – Prisma as ORM to interact with **PostgreSQL**
- **Swagger UI** – Auto-generated API documentation
- **Testing** – Easy to test with Postman or automated tools

---

## 🔹 Tech Stack
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Validation:** Zod  
- **ORM:** Prisma  
- **Cache:** Node-Cache  
- **Security:** Express-Rate-Limit  
- **Database:** PostgreSQL  
- **Docs:** Swagger UI  

---

## 🔹 Project Structure
src/
├─ controller
├─ routes
├─ middleware
├─ swagger
├─ index.js 
├─ bin.js 
└─ test/

---

## 🔹 How to Run Locally

1. **Clone Repository**
   ```bash
   git clone https://github.com/Ajitwaman980/ZYMR-Assignment-.git
```

cd src

nodemon bin.js
```


