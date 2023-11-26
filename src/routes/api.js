const express = require('express')
const { createStudent,
        readStudent, 
        readStudentById, 
        updateStudent, 
        deleteStudent 
      } = require('../controllers/studentController')
const router = express.Router()



router.post("/createStudent",createStudent)
router.get("/readStudent",readStudent)
router.get("/readStudentById/:id",readStudentById)
router.post("/updateStudent/:id",updateStudent)
router.delete("/deleteStudent/:id",deleteStudent)

module.exports = router