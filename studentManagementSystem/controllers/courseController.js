const Course= require("../models/courseModel");

class CourseController{
    getAllCourses = async (req, res) => {
        const courses = await Course.findAll();
        res.send({
            message: "List of courses",
            data: courses,
        });
    };

    getOneCourse = async (req, res) => {
        const courseId = req.params.id;
        const courses = await Course.findByPk(courseId);
        if (!courses) {
            return res.status(404).send({message:"Course not found"});
        }
        res.send({message:"Specified Course ", data: course });
    };

    createCourse = async (req, res)=>{
        const {course_id, course_name, department_id} = req.body;
        const course = await Course.create({
            course_id,
            course_name,
            department_id,
        });
        res
        .status(201)
        .send({message: "Course created successfully", data: course});
    };

    editCourse = async(req, res)=>{
        try{
            const course = await Course.findByPk(req.params.id);
            if(!course){
                return res.status(404).send({message:"Course not found"});
            }

            const {course_name, course_id, department_id} = req.body;
            await course.update({course_name, course_id, department_id});
        }
        catch(error){
            console.error(error);
            res.send(505).send({message:"Error while editing course"});
        }
    };

    deleteCourse = async(req,res)=>{
        try{
            const course = await Course.findByPk(req.params.id);
            if(!course){
                return res.status(404).send({message:"Course not found"});
            }
            course.destroy();
            res.send({message:"Course deleted successfully"});
        }
        catch(erroe){
            console.error(error);
            res.status(500).send({message:"Error while deleting course"});
        }
    }
}

module.exports = new CourseController