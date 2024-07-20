const express = require('express')
const mongoose = require('mongoose');
const Champion = require('../models/champion.model');
const app = express()
app.use(express.json());

const { number } = require('mongodb');

app.get('/', (req, res) => {
    res.send("Hello from Node API");
})

//Add data
app.post('/api/champions', async (req, res) => {
    try {
        const champion = await Champion.create(req.body);
        res.status(200).json(champion);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Get Data of All
app.get('/api/champions', async (req, res) => {
    try {
        const champions = await Champion.find({});
        res.status(200).json(champions);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Get one from ID
app.get('/api/champions/leagueID/:ID', async (req, res) => {
    try {
        const { ID } = req.params;
        const champion = await Champion.findOne({ID});
        res.status(200).json(champion);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Get one from Name
app.get('/api/champions/name/:Name', async (req, res) => {
    try {
        const { Name } = req.params;
        const champion = await Champion.findOne({Name});
        res.status(200).json(champion);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

mongoose.connect("mongodb+srv://awjiajunjustin:ZCyydcjuQnwP5m7U@leaguelounge.85evmez.mongodb.net/Champion_Info?retryWrites=true&w=majority&appName=LeagueLounge")
.then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    })
})
.catch(() => {
    console.log("Connection failed");
})