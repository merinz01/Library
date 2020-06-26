const express = require('express');
const authorsRouter= express.Router();
const Authordata =  require('../model/authordata');
function router(nav,logout){
    // var authors=[
       
    //     {   Author: 'William Shakespeare',
    //         Born : 'Born : April 23, 1564',
    //         Occupation : 'Occupation : Playwright; poet; actor',
    //         Period : 'Period : 1564–1616',
    //         Genre : 'Genre : Theatre, Classics, Poetry',
    //         Notable_works : '  Notable_works : Macbeth, Hamlet, Romeo and Juliet',
    //         Notable_awards : 'Notable_awards : ‎Best books for young adults',
    //         img:'shakespeare.jpg'
    //     },
    //     {
    //         Author:'Arundhati Roy',
    //         Born : 'Born : 24 November 1961, Assam',
    //         Occupation : 'Occupation : Writer, essayist, activist',
    //         Period :  'Period : 1997–present', 
    //         Genre :	'Genre : Fiction',
    //         Notable_works :	'Notable_works : The God of Small Things', 
    //         Notable_awards	: ' Notable_awards : Man Booker Prize (1997)',
    //         img:'arundhati.jpg'
    //     },

    //     {    Author:'Rabindranath Tagore',
    //          Born : ' Born : 7 May 1861, Kolkata', 
    //          Occupation : '  Occupation : Poet,short-story writer', 
    //          Period : 'Period : 1861–1941',
    //          Genre :'  Genre :Poetry & Arts, Literature & Fiction',
    //          Notable_works :'Notable_works : Gitanjali‎; ‎Gora',
    //          Notable_awards : ' Notable_awards : ‎Nobel Prize in Literature‎; 1913',
    //          img:'tagore.jpg'
    //     },
       
    //     {
            
    //         Author:'J.K.Rowling',
    //         Born : 'Born : 31 July 1965',
    //         Occupation : 'Occupation : Screenwriter,producer,philanthropist',
    //         Period :  'Period : 1997–present', 
    //         Genre :	'Genre : Fiction ,Fantasy',
    //         Notable_works :	'Notable_works : Harry Potter series,Cormoran Strike series', 
    //         Notable_awards	: ' Notable_awards : 2008 The Edinburgh Award,2018 Tony Award for Best Play ',
    //         img:'jkrowling.jpg'
    //     },
    //     {
    //         Author:'Ernest Hemingway',
    //         Born : 'Born : July 21, 1899 ,llinois, U.S.',
    //         Occupation : 'Occupation : Writer, essayist, activist',
    //         Period :  'Period : 1899–1961', 
    //         Genre :	'Genre : Fiction',
    //         Notable_works :	'Notable_works : For Whom the Bell Tolls,The Old Man and the Sea', 
    //         Notable_awards	: ' Notable_awards : Pulitzer Prize for Fiction (1953) ,Nobel Prize in Literature (1954)',
    //         img:'earnest.jpg'
    //     },
    //     {
    //         Author:'Stephenie Meyer',
    //         Born : 'Born : 24 December 1973, Hartford,United States',
    //         Occupation : 'Occupation : Novelist, producer',
    //         Period :  'Period : 1973–present', 
    //         Genre :	'Genre : Vampire romance, fiction, fiction',
    //         Notable_works :	'Notable_works : Twilight series,The Host,The Chemist', 
    //         Notable_awards	: ' Notable_awards : 2009 Childrens Book of the Year,2006	Best Fiction for Young Adults',
    //         img:'stephenie.jpg'
    //     },
    //     {
    //         Author:'George Orwell',
    //         Born : 'Born : 25 June 1903, Motihari,UK',
    //         Occupation : 'Occupation :Novelist and essayist, journalist and literary critic',
    //         Period :  'Period : 1903–1950', 
    //         Genre :	'Genre : Dystopia',
    //         Notable_works :	'Notable_works : Animal Farm,Nineteen Eighty-Four,Homage to Catalonia', 
    //         // Notable_awards	: ' Notable_awards : Man Booker Prize (1997)',
    //         img:'georgeorwell.jpg'
    //     },
        
    //     {
    //         Author:'Suzanne Collins',
    //         Born : 'Born :  10 August 1962,Hartford,United States',
    //         Occupation : 'Occupation : Journalist, Author',
    //         Period :  'Period : 1962–present', 
    //         Genre :	'Genre : Fantasy, Fiction, childrens literature',
    //         Notable_works :	'Notable_works : The Hunger Games trilogy,The Underland Chronicles', 
    //         Notable_awards	: ' Notable_awards : 2008 CYBIL Award – Fantasy and Science Fiction,2016 Authors Guild Award for Distinguished Service to the Literary Community',
    //         img:'susanne.jpg'
    //     }
    // ]


authorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render("authors",{
        nav,
        logout,
        title:'Library',
        authors
    });
    

    });
});

authorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render("author",{
        nav,
        logout,
        title:'Library',
        author
    });
   

   });
});

// /delete
authorsRouter.get('/:id/delete',function(req,res){
    const id=req.params.id;
    Authordata.remove({_id:id})
    .then (function(author){
         res.redirect('/authors');
      
  });
  
});

// update

authorsRouter.get('/:id/update',function(req,res){
    const id=req.params.id;
    Authordata.findOne({_id:id})
    .then (function(author){
         res.render("updateauthor",{
        nav,
        logout,
        title:'Library',
        author
  });
  
   });
});

authorsRouter.post('/:id/update/ok',function(req,res){
    const id=req.params.id;

    var values = Authordata.updateOne(
        {_id:req.params.id},
        {author:req.body.author,
        period:req.body.period,
        genre:req.body.genre,
        notableworks:req.body.notableworks,
        notableawards:req.body.notableawards})
        .then(function(author){
            res.redirect('/authors');
        });
});

 
    return authorsRouter;

}
   
module.exports = router;