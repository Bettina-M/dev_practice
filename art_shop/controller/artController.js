//const utilites = require("../utilities/")

const ctrl = {}

ctrl.buildHome = (req,res) => {
    res.render("index", {
    title: "Nai Canvas"
})
}

module.exports = ctrl;