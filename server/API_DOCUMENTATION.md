# Shop Plus Plus API Documentation

Welcome to the API documentation for my Shop Plus Plus E-Commerce platform. Here you'll find information about the available endpoints, request methods, and required parameters.

## Products

### User and Common Routes

#### Get Products

- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Description:** Get a list of products.
- **Status Code:**
  - `200 OK`: Successful request.
  - `500 Internal Server Error`: Internal server error.

#### Get Products by Category

- **Endpoint:** `api/products/category/:categoryName`
- **Method:** `GET`
- **Description:** Retrieve a list of products belonging to a specific category.
- **Parameters:**
  - `categoryName` (String): The name of the category.
- **Status Code:**
  - `200 OK`: Successful request.
  - `500 Internal Server Error`: Internal server error.

#### Get Products by Category and Search

- **Endpoint:** `api/products/category/:categoryName/search/:searchQuery`
- **Method:** `GET`
- **Description:** Retrieve a list of products based on a specific category and search query.
- **Parameters:**
  - `categoryName` (String): The name of the category.
  - `searchQuery` (String): The search query.
- **Status Code:**
  - `200 OK`: Successful request.
  - `500 Internal Server Error`: Internal server error.

#### Get Bestselling Products

- **Endpoint:** `api/products/bestsellers`
- **Method:** `GET`
- **Description:** Retrieve a list of bestselling products.

#### Get Single Product

- **Endpoint:** `api/products/get-one/:id`
- **Method:** `GET`
- **Description:** etrieve details of a single product.
- **Parameters:**
  - `id` (String): The ID of the product.

### Admin Routes

#### Get All Products (Admin)

- **Endpoint:** `api/products/admin`
- **Method:** `GET`
- **Description:** Retrieve a list of all products (admin only).
- **Parameters:**
  - `id` (String): The ID of the product.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User Authentication failed.
  - `400 Bad Request`: malformed request

#### Delete Product (Admin)

- **Endpoint:** `api/products/admin/:id`
- **Method:** `DELETE`
- **Description:** Delete a specific product (admin only).
- **Parameters:**
  - `id` (String): The ID of the product.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication failed.
  - `400 Bad Request`: malformed request

### Delete Product Image (Admin)

- **Endpoint:** `api/products/admin/image/:imagePath/:productId`
- **Method:** `DELETE`
- **Description:** Delete a specific product (admin only).
- **Parameters:**
  - `id` (String): The ID of the product.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication failed.
  - `400 Bad Request`: malformed request.

#### Update Product (Admin)

- **Endpoint:** `api/products/admin/:id`
- **Method:** `PUT`
- **Description:** Update details of a specific product (admin only).
- **Parameters:**
  - `id` (String): The ID of the product.
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "description": "Updated Product Description",
    "category": "Updated Category",
    "count": 10,
    "price": 99.99,
    "attrs": [
      { "key": "newAttribute", "value": "newValue" },
      { "key": "color", "value": "red" }
    ]
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication failed.
  - `500 Internal Server Error`: Internal server error.

### Upload Product Image (Admin)

- **Endpoint:** `api/products/admin/upload`
- **Method:** `POST`
- **Description:** Upload a new image for a product (admin only).
- **Parameters:**
  - `productId` (required): Product Id.
  - `imagePath` (required): Product Image Path.
