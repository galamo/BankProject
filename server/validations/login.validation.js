

const Joi = require("@hapi/joi")

const registerSchema = Joi.object().keys({
    id: Joi.number().required(),
    email: Joi.string().min(1).max(50).required().email(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.number(),
    address: Joi.string(),
    bankBranch: Joi.number().required(),
})



const validationsObj = {
    register: (req, res, next) => {
        const { error } = registerSchema.validate(req.body)
        if (error) {
            console.log(error.details)
            return next(error.details)
        }
        return next()
    }
}

function getValidationFunction(path) {
    return validationsObj[path]
}


module.exports = getValidationFunction