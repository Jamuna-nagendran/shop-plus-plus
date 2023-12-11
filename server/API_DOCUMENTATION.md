# Shop Plus Plus API Documentation

Welcome to the API documentation for my Shop Plus Plus E-Commerce platform. Here you'll find information about the available endpoints, request methods, and required parameters.

## Products

### User and Common Routes

#### Get Products

- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Description:** Get a list of products.
- **Status Code:**
  - 200 (OK)
  - 500 (Internal Server Error)

#### Get Products by Category

- **Endpoint:** `api/products/category/:categoryName`
- **Method:** `GET`
- **Description:** Retrieve a list of products belonging to a specific category.
- **Parameters:**
  - `categoryName` (String): The name of the category.
- **Status Code:**
  - 200 (OK)
  - 500 (Internal Server Error)

#### Get Products by Category and Search

- **Endpoint:** `api/products/category/:categoryName/search/:searchQuery`
- **Method:** `GET`
- **Description:** Retrieve a list of products based on a specific category and search query.
- **Parameters:**
  - `categoryName` (String): The name of the category.
  - `searchQuery` (String): The search query.
- **Status Code:**
  - 200 (OK)
  - 500 (Internal Server Error)

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
  - `401 Unauthorized`: User authentication.
  - `400 Bad Request`: malformed request

### Delete Product Image (Admin)

- **Endpoint:** `api/products/admin/image/:imagePath/:productId`
- **Method:** `DELETE`
- **Description:** Delete a specific product (admin only).
- **Parameters:**
  - `id` (String): The ID of the product.
- **Status Codes:**
  - `200 OK`: Successful request.
  - `401 Unauthorized`: User authentication.
  - `400 Bad Request`: malformed request

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
    "description": "Product description",
    "category": "Electronics",
    "count": 10,
    "price": 99.99,
    "attrs": [
      { "key": "Color", "value": "Red" },
      { "key": "Size", "value": "Large" }
    ]
  }
  ```

### Update Product

- **Endpoint:** `/api/products/:id`
- **Method:** `PUT`
- **Description:** Update an existing product.
- **Parameters:**
  - `id` (required): Product ID.
  - Any product details to be updated.

### Delete Product

- **Endpoint:** `/api/products/:id`
- **Method:** `DELETE`
- **Description:** Delete a product.
- **Parameters:**
  - `id` (required): Product ID.

## Users

### Register User

- **Endpoint:** `/api/users/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Parameters:**
  - `name` (required): User's first name.
  - `lastName` (required): User's last name.
  - `email` (required): User's email address.
  - `password` (required): User's password.

### Login User

- **Endpoint:** `/api/users/login`
- **Method:** `POST`
- **Description:** Log in an existing user.
- **Parameters:**
  - `email` (required): User's email address.
  - `password` (required): User's password.

### Update User Profile

- **Endpoint:** `/api/users/profile`
- **Method:** `PUT`
- **Description:** Update user profile.
- **Parameters:**
  - Any user details to be updated.

### Get User Profile

- **Endpoint:** `/api/users/profile/:id`
- **Method:** `GET`
- **Description:** Get user profile by ID.
- **Parameters:**
  - `id` (required): User ID.

### Write Review

- **Endpoint:** `/api/users/reviews/:productId`
- **Method:** `POST`
- **Description:** Write a product review.
- **Parameters:**
  - `comment` (required): Review comment.
  - `rating` (required): Review rating.

## Orders

### Get User Orders

- **Endpoint:** `/api/orders`
- **Method:** `GET`
- **Description:** Get orders for the authenticated user.

### Get Order by ID

- **Endpoint:** `/api/orders/:id`
- **Method:** `GET`
- **Description:** Get details of a specific order.
- **Parameters:**
  - `id` (required): Order ID.

### Create Order

- **Endpoint:** `/api/orders`
- **Method:** `POST`
- **Description:** Create a new order.
- **Parameters:**
  - `cartItems` (required): Array of items in the cart.
  - `orderTotal` (required): Total cost of the order.
  - `paymentMethod` (required): Payment method.

### Update Order to Paid

- **Endpoint:** `/api/orders/:id/pay`
- **Method:** `PUT`
- **Description:** Update order status to paid.
- **Parameters:**
  - `id` (required): Order ID.

### Update Order to Delivered

- **Endpoint:** `/api/orders/:id/deliver`
- **Method:** `PUT`
- **Description:** Update order status to delivered.
- **Parameters:**
  - `id` (required): Order ID.

### Get All Orders

- **Endpoint:** `/api/orders/all`
- **Method:** `GET`
- **Description:** Get all orders.
