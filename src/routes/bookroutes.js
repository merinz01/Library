const express = require('express');
const booksRouter= express.Router();
const Bookdata =  require('../model/bookdata');
function router(nav,logout){
    // var books=[
    //     {   name:'Life of Pi',
    //         author:'Yann Martel',
    //         genre:'Action and Adventure',
    //         img:'lifeofpi.jpg',
    //         description:'Pi Patel finds a way to survive in a lifeboat that is adrift in the middle of nowhere. His fight against the odds is heightened by the company of a hyena and a male Bengal tiger.',
    //     },
    //     {   name:'To Kill a Mockingbird',
    //         author:'Harper Lee',
    //         genre:'Classic',
    //         img:'tokillamocking bird.jpg',
    //         description:'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.'
    //     },
    //     {   name:'Watchmen',
    //         author:'Alan Moore',
    //         genre:'Comic',
    //         img:'watchmen.jpg',
    //         description:'When masked vigilantes are treated as criminals by government agencies, some band together to start a mutiny while others aim to stop it before it yields chaos.'
    //     },
    //     {   name:'The Adventures of Sherlock Holmes',
    //         author:'Sir Aurther Conon Doyle',
    //         genre:'Dectective and Mystery',
    //         img:'adventuressherlock.jpg',
    //         description:'The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, first published on 14 October 1892.'
    //     },
    //     {   name:'Ninth House',
    //         author:'Leigh Basdugo',
    //         genre:'Fantasy',
    //         img:'ninethhouse.jpg',
    //         description:'The novel follows unlikely Yale University freshman 20-year-old Galaxy "Alex" Stern, a high school drop out and homicide survivor who can see ghosts, called "grays".'
    //     },
    //     {   name:'Dare to Lead',
    //         author:'Brene Brown',
    //         genre:'Self-Help',
    //         img:'daretolead.jpg',
    //         description:'The ultimate playbook for developing brave leaders and courageous cultures. Daring leadership is a collection of four skill sets that are 100% teachable.'
    //     },
    //     {   name:'Royal Holiday',
    //         author:'Jasmine Guillory',
    //         genre:'Romance',
    //         img:'royalholiday.jpg',
    //         description:'Royal Holiday Club is a vacation club membership operator and resort developer based in Mexico offering points-based vacation ownership'
    //     },
    //     {   name:'Catch And Kill',
    //         author:'Ronan Farrow',
    //         genre:'True Crime',
    //         img:'catchandkill.jpg',
    //         description:'Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators is a 2019 book by American journalist Ronan Farrow. He recounts the challenges he faced chasing the stories of Harvey Weinsteins decades of alleged rape, sexual assault, and sexual abuse of women and the case against him'
    //     }
    // ]


// add
booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("books",{
            nav,
            logout,
            title:'Library',
            books
         });
    
    });
});


booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    Bookdata.findOne({_id:id})
    .then (function(book){
         res.render("book",{
        nav,
        logout,
        title:'Library',
        book
  });
  
   });
});


// delete
booksRouter.get('/:id/delete',function(req,res){
    const id=req.params.id;
    Bookdata.remove({_id:id})
    .then (function(book){
         res.redirect('/books');
      
  });
  
});

// update

booksRouter.get('/:id/update',function(req,res){
    const id=req.params.id;
    Bookdata.findOne({_id:id})
    .then (function(book){
         res.render("updatebook",{
        nav,
        logout,
        title:'Library',
        book
  });
  
   });
});

booksRouter.post('/:id/update/ok',function(req,res){
    const id= req.params.id;

    var values = Bookdata.updateOne(
        {_id:req.params.id},
        {title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        description:req.body.description,
        image:req.body.image})
        .then(function(book){
            res.redirect('/books');
        });
});

 
    return booksRouter;

}
   
module.exports = router;