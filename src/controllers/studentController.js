const Student = require("../models/student");


// Create Student
exports.createStudent = async(req,res) => {
    try{
        const reqBody = req.body;
        console.log(reqBody)
        
        const newStudent = await Student.create(reqBody)
        res.status(200).json({status:'success',data:newStudent})

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};




// Read Student
exports.readStudent = async(req,res) => {
    try{
        const reqBody = req.body;
        
        const studentData = await Student.find(reqBody)
        res.status(200).json({status:'success',data:studentData})
        

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};



// Read StudentById
exports.readStudentById = async(req,res) => {
    try{
        let id = req.params.id
        
        
    const studentData = await Student.find({_id:id})
        res.status(200).json({status:'success',data:studentData})
        

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};



// Update Student
exports.updateStudent = async(req,res) => {
    try{
        const id = req.params.id
        const reqBody = req.body
        
        const studentData = await Student.updateOne({_id:id},reqBody)
        res.status(200).json({status:'success',data:studentData})

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};




// Delete Student
exports.deleteStudent = async(req,res) => {
    try{
        const id = req.params.id
        
        
        const studentData = await Student.deleteOne({_id:id})
        res.status(200).json({status:'success',data:studentData})

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};


