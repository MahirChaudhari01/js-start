import mongoose from "mongoose";

const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:["teacher","student"],
        required:true
    },
    mobile:{
        type:Number,
        unique:true
    }
});

export const person = mongoose.model("Person",personschema);

