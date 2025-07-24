//const utilites = require("../utilities/")
const categoriesmodel = require('../model/categories');

const ctrl = {}

ctrl.buildHome = (req,res) => {
    res.render("index", {
    title: "Nai Canvas"
})
}

ctrl.getCategories = async function(req,res){
    try{
        const categories = await categoriesmodel.getCategories()

        res.render("categories",{
        title: "Nai Canvas",
        categories
    })
    }catch(error){
        console.log(error)
        //learn about internal server error
    }
    
}


module.exports = ctrl;