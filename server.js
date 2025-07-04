const express = require ("express")
const app = express()
const port = 3000
const env = require("dotenv").config()
const homeRoute = require("./art_shop/routes/homeRoute")
const artController = require("./art_shop/controller/artController")


//1.Middleware section



//2.Routes Section
app.use(express.static("public"))

//Index/homepage Route
app.use("/", homeRoute)

//Local Server Information
app.get("/", (req, res) =>{
    res.send("Hello World")
})
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})

