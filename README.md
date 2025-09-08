# 🎬 Movie Management API

A **Node.js + Express** based REST API for managing movies with full **CRUD support**, **caching**, **rate limiting**, and **auto-generated Swagger documentation**.

---

## 🚀 Features

- 📌 **CRUD for Movies** – Create, Read, Update, Delete movies  
- ✅ **Input Validation** – Powered by **Zod** to validate request payloads  
- ⚡ **Caching Layer** – Uses **Node-Cache** to reduce DB load  
- 🛡️ **Rate Limiting** – Prevents DoS attacks with **express-rate-limit**  
- 🗄️ **Database Access** – **Prisma ORM** with PostgreSQL  
- 📖 **API Documentation** – Integrated **Swagger UI**  
- 🧪 **Testing Ready** – Compatible with Postman & automation tools  

---

## 🛠️ Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Validation:** Zod  
- **ORM:** Prisma  
- **Database:** PostgreSQL  
- **Cache:** Node-Cache  
- **Security:** Express-Rate-Limit  
- **Docs:** Swagger UI  

---

## 📂 Project Setup (Run Locally)

```
git clone https://github.com/Ajitwaman980/ZYMR-Assignment-.git
cd ZYMR-Assignment-
npm install
cd src
npx prisma generate
nodemon bin.js or node bin.js
```


---

## 📜 API Endpoints Overview

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| GET    | `/movies`      | Get all movies    |
| GET    | `/movies/:id`  | Get a movie by ID |
| POST   | `/movies`      | Add new movie     |
| PUT    | `/movies/:id`  | Update a movie    |
| DELETE | `/movies/:id`  | Delete a movie    |

---

## 🔒 Security Features

- **Rate Limiting:** Restricts excessive requests from the same IP  
- **Input Validation:** Prevents invalid data submission  
- **Error Handling:** Structured error responses  

---

## 📖 API Documentation

Swagger UI available at:  
👉 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
