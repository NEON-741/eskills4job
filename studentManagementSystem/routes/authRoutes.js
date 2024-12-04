const router = require('express').Router();

const AuthController = require('../controllers/authController');


router.post('/login', AuthController.login);

module.exports = router;













// const authRouter = require('express').Router();

// authRouter.get('/login:id', (req, res) => {
//     const userId = req.params.id;
//     res.send("Welcome " + userId + " you are logged in");
// });

// authRouter.get('/logout', (req, res) => {
    
//     res.send("You are logged out")
// });

// module.exports = authRouter;