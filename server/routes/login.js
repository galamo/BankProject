const express = require("express")
const router = express.Router()

const { isUserRegistered } = require("../controllers/users")

router.post("/login", async (req, res, next) => {
    const { userName, password } = req.body
    if (!userName || !password) res.send("error")
    const result = await isUserRegistered(userName, password)
    if (result) return res.json({ message: `Hello ${result.firstName} , login success` })
    else return res.json({ message: `Login Failed` })

})

module.exports = router