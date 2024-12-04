const { isAlphanumeric, isLength } = require("validator");
const { notify } = require("../routes/coursesRoutes");

const courseValidationSchema ={
    course_id:{
        notEmpty: {
            errorMessage:"Course id is required"
        },
        isAlphanumeric:{
            errorMessage:"Wrong format"
        },
        isLength:{
            min: 5, max: 8, errorMessage:"Should be at least 5 characters",
        }
    },
    course_name: {
        notify:{
            errorMessage:" Course name is required"
        },
        isLength:{
            min: 5, max: 100, errorMessage:"Should be at least 5 characters",
        }
    }
};

module.exports = courseValidationSchema;