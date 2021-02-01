
const express = require('express');
const mongoose = require('mongoose');
const routes =  require('./src/routes/jobs');
var cors = require('cors');

// read environment varaibles
require("dotenv").config();


const port = 8081


//database connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose
    .connect(mongoDB,{
        useUnifiedTopology: true,
        useNewUrlParser:true,
        useCreateIndex: true 
    })
    .then(() => {
        console.log('Database connection has been established');
    })
    .catch(err => {
        console.error('Unable to connect the database:', err);
    })
// create express app 
const app = new express();
app.listen(port, () => console.log(`jobslisting-app listening on port ${port}!`));

app.use(cors());

app.use(express.json()) // for parsing application/json

// routes middleware
app.use('/jobs', routes );


