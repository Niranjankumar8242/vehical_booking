# 🚗 Vehicle Booking

  

A full-stack vehicle booking application that allows users to book vehicles based on wheel count, type, model, and preferred date range.

  

---

  
  

## 🌟 Features

  

- Multi-step form with validation

- Real-time vehicle availability checking

- Responsive UI with Material-UI components

- Database seeding with sample vehicles

- Date range selection with conflict prevention

- Backend API with proper error handling

  
  

## 📦 Tech Stack
  

-  **Frontend:** React, Material UI (MUI)

-  **Backend:** Node.js, Express

-  **Database:** MySQL

-  **ORM:** Sequelize
  

## 🚀 Getting Started

  

### Prerequisites

- Node.js (v14+)

- MySQL (v5.7+)

- npm or yarn

  

## 📥 How to Run This Project

  

Follow the steps below to set up and run the project locally.

  

---

  

## 🧾 Clone the Repository

  
  

git clone `https://github.com/Niranjankumar8242/vehical_booking.git`

cd vehicle-booking

  
  

# How to run backend

  

- Open tenimal and first of all go into backend folder using `cd backend`

  

- Install dependencies using `npm install`

  

- Create a database in mysql with name `vehicle_booking` and make sure mysql is running

  

- Create a .env file inside the backend folder and add the `DB_URL` as written below:

		Eg - mysql://user:password@localhost:3306/vehicle_booking

  

### Run Migrations

  

- Run the following commands to set up the database schema:

  

		 node migrate.js

  

- To populate the database with initial data, run:

  

	  node src/seeders/seed.js

  

- Start the Backend Server With `npm start`

  

		Backend API: http://localhost:5000/api

  

# How to run frontend

  

- Navigate to the frontend folder using `cd frontend`

  

- Install dependencies Using `npm install`

  

- Start the React app `npm start`

  

		The app will run on: http://localhost:3000
  

# Booking Flow (UI SCREENS)

  

Step 1 :  Enter your First Name and Last Name

  

![alt text](./frontend/UI/VB_1.png)

  

Step 2 :  Select number of Wheels (2 or 4)

  

![alt text](./frontend/UI/VB_2.png)

  

Step 3 :  Select Vehicle Type (fetched based on wheel count)

  

![alt text](./frontend/UI/VB_3.png)

  

Step 4 : Select Vehicle Model

  

![alt text](./frontend/UI/VB_4.png)

  

Step 5 :  Pick Start and End Dates for booking

  

![alt text](./frontend/UI/VB_5.png)

  

Step 6 : Review your booking and confirm

  

![alt text](./frontend/UI/VB_6.png)

  

Step 7 : Receive a success message and option to book again

  

![alt text](./frontend/UI/VB_7.png)