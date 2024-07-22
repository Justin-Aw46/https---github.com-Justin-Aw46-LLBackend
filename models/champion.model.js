const { Double } = require('mongodb');
const mongoose = require('mongoose');

const ChampionSchema = mongoose.Schema(
    {
        ID: {
            type: Number
        },
        Name: {
            type: String
        },
        Key: {
            type: String
        },
        Image: {
            type: String
        },
        Banrate: {
            type: String
        },
        Lane: {
            type: [String]
        },
        Pickrate: {
            type: String
        }, 
        StrongAgainst: {
            type: [String]
        },
        WeakAgainst: {
            type: [String]
        },
        Winrate:  {
            type: String
        },
        Items: {
            type: [String]
        },
        Runes: {
            type: [String]
        }
    }
)

const Champion = mongoose.model("Champion Data", ChampionSchema);
module.exports = Champion;