const mongoose = require("mongoose");

const folderModel = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    title: {
        type: String,
        default: "New Folder"
    }
})

const Folder = mongoose.model("Folder", folderModel);

module.exports = Folder;