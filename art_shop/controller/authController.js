const jwt = require("jsonwebtoken") //jwt is for creating tokens

const bcrypt = require("bcrypt") //bycrpt is for hashing passwords

const authModel = require("../model/user") //fetching model functions for storage and retrieval of user login details


//login page
async function showloginForm(req, res){
    res.render('login', {
        title: 'Nai Canvas - Login',

    })
}
//Sign up form page if not registered already
async function showSignupForm(req, res){
    res.render('signup', {
        title: 'Nai Canvas - Signup',
    })
}

//Register new user
async function registerUser (req, res){
    try{
        //debugging

        console.log("Incoming data:", req.body);

        const {username, email, password_hash, account_type } = req.body  // fetching user data from the form

        const hashedpass = await bcrypt.hash(password_hash, 3) //hashing password before storage in database for extra security
    
        await authModel.createUser(username, email, hashedpass, account_type) //taking the data from the form and storing it in DB using function from the model file
        
        res.redirect("/login")
    
    } catch(error){
        console.error('Registration error:',error)
        res.status(500).send("Error registering user")
    }
}

//Login

const jwtSecret = process.env.SECRET_KEY; //accessing the secret key from .env file

async function loginUser(req, res){
    try{
        const {email, password_hash} = req.body //fetches data entered by user in login form

        const user = await authModel.getUserByemail(email) //checks for the email in the DB

        if (!user){
            return res.status(401).send("Email not found") //error if the email isnt found
        }

        const validPass = await bcrypt.compare(password_hash, user.password_hash) //if present continues to check if password is correct

        if (!validPass){
            return res.status(401).send("Incorrect Password")
        }

        /*payload = {id: user.id, email: user.email}
        const token = jwt.sign(payload,jwtSecret,{expires in: 1hr}),
        res.json({token})*/
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,  //header &payload
            },
            jwtSecret, // signature
            {expiresIn: "1h"}
        )


        res.cookie("token", token,{httpOnly: true})
        res.redirect("/categories")


    }catch (error){
        console.error('Login Error',error)
        res.status(500).send('Error during login')
    }
    
}

    module.exports = {
    showloginForm,
    showSignupForm,
    registerUser,
    loginUser

}