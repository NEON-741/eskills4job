const router = require("express").Router();

const CourseController = require("../controllers/courseController");

const courseValidationRules = require("../validators/courseValidator");

const validateSchema = require("../middleware/validatorMiddleware");

router.get('/', CourseController.getAllCourses);

router.get('/:id', CourseController.getOneCourse);

router.post('/',validateSchema(courseValidationRules), CourseController.createCourse);

router.put('/:id', CourseController.editCourse);
router.patch('/:id', CourseController.editCourse);

router.delete('/:id', CourseController.deleteCourse);

module.exports = router;