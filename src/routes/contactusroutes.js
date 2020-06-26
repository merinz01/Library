const express = require('express');
const contactusRouter = express.Router();

function router(nav,logout){
    contactusRouter.get('/',function(req,res){
        res.render("contactus",{
           nav,
           logout,
           title:'Library',
              
        });
    });

return contactusRouter;
} 
module.exports = router;