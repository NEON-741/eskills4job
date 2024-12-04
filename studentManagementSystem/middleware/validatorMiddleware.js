const {checkSchema, validationResult}= require("express-validator");

const checkErrors = (req, res, next) =>{
    consterrors = validationResult(req);
    
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
};

const validateSchema = (schema) =>{
    return [checkSchema(schema), checkErrors];
};

module.exports = validateSchema;