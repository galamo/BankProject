

const Joi = require("@hapi/joi")

const registerSchema = Joi.object().keys({
    id: Joi.number().required(),
    email: Joi.string().min(1).max(50).required().email(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.number().optional(),
    address: Joi.string().optional(),
    bankBranch: Joi.number().required(),
})

const changePasswordSchema = Joi.object().keys({
    email: Joi.string().min(1).max(50).required().email(),
    password: Joi.string().required(),
    newPassword: Joi.string().required(),
    confirmNewPassword: Joi.string().required(),
})



const validationsObj = {
    register: (req, res, next) => {
        const { error } = registerSchema.validate(req.body)
        if (error) {
            console.log(error.details)
            return next(error.details)
        }
        return next()
    },
    changePassword: (req, res, next) => {
        const { error } = changePasswordSchema.validate(req.body)
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