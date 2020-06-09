const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
require("dotenv").config();
//const config = require('./config');

const app= express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());


const mongoDB = 'mongodb://127.0.0.1/disney';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const contentsRouter= require("./routes/content");


app.use('/content', contentsRouter);


app.listen(port, ()=>{
    console.log(`Server running in the port: ${port}`);
});