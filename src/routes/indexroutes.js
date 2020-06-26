const express = require('express');
const indexRouter= express.Router();

function router(btn){
    indexRouter.get('/',function(req,res){
        res.render("index",{
                
                btn,
                title:'Library'
        
            });
    
     });

return indexRouter;
} 
module.exports = router;