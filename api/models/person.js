const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // name: String,
    // price: Number
    name: {type: String, required: true},
    age: {type: Number, required: true}
});

// the collection in mongoDB Atlas will be called "people", i.e., it automaticallt pluralizes the schema name
module.exports = mongoose.model('Person', personSchema );