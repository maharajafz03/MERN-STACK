const express = require("express")
const {connectDB} = require("./DB")

const PORT = 3000

const app = express();




app.listen(PORT, (
    console.log(`server is running  on ${PORT}`)
))
