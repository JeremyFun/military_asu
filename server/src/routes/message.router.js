const express = require('express');
const tableRouter = express.Router();
const db = require('../database')

tableRouter.post('/', (req, res) => {
    const newEntry = req.body
    database
        .deleteMany()
    database
        .insertMany(newEntry)
    return res.status(200).json({
        success: true
    })
});

const database = db.collection("data");
tableRouter.get('/', (req, res) => {
    database.find({}).toArray(function(err, result){
        if (err) {
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).json({
            'data': result
        });
    });
})

module.exports = tableRouter;