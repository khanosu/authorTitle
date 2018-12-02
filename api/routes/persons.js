//@ts-check
'use strict'

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Person = require('../models/person');

// requests that reach this part have already gone through the /persons filter

router.get('/', (req, res, next) => {
    // This is for initial testing
    // res.status(200).json({
    //     verb: 'GET',
    //     message: 'handling GET requests to /api/products'
    // });

    Person
        // .find({name: /gold/i})  // using reg expression /gold/i in query
        .find()
        // .limit(5)
        // .select('-__v')
        // .select('_id name price')
        .exec()
        .then(docs => {
            // console.log(docs);
            const response = {
                persons: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        age: doc.age
                    };
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {

    // This is for initial testing
    // const person = {
    //     name: req.body.name,
    //     age: req.body.age
    // };

    // here we are using body-parser to parse the body of the http request
    const person = new Person({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age
    });

    // saving person to the database collection "Persons"
    person
        .save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'Created person successfully',
                createdPerson: {
                    _id: result._id,
                    name: result.name,
                    age: result.age
                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        });

});


module.exports = router;