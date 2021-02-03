require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const api = express()
const login = require("./routes/login")

api.use(bodyParser.json())
api.get("/health-check", (req, res, next) => {
    res.send("Api working")
})

api.use("/auth", login)


api.listen(process.env.PORT, () => {
    console.log(`Server is listening to Port ${process.env.PORT}`)
})
