//The purpose of this file is to create a middleware to protect certain routes
//Checks if the token is present/valid so as to access protected routes
//in this case the categories, artworks and cart pages

const jwt = require("jsonwebtoken")
const jwtSecret = process.env.SECRET_KEY;

async function verifytoken (req, res, next){
    try{
        const token = req.cookies.token

        if(!token){
            return res.redirect("/login")
        }

        const decoded = jwt.verify(token, jwtSecret) //checks the token and gives you back the data you originally put inside the token

        req.user = decoded //attach the user information to the request object You save that data in req.user so it can be used in any route after that.

        next() //proceed to the next middleware or route handler
    }catch (error) {
        console.error('Token verification error:', error)
        res.status(401).send("Unauthorized access")
    }
}

module.exports = {
    verifytoken
}