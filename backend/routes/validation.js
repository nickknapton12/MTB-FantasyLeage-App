//Validation
const Joi = require('@hapi/joi');

//Register Validtion
const registerValidation = (data) =>{
    const schema = Joi.object({
        username: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

//login Validation
const loginValidation = (data) =>{
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;