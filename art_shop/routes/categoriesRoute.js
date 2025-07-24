const express = require("express")
const router = new express.Router()
const artCtrl = require("../controller/artController")
const artCategories = require("../controller/artCategories")


router.get("/categories", artCtrl.getCategories)
router.get("/categories/:id", artCategories.showArtByCategory)

module.exports = router;