const mongoose = require('mongoose');
const crypto = require('crypto');
//const uuid = require('uuid');
//import { v4 as uuid } from 'uuid';

const userSchema = new mongoose.Schema({
    job_title:{
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    company:{
        type: String,
        required: true
    },
    location : {
        type: String,
        require: true
    },
    post_date:{
        type: Date,
        trim: true
    },
    apply_email: {
        type: String,
        required: true
    }
        
});


module.exports = mongoose.model("Job", userSchema);