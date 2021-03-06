require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const api = express()
const login = require("./routes/login")
const account = require("./routes/accounts")
const user = require("./routes/users")
const cookieParser = require("cookie-parser")

api.use(cookieParser())
api.use(express.static("public"))
// api.use(cors())
api.use(bodyParser.json())
api.get("/health-check", (req, res, next) => {
    res.send("Api working")
})

api.use("/auth", login)
api.use("/account", account)
api.use("/user", user)




api.use((error, req, res, next) => {
    console.log("in error handler...")
    res.send("Something went wrong")
})




api.listen(process.env.PORT, () => {
    console.log(`Server is listening to Port ${process.env.PORT}`)
})
