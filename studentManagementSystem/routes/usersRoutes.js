const router = require("express").Router();

const userController = require('../controllers/userController');

router.post("/register", userController.createUser)


module.exports = router;