const user = require("../models/userModel");
const bcrypt = require('bcrypt');

class userController {
    createUser = async (req, res) => {
        const {name, email, password, user_role} = req.body;

        const salt = await bcrypt.genSalt();
        const hashed_password = await bcrypt.hash(password, salt);

const newUser = await 
        user.create({
            name, 
            email, 
            password: hashed_password, 
            user_role,
        });

        res.status(201).send({message: "User Created successfully"});
    }
}

module.exports = new userController();