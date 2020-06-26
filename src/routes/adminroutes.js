const express = require('express');
const adminRouter = express.Router();
// Bookdata  is accessed from  bookdata.js
const Bookdata = require('../model/bookdata');

function router(nav,logout){
    adminRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            logout,
            title:'Library'
        })
    })

    adminRouter.post('/add',function(req,res){
        var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        description: req.body.description,
        image: req.body.image

        }

       var book = Bookdata(item);
       book.save(); //saving to databases
       res.redirect('/books');
        
    

    });

    return adminRouter;
}
 module.exports = router;