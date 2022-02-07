const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },

    lastname : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    confirmpassword :{
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    phonenumber : {
        type : Number,
        required : true
    },

    address : {
        type : String,
        required : true
    }
})

// Now we need to create collections

const register = new mongoose.model("register", employeeSchema);

module.exports = register;