
# Express.js RESTful API Assignment

## Overview
This project is a RESTful API for managing products, built with Express.js. It demonstrates CRUD operations, routing, middleware, error handling, and advanced features like filtering, pagination, search, and statistics.

## Features
- CRUD operations for products
- Middleware for logging, authentication, and validation
- Global error handling with custom error classes
- Filtering, pagination, search, and statistics endpoints

## Setup
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the server:**
   ```bash
   npm start
   ```
   The server runs on [http://localhost:3000](http://localhost:3000) by default.

## Environment Variables
Copy `.env.example` to `.env` and set your environment variables as needed. For this demo, the API key is hardcoded as `mysecretkey`.

## Middleware
- **Logger:** Logs request method, URL, and timestamp.
- **Authentication:** Requires `x-api-key` header for all `/api` routes.
- **Validation:** Validates product data for POST and PUT requests.

## Error Handling
- Custom error classes: `NotFoundError`, `ValidationError`
- Global error handler returns JSON with status code and message

## API Endpoints

### Authentication
All `/api` routes require the header:
```
x-api-key: mysecretkey
```

### Product Endpoints

#### List Products (with filtering & pagination)
- **GET** `/api/products`
- **Query Params:**
  - `category` (optional): filter by category
  - `page` (optional): page number (default 1)
  - `limit` (optional): items per page (default: all)
- **Example:**
  ```bash
  curl -H "x-api-key: mysecretkey" "http://localhost:3000/api/products?category=electronics&page=1&limit=2"
  ```
- **Response:**
  ```json
  {
    "total": 2,
    "page": 1,
    "limit": 2,
    "products": [
      { "id": "1", "name": "Laptop", ... },
      { "id": "2", "name": "Smartphone", ... }
    ]
  }
  ```

#### Get Product by ID
- **GET** `/api/products/:id`
- **Example:**
  ```bash
  curl -H "x-api-key: mysecretkey" http://localhost:3000/api/products/1
  ```

#### Create Product
- **POST** `/api/products`
- **Body:**
  ```json
  {
    "name": "Tablet",
    "description": "10-inch display",
    "price": 300,
    "category": "electronics",
    "inStock": true
  }
  ```
- **Example:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -H "x-api-key: mysecretkey" -d '{"name":"Tablet","description":"10-inch display","price":300,"category":"electronics","inStock":true}' http://localhost:3000/api/products
  ```

#### Update Product
- **PUT** `/api/products/:id`
- **Body:** Same as create

#### Delete Product
- **DELETE** `/api/products/:id`

#### Search Products by Name
- **GET** `/api/products/search?name=lap`
- **Example:**
  ```bash
  curl -H "x-api-key: mysecretkey" "http://localhost:3000/api/products/search?name=lap"
  ```

#### Product Statistics
- **GET** `/api/products/stats`
- **Example:**
  ```bash
  curl -H "x-api-key: mysecretkey" http://localhost:3000/api/products/stats
  ```
- **Response:**
  ```json
  {
    "electronics": 2,
    "kitchen": 1
  }
  ```

## Error Responses
- **404 Not Found:**
  ```json
  { "error": "NotFoundError", "message": "Product not found" }
  ```
- **400 Validation Error:**
  ```json
  { "error": "ValidationError", "message": "Invalid product data" }
  ```
- **401 Unauthorized:**
  ```json
  { "error": "Error", "message": "Unauthorized: Invalid or missing API key" }
  ```

## Project Structure
```
.
├── controllers/
├── errors/
│   ├── NotFoundError.js
│   └── ValidationError.js
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   ├── logger.js
│   └── validateProduct.js
├── routes/
│   └── products.js
├── utils/
├── server.js
├── README.md
├── .env.example
└── Week2-Assignment.md
```

## Notes
- All data is stored in-memory (no database).
- For testing, use Postman, Insomnia, or curl.
- See `Week2-Assignment.md` for full assignment details. 