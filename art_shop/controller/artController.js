//const utilites = require("../utilities/")
const categoriesmodel = require('../model/categories');

const ctrl = {}

ctrl.buildHome = (req,res) => {
    res.render("index", {
    title: "Nai Canvas"
})
}

ctrl.getCategories = async function(req,res){
    const categories = await categoriesmodel.getCategories()

    res.render("categories",{
        title: "Art Categories",
        categories
    })
}

module.exports = ctrl;