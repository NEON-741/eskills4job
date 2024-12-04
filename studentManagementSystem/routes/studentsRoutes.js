const studentRouter = require("express").Router();
studentRouter.get('/',(req, res)=>{
    res.send("List of all students");
});

studentRouter.get('/:id', (req,res)=>{
    const studentId = req.params.id
    res.send("Student details for " + studentId);
});

module.exports = studentRouter;