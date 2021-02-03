const express = require("express")
const router = express.Router()

const { isUserRegistered, isUserExist, createUser } = require("../controllers/users")

const getValidationFunction = require("../validations/login.validation")

router.post("/login", async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) res.send("error")
    const result = await isUserRegistered(email, password)
    if (result) return res.json({ message: `Hello ${result.firstName} , login success` })
    else return res.json({ message: `Login Failed` })

})

const _registerPath = "register"
router.post(`/${_registerPath}`, getValidationFunction(_registerPath), async (req, res, next) => {
    const { email } = req.body;
    try {
        const result = await isUserRegistered(email)
        if (result) throw new Error(`User ${result.email} is already exist`)
        const create = await createUser(req.body)
        if (create) return res.json({ message: `Registration completed` })
        else throw new Error("Registration Failed")
    } catch (ex) {
        console.log(ex.message)
        return next({ message: ex.message, status: 403 })
    }
})



module.exports = router