- **Request Body:**
  ```json
  {
    "imagePath": "/images/new-image.jpg",
    "productId": "product_id"
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication failed.
  - `500 Internal Server Error`: Internal server error.

#### Create Product

- **Endpoint:** `/api/products`
- **Method:** `POST`
- **Description:** Create a new product.
- **Parameters:**
  - `name` (required): Product name.
  - `description` (required): Product description.
  - `count` (required): Available quantity.
  - `price` (required): Product price.
  - `category` (required): Product category.
  - `attributesTable` (optional): Array of product attributes.
    **Request Body:**
  ```json
  {
    "name": "New Product",
    "description": "Product Description",
    "category": "Category Name",
    "count": 50,
    "price": 49.99,
    "attrs": [
      { "key": "color", "value": "blue" },
      { "key": "size", "value": "XL" }
    ]
  }
  ```

# Order Routes

This module defines the routes for managing user orders and administrative operations related to orders.

## User Routes

### Get User Orders

- **Endpoint:** `/api/orders`
- **Method:** `GET`
- **Middleware:** `verifyIsLoggedIn`
- **Description:** Get orders for the logged-in user.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication failed.
  - `500 Internal Server Error`: Internal server error.

### Get Order by ID (User)

- **Endpoint:** `/api/orders/user/:id`
- **Method:** `GET`
- **Middleware:** `verifyIsLoggedIn`
- **Description:** Get details of a specific order for the logged-in user.
- **Parameters:**
  - `id` (String): Order ID.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication failed.
  - `500 Internal Server Error`: Internal server error.

### Create Order

- **Endpoint:** `/api/orders`
- **Method:** `POST`
- **Middleware:** `verifyIsLoggedIn`
- **Description:** Create a new order for the logged-in user.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication failed.
  - `500 Internal Server Error`: Internal server error.
- **Request Body:**
  ```json
  {
    "items": [
      {
        "productId": "product_id",
        "quantity": 2
      },
      {
        "productId": "another_product_id",
        "quantity": 1
      }
    ],
    "shippingAddress": {
      "address": "123 Main St",
      "city": "Cityville",
      "state": "CA",
      "zipCode": "12345"
    }
  }
  ```

### Update Order to Paid

- **Endpoint:** `/api/orders/paid/:id`
- **Method:** `PUT`
- **Middleware:** `verifyIsLoggedIn`
- **Description:** Update the status of a specific order to paid for the logged-in user.
- **Parameters:**
  - `id` (String): Order ID.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication failed.
  - `500 Internal Server Error`: Internal server error.
- **Request Body:**
  ```json
  {
    "paymentMethod": "paypal",
    "paymentResult": {
      "id": "PAYID-12345678",
      "status": "COMPLETED",
      "update_time": "2023-12-31T12:34:56Z"
    }
  }
  ```

## Admin Routes

### Update Order to Delivered

- **Endpoint:** `/api/orders/delivered/:id`
- **Method:** `PUT`
- **Middleware:** `verifyIsAdmin`
- **Description:** Update the status of a specific order to delivered (admin only).
- **Parameters:**
  - `id` (String): Order ID.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.
- **Request Body:**
  ```json
  {
    "deliveredAt": "2023-12-31T12:34:56Z"
  }
  ```

### Get All Orders (Admin)

- **Endpoint:** `/api/orders/admin`
- **Method:** `GET`
- **Middleware:** `verifyIsAdmin`
- **Description:** Get a list of all orders (admin only).
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

### Get Order for Analysis (Admin)

- **Endpoint:** `/api/orders/analysis/:date`
- **Method:** `GET`
- **Middleware:** `verifyIsAdmin`
- **Description:** Get order details for analysis based on a specific date (admin only).
- **Parameters:**
  - `date` (String): Date in a specific format.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

# Category Routes

This module defines the routes for managing product categories.

## Get Categories

- **Endpoint:** `/api/categories`
- **Method:** `GET`
- **Description:** Get a list of all product categories.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `500 Internal Server Error`: Internal server error.

## Create New Category

- **Endpoint:** `/api/categories`
- **Method:** `POST`
- **Middleware:** `verifyIsLoggedIn`, `verifyIsAdmin`
- **Description:** Create a new product category (admin only).
- **Request Body:**
  ```json
  {
    "name": "New Category Name"
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Delete Category

- **Endpoint:** `/api/categories/:category`
- **Method:** `DELETE`
- **Middleware:** `verifyIsLoggedIn`, `verifyIsAdmin`
- **Description:** Delete a specific product category (admin only).
- **Status Codes:**
  - `200 OK`: Successful request.
  - `500 Internal Server Error`: Internal server error.
- **Parameters:**
  - `category` (String): Name of the category to be deleted.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Save Attribute for Category

- **Endpoint:** `/api/categories/attr`
- **Method:** `POST`
- **Middleware:** `verifyIsLoggedIn`, `verifyIsAdmin`
- **Description:** Save a new attribute for a product category (admin only).
- **Parameters:**
  - `category` (String): Name of the category to be deleted.
  - `attrName` (String): Name of the attribute to be deleted.
  - `attrType` (String): Type of the attribute to be deleted.
- **Request Body:**
  ```json
  {
    "category": "Category Name",
    "attrName": "Attribute Name",
    "attrType": "Attribute Type"
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

# User Routes

This module defines the routes for managing user-related actions.

## Register User

- **Endpoint:** `/api/users/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "name": "User Name",
    "lastName": "User Last Name",
    "email": "user@example.com",
    "password": "user_password"
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `400 Bad Request`: malformed request
  - `500 Internal Server Error`: Internal server error.

## Login User

- **Endpoint:** `/api/users/login`
- **Method:** `POST`
- **Description:** Log in an existing user.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "user_password",
    "doNotLogout": true
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Update User Profile

- **Endpoint:** `/api/users/profile`
- **Method:** `PUT`
- **Middleware:** `verifyIsLoggedIn`
- **Description:** Update the profile of the logged-in user.
- **Request Body:**
  ```json
  {
    "name": "Updated User Name",
    "lastName": "Updated Last Name",
    "phoneNumber": "Updated Phone Number",
    "address": "Updated Address",
    "country": "Updated Country",
    "zipCode": "Updated Zip Code",
    "city": "Updated City",
    "state": "Updated State",
    "password": "updated_user_password"
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Get User Profile

- **Endpoint:** `/api/users/profile`
- **Method:** `PUT`
- **Middleware:** `verifyIsLoggedIn`
- **Description:** Get the profile of a specific user.
- **Parameters:**
  - `id` (String): ID of the user.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Post Review

- **Endpoint:** `/api/users/review/:productId`
- **Method:** `POST`
- **Middleware:** `verifyIsLoggedIn`
- **Description:** Write a review for a specific product.
- **Parameters:**
  - `productId` (String): ID of the product being reviewed.
- **Request Body:**
  ```json
  {
    "comment": "This product is amazing!",
    "rating": 4.5
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Get All Users (Admin)

- **Endpoint:** `/api/users`
- **Method:** `GET`
- **Middleware:** `verifyIsAdmin`
- **Description:** Get a list of all users (admin only).
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Get Single User (Admin)

- **Endpoint:** `/api/users/:id`
- **Method:** `GET`
- **Middleware:** `Get details of a specific user (admin only).`
- **Description:** Get a list of all users (admin only).
- **Parameters:**
  - `id` (String): ID of the user.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Update User (Admin)

- **Endpoint:** `/api/users/:id`
- **Method:** `PUT`
- **Middleware:** `verifyIsLoggedIn`
- **Description:** Update details of a specific user (admin only).
- **Parameters:**
  - `id` (String): ID of the user.
- **Request Body:**
  ```json
  {
    "name": "Updated User Name",
    "lastName": "Updated Last Name",
    "email": "updated_user@example.com",
    "isAdmin": true
  }
  ```
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.

## Delete User (Admin)

- **Endpoint:** `/api/users/:id`
- **Method:** `DELETE`
- **Middleware:** `Get details of a specific user (admin only).`
- **Description:** Delete a specific user (admin only).
- **Parameters:**
  - `id` (String): ID of the user.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: Admin authentication failed.
  - `500 Internal Server Error`: Internal server error.
