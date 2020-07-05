const Joi = require('@hapi/joi');
const movie_schema = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    url: Joi.string().min(2)
});
module.exports = {
    validateAddMovie: (req,res,next)=>{
        const { error } = movie_schema.validate(req.body, { abortEarly: false });
        if(error){
            res.send(error.details);
            return;
        }
        next();
    }
}