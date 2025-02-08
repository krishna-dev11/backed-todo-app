const mongoose  = require("mongoose");

const todomodelschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:50,
    },

    description:{
        type:String,
        required:true,
        maxlength:50,
    },

    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },

    UpdatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }
});

module.exports = mongoose.model("todo", todomodelschema);

