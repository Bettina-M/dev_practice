const express = require ("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const path = require('path');

const env = require("dotenv").config()
const homeRoute = require("./art_shop/routes/home")
const artController = require("./art_shop/controller/artController")


//1.Middleware section

//setting views directory//
app.set('views', path.join(__dirname, 'art_shop/views'));
//2.View Engine and Templates
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

//3.Routes Section
app.use(express.static(path.join(__dirname, "art_shop", "public")));

//Index/homepage Route
app.use("/", homeRoute)

//Local Server Information

const port = process.env.PORT
const host = process.env.HOST
app.listen(port, ()=>{
    console.log(`Listening on http://${host}:${port}`)
})

