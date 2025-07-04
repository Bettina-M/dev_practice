const express = require ("express")
const app = express()
const port = 3000
const env = require("dotenv").config()


//Middleware section

app.use(express.static("public"))


//Local Server Information
app.get("/", (req, res) =>{
    res.send("Hello World")
})
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})

