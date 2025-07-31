const jwt = require("jsonwebtoken") //jwt is for creating tokens

const bcrypt = require("bcrypt") //bycrpt is for hashing passwords

const saltRounds = 10 

//login page
async function showloginForm(req, res){
    res.render('login', {
        title: 'Nai Canvas - Login',

    })
}

async function showSignupForm(req, res){
    res.render('signup', {
        title: 'Nai Canvas - Signup',
    })
}

module.exports = {
    showloginForm,
    showSignupForm
}