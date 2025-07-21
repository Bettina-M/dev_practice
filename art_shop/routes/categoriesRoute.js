const express = require("express")
const router = new express.Router()
const artCtrl = require("../controller/artController")
const artCategories = require("../controller/artCategories")


router.get("/categories", artCtrl.getCategories)

module.exports = router;