var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    age: Number
});

mongoose.model('User', userSchema);