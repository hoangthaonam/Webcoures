const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const register_schema = Joi.object().keys({
    username: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(2).max(30).required(),
    name: Joi.string().min(2).max(30).required()
});
const login_schema = Joi.object().keys({
    username: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(2).max(30).required()
});
module.exports = {
    loginValidate: (req,res,next)=>{
        const { error } = login_schema.validate(req.body, { abortEarly: false });
        if(error){
            res.send(error.details);
            return;
        }
        next();
    },
    registerValidate: (req,res,next)=>{
        const { error } = register_schema.validate(req.body, { abortEarly: false });
        if (error) {
            res.send(error.details);
        } else {
            let {password} = req.body;
            bcrypt.hash(password, 8, function(err, hash) {
                if(err){
                    console.log(err);
                    res.send(err);
                }else{
                    req.body.password = hash;
                    next();
                }
            });
        }
    }
}