const { required } = require("@hapi/joi")
const express = require("express")
const router = express.Router()
const { getUsers } = require("../controllers/users")
router.get("/", async (req, res, next) => {
    try {
        const result = await getUsers()
        res.json({ users: result.map(user => ({ firstName: user.firstName, email: user.email, id: user.id })) })
    } catch (error) {
        return next({ message: "No Users" })
    }
})


module.exports = router;