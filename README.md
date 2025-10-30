# Demand Forecasting in Agriculture

A full-stack web app using React, Node.js, Express.js, and MySQL
to forecast crop demand and price trends and help connect farmers with wholesalers.

### Features
- Simple React frontend to view forecast data
- REST API built with Express.js
- MySQL backend for storing crop data

### Setup

**Backend**
1. Go to backend folder
   `cd backend`
2. Install dependencies
   `npm install`
3. Create MySQL database
   ```sql
   CREATE DATABASE agri_forecast;
   USE agri_forecast;
   CREATE TABLE crop_prices (
     id INT AUTO_INCREMENT PRIMARY KEY,
     crop_name VARCHAR(50),
     price FLOAT
   );
   INSERT INTO crop_prices (crop_name, price) VALUES ('Tomato', 25), ('Onion', 30);
   ```
4. Run backend
   `npm start`

**Frontend**
1. Go to frontend folder
   `cd frontend`
2. Install dependencies
   `npm install`
3. Start frontend
   `npm start`

Visit `http://localhost:3000` to view data from `http://localhost:5000/forecast`.
