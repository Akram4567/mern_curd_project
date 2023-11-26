const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    gender:{type:String},
    dateOfBirth:{type:String},
    nationality:{type:String},
    address:{type:String},
    email:{type:String}, 
    phone:{type:String}, 
    admissionDate:{type:String},
    courses:{type:String}
},{
    versionKey:false,
    timestamps:true
})


const Student = mongoose.model("students", studentSchema)

module.exports= Student;

