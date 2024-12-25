const express=require("express");
const app=express();
const dotenv = require("dotenv").config();
const connectDb=require("./connection/conn");
const bookRoute= require("./routes/booksRoutes")


app.use(express.json());
connectDb();
app.use("/api/v1",bookRoute)

app.listen(1000,()=>{
    console.log("SERVER START SUCCESSFULLY")
})