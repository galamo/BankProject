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

api.use((error, req, res, next) => {
    console.log(error)
    const status = error.status || 500
    res.status(status).json(error.message)
})

api.listen(process.env.PORT, () => {
    console.log(`Server is listening to Port ${process.env.PORT}`)
})
