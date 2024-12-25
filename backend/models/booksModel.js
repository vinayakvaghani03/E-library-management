const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    bookname: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = new mongoose.model("Books", bookSchema)