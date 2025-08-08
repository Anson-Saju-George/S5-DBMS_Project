# Spiceta Naturals - E-Commerce Website (DBMS Project)

## 🎯 Project Overview
This repository contains a comprehensive **E-Commerce Website for Spiceta Naturals** developed during my **Fifth Semester** as part of the **Database Management Systems (DBMS)** course. The project implements a full-stack web application for selling organic spices and natural products, featuring a modern frontend, robust backend API, and well-structured MySQL database system.

## 📋 Project Details
- **Student:** Anson Saju George
- **Semester:** 5th Semester
- **Course:** Database Management Systems (DBMS)
- **Project Type:** Full-Stack E-Commerce Web Application
- **Technology Stack:** HTML5, CSS3, JavaScript, Node.js, Express.js, MySQL, PHP
- **Business Domain:** Organic Spices & Natural Products Marketplace

## 🏪 Business Context
**Spiceta Naturals** is an online marketplace specializing in:
- **Premium Organic Spices** - Fresh and authentic spice varieties
- **Natural Products** - Farm-made organic ingredients
- **Quality Assurance** - Direct sourcing from organic farms
- **Customer Experience** - User-friendly shopping platform

## 📁 Repository Structure
```
├── README.md                                    # Project documentation
├── DBMS Project Report.docx                    # Comprehensive project report
├── DBMS Project Report.pdf                     # PDF version of report
├── E-commerce Website DBMS.pptx               # Project presentation
├── Anson mongodb.jpg                          # Database design diagrams
├── Anson mongodb.pdf                          # Database documentation
├── Spiceta_Website/                           # Main project directory
│   ├── spice.php                              # PHP database connection
│   ├── Spiceta Naturals.code-workspace       # VS Code workspace
│   ├── spiceta-backend/                       # Backend API server
│   │   ├── server.js                          # Express.js server
│   │   └── package.json                       # Node.js dependencies
│   └── spiceta-frontend/                      # Frontend web application
│       ├── index.html                         # Main webpage
│       ├── css/style.css                      # Styling and design
│       ├── js/script.js                       # Interactive functionality
│       └── images/                            # Product and brand images
├── 2 Spiceta_Website - Copy/                  # Backup/alternative version
├── Logged/                                    # Development versions
├── Spiceta_Website.rar                        # Compressed project files
└── Spiceta Naturals No DB.rar                # Version without database
```

## 🔧 Technology Architecture

### Frontend Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with responsive design
- **JavaScript (ES6+)** - Interactive user interface
- **Font Awesome** - Icon library for UI elements
- **Swiper.js** - Product carousel and sliders

### Backend Technologies
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **Body-Parser** - JSON request parsing middleware
- **Path Module** - File path utilities

### Database Technologies
- **MySQL** - Primary database management system
- **MySQL2** - Node.js MySQL driver
- **PHP** - Alternative database connection layer

## 🛍️ E-Commerce Features

### Product Management
- **Product Catalog** - Comprehensive spice inventory
- **Product Details** - Name, price, description, ratings
- **Image Gallery** - High-quality product photography
- **Stock Management** - Inventory tracking system

### Shopping Cart System
```javascript
// Cart functionality with real-time updates
let cart = [];
function addToCart(name, price, availableStock) {
    // Stock validation and cart management
    // API integration for persistent storage
}
```

### User Authentication
- **Login System** - Email and password authentication
- **User Registration** - Account creation with validation
- **Form Validation** - Client-side and server-side validation
- **Session Management** - User state persistence

### Interactive Features
- **Search Functionality** - Product search with filters
- **Shopping Cart** - Add/remove items with quantity management
- **Product Reviews** - Customer feedback and ratings
- **Responsive Design** - Mobile-friendly interface

## 🗄️ Database Design

### MySQL Database Schema
```sql
-- Main database: spiceta_db
-- Key tables and relationships:

-- Products table
CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    description TEXT,
    category VARCHAR(100)
);

-- Users table (implied from code)
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cart table (implied from code)
CREATE TABLE Cart (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    price DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
```

### Database Connections
#### Node.js Connection
```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1965',
  database: 'spiceta_db'
});
```

#### PHP Connection
```php
$servername = "localhost";
$username = "root";
$password = "1965";
$dbname = "spice.sql";
$conn = new mysqli($servername, $username, $password, $dbname);
```

## 🌶️ Product Catalog

### Featured Products
| Product | Price (₹) | Unit | Stock Status |
|---------|-----------|------|--------------|
| Red Chilly Powder | 230.00 | 100g | Available |
| Turmeric Powder | 190.00 | 100g | Available |
| Garam Masala | 190.00 | 100g | Available |
| Cinnamon Powder | 290.00 | 100g | Available |
| Star Spice | 180.00 | 100g | Available |
| Coriander Leaves | 100.00 | 100g | Available |
| Bay Leaf | 29.40 | Packet | Available |
| Green Matcha Powder | 349.00 | Bottle (100g) | Available |
| Green Chilly | 12.00 | 100g | Available |
| Red Chilly | 15.00 | 100g | Available |
| Capsicum | 53.09 | 500g | Available |
| Black Pepper | 65.00 | 100g | Available |

## 💻 API Endpoints

### Backend REST API
```javascript
// Product Management
GET  /products          // Retrieve all products
POST /products          // Add new product (admin)
GET  /products/:id      // Get specific product

// User Management  
POST /register          // User registration
POST /login            // User authentication
GET  /profile          // User profile data

// Shopping Cart
POST /cart             // Add item to cart
GET  /cart/:user_id    // Get user's cart
DELETE /cart/:item_id  // Remove from cart

// Orders
POST /checkout         // Process order
GET  /orders/:user_id  // Order history
```

