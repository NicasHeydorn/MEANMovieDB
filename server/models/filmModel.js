var mongoose = require('mongoose');

var filmSchema = mongoose.Schema({
    title: String,
    year: Number,
    cover: String,
    actors: Array,
    genres: Array,
    plot: String
});

mongoose.model('Film', filmSchema);