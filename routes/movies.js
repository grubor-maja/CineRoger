const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// GET all movies
router.get('/', async(req,res) => {
    try {
        const movies = await Movie.find();
        res.send(movies);
    } catch (error) {
        res.status(500).json({message:err.message});
    }
});

// CREATE a new movie
router.post('/',async(req,res) => {
    const movie = new Movie({
        id:req.body.body.id,
        title:req.body.title,
        rating:req.body.rating,
        image:req.body.image,
        review:req.body.review
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({message:err.message});
    }
});

module.exports =router;