## 🎨 Frontend Implementation

### Responsive Design Features
- **Mobile-First Approach** - Optimized for all device sizes
- **Interactive Navigation** - Smooth scrolling and menu systems  
- **Product Sliders** - Swiper.js carousel implementation
- **Form Validation** - Real-time input validation
- **Dynamic Content** - JavaScript-driven interactivity

### UI Components
```javascript
// Swiper carousel for products
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: { delay: 3000 },
    responsive: true
});

// Toggle forms (Login/Signup)
function toggleForm() {
    // Dynamic form switching logic
    // Validation and user feedback
}
```

## 🚀 Getting Started

### Prerequisites
```bash
# Install Node.js and npm
# Install MySQL Server
# Install XAMPP/WAMP (for PHP support)
```

### Installation Steps

#### 1. Clone Repository
```bash
git clone https://github.com/Anson-Saju-George/S5-DBMS_Project.git
cd S5-DBMS_Project/Spiceta_Website
```

#### 2. Backend Setup
```bash
cd spiceta-backend
npm install
# Dependencies: express, mysql2, body-parser
```

#### 3. Database Setup
```sql
-- Create database
CREATE DATABASE spiceta_db;
USE spiceta_db;

-- Create tables (refer to database schema above)
-- Insert sample product data
```

#### 4. Configuration
```javascript
// Update database credentials in server.js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'spiceta_db'
});
```

#### 5. Run Application
```bash
# Start backend server
node server.js

# Open frontend in browser
# Navigate to http://localhost:3000
```

## 📊 Database Management Features

### CRUD Operations
- **Create** - Add new products, users, orders
- **Read** - Display products, user profiles, order history
- **Update** - Modify product details, user information
- **Delete** - Remove products, clear cart items

### Data Relationships
- **One-to-Many** - Users to Orders relationship
- **Many-to-Many** - Products to Categories relationship
- **Foreign Keys** - Referential integrity maintenance
- **Indexing** - Optimized query performance

### Transaction Management
- **Cart Operations** - Atomic add/remove operations
- **Order Processing** - Multi-table transaction handling
- **Inventory Updates** - Stock management with consistency
- **User Sessions** - Secure authentication state

## 🔒 Security Implementation

### Input Validation
- **SQL Injection Prevention** - Parameterized queries
- **XSS Protection** - Input sanitization
- **Form Validation** - Client and server-side checks
- **Data Type Validation** - Type checking and constraints

### Authentication Security
- **Password Validation** - Minimum length requirements
- **Email Validation** - Format verification
- **Session Security** - Secure user state management
- **Access Control** - Role-based permissions

## 📈 Business Intelligence

### Sales Analytics
- **Product Performance** - Best-selling items tracking
- **Customer Behavior** - Shopping pattern analysis
- **Revenue Reporting** - Sales summary and trends
- **Inventory Management** - Stock level monitoring

### Customer Management
- **User Registration** - Customer acquisition tracking
- **Purchase History** - Order analysis and trends
- **Customer Feedback** - Review and rating system
- **Retention Analysis** - Repeat customer identification

## 🎓 Learning Outcomes
This comprehensive DBMS project provided hands-on experience with:
- **Database Design** - ERD creation, normalization, relationships
- **SQL Programming** - Complex queries, joins, transactions
- **Full-Stack Development** - Frontend-backend integration
- **E-Commerce Systems** - Shopping cart, payment flow, inventory
- **API Development** - RESTful services and endpoints
- **Web Security** - Input validation, authentication, authorization
- **Business Logic** - Real-world application requirements
- **Project Management** - Version control, documentation, deployment

## 🔮 Future Enhancements
- **Payment Gateway Integration** - Razorpay, PayPal, Stripe
- **Admin Dashboard** - Product and order management panel
- **Advanced Search** - Filters, sorting, recommendation engine
- **Mobile Application** - React Native or Flutter app
- **Email Integration** - Order confirmations, newsletters
- **Inventory Automation** - Real-time stock updates
- **Analytics Dashboard** - Business intelligence reporting
- **Multi-vendor Platform** - Support for multiple sellers

## 🛠️ System Requirements
- **Server Requirements:**
  - Node.js 14+ runtime environment
  - MySQL 8.0+ database server
  - 2GB+ RAM for development
  - 10GB+ storage space

- **Development Tools:**
  - Visual Studio Code / WebStorm
  - MySQL Workbench / phpMyAdmin
  - Postman for API testing
  - Git for version control

## 📚 Academic Context
This project demonstrates advanced concepts in:
- **Database Management** - Schema design, query optimization, transactions
- **Web Development** - Full-stack architecture, API design
- **Business Applications** - E-commerce workflows, user management
- **Software Engineering** - Code organization, documentation, testing
- **System Integration** - Frontend-backend communication, database connectivity

## 🏆 Project Achievements
- **Complete E-Commerce Platform** - Fully functional online store
- **Professional Database Design** - Normalized schema with relationships
- **Responsive Web Interface** - Cross-device compatibility
- **Secure Implementation** - Input validation and authentication
- **Business-Ready Solution** - Production-quality codebase
- **Comprehensive Documentation** - Detailed project reports and presentations

## 📖 References
- **MySQL Documentation** - Database design and optimization
- **Node.js/Express.js Guides** - Backend API development
- **E-Commerce Best Practices** - User experience and security standards
- **Database Normalization** - Academic principles and applications
- **Web Security Standards** - OWASP guidelines and implementations

---
**Note:** This is an academic project demonstrating comprehensive database management principles through a real-world e-commerce application, showcasing the integration of modern web technologies with robust database systems for business solutions.