const Student = require("../models/studentModel");

class studentController{
    getAllStudents = async(req,res) =>{
        const students = await Student.findAll();
        res.send({
            message:"List of all students",
            data: students,
        });

    };
    getOneStudent = async(req,res)=>{
        const studentId = req.params.id;
        const students = await Student.findByPk(studentId);
        if(!students){
            return res.status(404).send({message:"Student not found"});
        }
        res.send({message:"Specified student", data: student});
    }
}

module.exports = new studentController;