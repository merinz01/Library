const express = require('express');
const loginRouter= express.Router();

function router(nav,logout){
    loginRouter.get('/',function(req,res){
        res.render("login",{
           nav,
           logout,
           title:'Library',
              
        });
    });

return loginRouter;
} 
module.exports = router;