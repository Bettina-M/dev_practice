function showContactForm (req, res){
    res.render('contact',{
        title: "Contact Us"
    }

    )
}

module.exports= {showContactForm}