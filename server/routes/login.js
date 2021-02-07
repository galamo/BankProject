const express = require("express")
const router = express.Router()

const { isUserRegistered, createUser, changePassword } = require("../controllers/users")

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
        return next({ message: ex.message, status: 400 })
    }
})


const _changePasswordPath = "changePassword"
router.post(`/${_changePasswordPath}`, getValidationFunction(_changePasswordPath), async (req, res, next) => {
    const { email, password, newPassword, confirmNewPassword } = req.body;
    try {
        _validateConfirmPassword(newPassword, confirmNewPassword)

        const result = await isUserRegistered(email, password)
        if (!result) throw new Error(`Wrong Credentials`)
        const changePassResult = await changePassword(result.id, newPassword)
        if (changePassResult) return res.json({ message: "password has changed!!!" })
        else throw new Error(`[password] was not updated`)
    } catch (ex) {
        console.log(ex.message)
        return next({ message: ex.message, status: 400 })
    }

    function _validateConfirmPassword() {
        if (typeof newPassword !== 'string') {
            console.log("newPassword type wrong")
            return;
        }
        if (newPassword !== confirmNewPassword) throw new Error(`confirm password error`)

    }
})



module.exports = router