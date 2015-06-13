var mongoose = require('mongoose');

var filmSchema = mongoose.Schema({
    title: String,
    year: Number,
    cover: String,
    actors: Array,
    genres: Array
});

mongoose.model('Film', filmSchema);