const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/movies')
    .then(()=> {console.log('MongoDB connected...')})
    .catch((err)=> {console.log('Error connecting to MongoDB',err)})

// Routes
const moviesRouter = require('./routes/movies');
app.use('/api/movies',moviesRouter);

app.listen(port,()=> {
    console.log(`Server is running on port: ${port}`);
})