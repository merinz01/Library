// const express = require('express');
// const signupRouter= express.Router();

// function router(nav,logout){
//     signupRouter.get('/',function(req,res){
//         res.render("signup",{
//            nav,
//            logout,
//            title:'Library',
              
//         });
//     });

// return signupRouter;
// } 
// module.exports = router;

const express = require('express');
const signupRouter = express.Router();
// signupdata  is accessed from  signupdata.js
const signupdata = require('../model/signupdata');

function router(nav,logout){
    signupRouter.get('/',function(req,res){
        res.render('signUp',{
            nav,
            logout,
            title:'Library'
        })
    })

    signupRouter.post('/add',function(req,res){
        var item = {
        name: req.body.name,
        mobileno: req.body.mobileno,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword

        }

       var signup = signupdata(item);
       signup.save(); //saving to databases
       res.redirect('/login');
        
    

    });

    return signupRouter;
}
 module.exports = router;