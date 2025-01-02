const router = require("express").Router();
const { Router } = require("express");
const bookModel = require("../models/booksModel");

//POST REQUEST

router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBooks = new bookModel(data);
        await newBooks.save(); // save the book to the database

        // Send success response
        res.status(200).json({ message: "Book added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding book", error: error.message });
    }
});

//GET ALL DATA

router.get("/getbooks", async(req,res)=>{
    try {
       const books =await bookModel.find();
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
    }
})

//GET DATA BY ID

router.get("/getbook/:id", async(req,res)=>{
    try {
        const book = await bookModel.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
    }
})


//UPDATE DATA BY ID

router.put("/updatebook/:id" ,async(req,res)=>{
    const updatedata = req.body
    try {
           await bookModel.findByIdAndUpdate(req.params.id, updatedata);
           res.status(200).json(updatedata);
    } catch (error) {
        console.log(error);
    }
})

//DELETE DATA BY ID

router.delete("/deletebook/:id",async(req,res)=>{
    try {
        await bookModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"BOOK SUCCESSFULLY DELETE"});
    } catch (error) {
        console.log(error);
    }
})




module.exports = router;