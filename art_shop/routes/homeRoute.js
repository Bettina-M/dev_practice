const express = require("express")
const router = new express.Router()
const artCtrl = require("../controller/artController")


//Route to build home view with art classes
router.get("/", artCtrl.buildHome)

module.exports = router;