# Shop Plus Plus

Shop plus plus is an e-commerce platform that offers a seamless shopping experience for users. With a focus on user-friendly design and robust features, Shop plus plus aims to provide a versatile solution for both customers and administrators.

## Overview

Shop plus plus encompasses a range of features designed to enhance the online shopping process. From user authentication and product management to order tracking and analytics, the platform caters to the needs of both customers and administrators. The application's responsive design ensures accessibility across various devices, contributing to a positive user experience.

## Key Highlights

1. **Responsive Design:** Enjoy a consistent and responsive user interface on any device.
2. **Product Management:** Effortlessly manage and showcase products with detailed information.
3. **User Authentication:** Register, log in, and maintain user profiles securely.
4. **Shopping Cart:** Add, view, and purchase products seamlessly with a robust shopping cart.
5. **User Dashboard:** Provide users with a dedicated space to manage their accounts and orders.
6. **Admin Panel:** Empower administrators with comprehensive tools for efficient store management.
7. **Order Management:** Effectively handle and track customer orders for improved service.
8. **Chat System:** Enable communication between users and administrators for support and inquiries.
9. **Analytics Dashboard:** Gain insights into key metrics for informed decision-making.
10. **SEO Optimization:** Optimize the application for search engines to reach a broader audience.

## Getting Started

### Prerequisites

- JavaScript
- React and React BootStrap
- NodeJS
- ExpressJS
- MongoDb

### Installation

```bash
#Clone the repository
git clone https://github.com/Jamuna-nagendran/shop-plus-plus.git

#Change into the project directory folder
cd shop-plus-plus

#Change to the app folder
cd app

#Install all the required dependencies for frontend develpoment
npm install

#Change to the server folder
cd server

#Install all the required dependencies for the backend development
npm install
```

> **Note:** Make sure you have your own credentials

- In `server/.env` file for the `MONGO_URI` variable.
- In `app/src/pages/user/UserOrderDetailsPage.js` for PayPal `client-id`.

> This ensures that you use your own credentials for MongoDB and PayPal integration.

### Running the Application

```bash
#Change to the server folder
cd server

#Start the application
npm run dev
```

#### Populate the Database (Optional)

Optionally, you can seed data into the database by running the following command in the server folder:

```bash
#Delete the existing data in the Database
npm seed:data-d

#Populate Database with new Data
npm seed:data
```

## Application Features

## User Features

### Homepage

- **Intuitive Navigation**: Easily explore the platform with a user-friendly interface.

- **Category Exploration**: Discover a variety of products categorized for convenient browsing.

- **Bestsellers**: Stay updated with trending and popular products.

## Category Pages

- **Smart Filters**: Narrow down product searches with intelligent filtering options.

- **Sorting Options**: Arrange products based on preferences for a personalized experience.

- **Product Cards**: Visual representation of products for quick decision-making.

- **Detailed Product Information**: Access comprehensive details about each product.

## Shopping Cart

- **Seamless Shopping**: Effortlessly add and manage items in the cart.

- **User-Friendly Checkout**: Smooth and straightforward checkout process.

### User Authentication

- **User Registration**: Create an account to unlock personalized features.

- **User Login**: Securely access your account with login credentials.

- **User Reviews**: Share your thoughts and read reviews from other users.

## Admin Features

### Admin Dashboard

- **Product Management**: Efficiently handle product listings and updates.

- **Order Management**: Streamlined process to manage and track customer orders.

- **User Management**: Administer user accounts and permissions.

- **Real-Time Chat**: Communicate instantly with users for support and inquiries.

### Sales Analytics

- **Visual Performance Metrics**: Gain insights into key sales data with visual analytics.

### Chat System

- **Multi-User Interaction**: Admins can engage in real-time conversations with multiple users.

- **Online Status Indicator**: Quickly identify user availability for effective communication.

- **Notification System**: Receive alerts for new messages and updates.

## Testing

To test the application run the following commands

```bash
#Change to app folder
cd app

#Run command to test frontend code
npm test

#Change to server folder
cd server

#Run command to test backend code
npm run test
```
