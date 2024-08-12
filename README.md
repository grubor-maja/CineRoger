# CineRoger

CineRoger is a simple full-stack web application for movie reviews. This project consists of a frontend build with React and a backend built with Node.js, Express and MongoDB.

## Requirements

Before you begin, make sure you have the following requirements:

-Node.js and npm installed on your machine<br/>
-MongoDB installed and running

## Installation

Follow these steps to set up and run the project locally.

### 1. Backend

#### 1.1. Clone the Repository

```bash
git clone https://github.com/grubor-maja/CineRoger.git
git checkout backend
cd CineRoger/cineroger-back
```

#### 1.2. Install Dependencies

```bash
npm install
```

#### 1.3. Create a .env file in the root directory of the backend folder and the following content

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

#### 1.4. Start the backend server

```bash
npm start
```

The backend server will run at http://localhost:5000.

### 2. Frontend

#### 2.1. Clone the Repository

```bash
cd ../cineroger-front
```

#### 2.2. Install Dependencies

```bash
npm install
```
#### 2.3. Start the frontend application

```bash
npm start
```

## API Endpoints

The backend application provides the following API endpoints:

GET /api/movies - Fetches all movies<br/>
POST /api/movies - Adds a new movie<br/>
GET /api/movies/:id - Fetches a movie by ID<br/>
PUT /api/movies/:id - Updates a movie by ID<br/>
DELETE /api/movies/:id - Deletes a movie by ID<br/>

## Screenshots

### HomePage

![image](https://github.com/user-attachments/assets/ec756b13-e994-4ab5-ac2b-387ed9b378a6)

### Movies

![image](https://github.com/user-attachments/assets/5cb2c24e-6d5f-4dba-afda-8cb6f35ccece)

### Conclusion

This project served as a reminder to create full stack applications, connecting the frontend with appropriate databases and as a basis for further complex projects.




