const express = require("express")
const router = new express.Router()
const artCtrl = require("../controller/artController")
const artCategories = require("../controller/artCategories")


//Route to build home view with art classes
router.get("/", artCtrl.buildHome)
router.get("/categories", artCtrl.getCategories)

module.exports = router;