const Student = require("../models/student");


// Create Student
exports.createStudent = async(req,res) => {
    try{
        const reqBody = req.body;
        
        
        const newStudent = await Student.create(reqBody)
        console.log("Data is created",newStudent)
        res.status(200).json({status:'success',data:newStudent})

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};




// Read Student
exports.readStudent = async(req,res) => {
    try{
        const reqBody = req.body;
        
        
        const studentData = await Student.find()
        console.log("All data is found")
        res.status(200).json({status:'success',data:studentData})
        

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};



// Read StudentById
exports.readStudentById = async(req,res) => {
    try{
        const id = req.params.id

        const studentData = await Student.findOne({_id:id})
            if(studentData) {
                console.log("Data is found by id",studentData)
                res.status(200).json({status:'success',data:studentData})
            }else {
                res.status(200).json({status:"fail",data:e})
                console.log("Data is not found by id")
            }


        
    }catch(e) {
        res.status(200).json({status:"fail",data:e})
        console.log("Data is not found by id")
    }
};



// Update Student
exports.updateStudent = async(req,res) => {
    try{
        const id = req.params.id
        const reqBody = req.body

        const studentData = await Student.updateOne({_id:id},reqBody)
            if(studentData.modifiedCount === 1) {
                console.log("Data is updated by id",id,reqBody,studentData)
                res.status(200).json({status:'success',data:studentData})
                
            }else {
                res.status(200).json({status:"fail",data:e})
            }

        

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};




// Delete Student
exports.deleteStudent = async(req,res) => {
    try{
        const id = req.params.id
        
        
        const studentData = await Student.deleteOne({_id:id})
        console.log("Data is deleted by id",id,studentData)
        res.status(200).json({status:'success',data:studentData})
        

    }catch(e) {
        res.status(200).json({status:"fail",data:e})
    }
};


