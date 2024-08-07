const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id:Number,
    title:String,
    rating:Number,
    image:String,
    review:String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;