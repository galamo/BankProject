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
    const result = await isUserRegistered(email)
    if (result) return res.json({ message: `User ${result.email} is already exist` })
    createUser(req.body)
    return res.json({ message: `Registration completed` })
})



module.exports = router