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
            type: Number
        },
        Lane: {
            type: [String]
        },
        Pickrate: {
            type: Number
        }, 
        StrongAgainst: {
            type: [String]
        },
        WeakAgainst: {
            type: [String]
        },
        Winrate:  {
            type: Number
        }
    }
)

const Champion = mongoose.model("Champion Data", ChampionSchema);
module.exports = Champion;