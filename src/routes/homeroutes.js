const express = require('express');
const homeRouter= express.Router();

function router(nav,logout){
    homeRouter.get('/',function(req,res){
        res.render("home",{
           nav,
           logout,
           title:'Library',
              
        });
    });

return homeRouter;
} 
module.exports = router;