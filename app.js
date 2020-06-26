const express = require('express');
const app = express();

const nav=[
    
        {link:'/home',name:'Home'},
        {link:'/books',name:'Books'},
        {link:'/authors',name:'Authors'},
        {link:'/contactus',name:'Contact Us'},
        {link:'/admin',name:'Add Book'},
        {link:'/adminauthor',name:'Add Author'}
        
    
   
];

const btn=[
        {link:'/login',name:'Log In'},
        {link:'/signup',name:'Sign Up'}
];

const logout=[
        {link:'/',name:'Logout'}
];

const indexRouter = require('./src/routes/indexroutes')(btn)
const homeRouter = require('./src/routes/homeroutes')(nav,logout)
const booksRouter = require('./src/routes/bookroutes')(nav,logout)
const authorsRouter = require('./src/routes/authorroutes')(nav,logout)
const contactusRouter = require('./src/routes/contactusroutes')(nav,logout)
const loginRouter = require('./src/routes/loginroutes')(nav,logout)
const signupRouter = require('./src/routes/signuproutes')(nav,logout)
const adminRouter = require('./src/routes/adminroutes')(nav,logout)
const adminauthorRouter = require('./src/routes/adminauthorroutes')(nav,logout)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/index',indexRouter);
app.use('/home',homeRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/contactus',contactusRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/adminauthor',adminauthorRouter);


app.get('/',function(req,res){
    res.render("index",{
        //  nav,
        title:'Library',
        btn
        });

 });

 app.listen(5000);
