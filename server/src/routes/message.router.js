const express = require('express');
const tableRouter = express.Router();
const db = require('../database')


tableRouter.post('/', (req, res) => {
    const newEntry = req.body
    db.collection("data")
        .deleteMany()
    db.collection("data")
        .insertMany(newEntry)
    return res.status(200).json({
        success: true
    })
});

module.exports = tableRouter;