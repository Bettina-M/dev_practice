const express = require("express")
const router = new express.Router()
const artCtrl = require("../controller/artController")
const artCategories = require("../controller/artCategories")
const authController = require("../controller/authController")
const contact = require("../controller/contactform")
const verifytoken = require("../controller/middleware")


//Route to build home view with art classes
router.get("/", artCtrl.buildHome)

router.get("/categories", (artCtrl.getCategories))

router.get("/contact",contact.showContactForm)

router.get("/signup", authController.showSignupForm)

router.post("/signup", authController.registerUser)

router.get("/login", authController.showloginForm)

router.post("/login", authController.loginUser)


module.exports = router;