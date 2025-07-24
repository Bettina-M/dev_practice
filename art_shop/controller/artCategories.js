const categoriesmodel = require('../model/categories');

async function showArtByCategory(req,res){
    try{
        const category_id = req.params.id
        if (!category_id){
            return res.status(400).send('Invalid category');
        }
        
        const artWorks = await categoriesmodel.fetchArtByCategory(category_id)
/*error handling for empty results*/
        if(!artWorks.length){
            return res.status(400).send('No artworks found for this category');
        }

        res.render("artworks",{
            title: "Artworks",
            artWorks
        })
    }catch(error){
        console.error('Error fetching artworks)', error)
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { showArtByCategory };


