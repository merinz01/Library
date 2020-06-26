const express = require('express');
const adminauthorRouter = express.Router();
// Bookdata  is accessed from  bookdata.js
const Authordata = require('../model/authordata');

function router(nav,logout){
    adminauthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            logout,
            title:'Library'
        })
    })

    adminauthorRouter.post('/add',function(req,res){
        var item = {
        author: req.body.author,
        period: req.body.period,
        genre: req.body.genre,
        notableworks: req.body.notableworks,
        notableawards:req.body.notableawards,
        image: req.body.image

        }

       var author = Authordata(item);
       author.save(); //saving to databases
       res.redirect('/authors');
        
    

    });

    return adminauthorRouter;
}
 module.exports = router;