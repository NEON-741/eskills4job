require('dotenv').config();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthController {

    login = async (req, res) => {
        
        const { email, password} = req.body;

        const isEmailExist = await User.findOne({where: {email}});
        if (!isEmailExist){
            return res.status(401).send({ message: 'Invalid email'});
        }

        const passwordMatch = await bcrypt.compare(password, isEmailExist.password);
            if (!passwordMatch) {
                return res.status(401).send({ message: 'Invalid password'});                       
        }   
            
        const token = jwt.sign(
                {user: isEmailExist.user_id, role: isEmailExist.role },
                process.env.JWT_SECRET,
                {expiresIn: '1h'}
            ); 
            res.send({ message: 'Login successful', token });


    }
};


module.exports = new AuthController();