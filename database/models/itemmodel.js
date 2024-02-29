const mongoose = require("mongoose");

const itemModel = new mongoose.Schema({
    site: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Item = mongoose.model("Item", itemModel);

module.exports = Item;