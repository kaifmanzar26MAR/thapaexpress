const express=require("express");
const hbs=require('hbs');
const app=express();
const path= require("path");
const port=process.env.PORT || 3003;



//public static path
const p=path.join(__dirname,"../public");
const template_path=path.join(__dirname, "../templates/views");//new path of view folder
//default path of view folder is src/view
const partials_path=path.join(__dirname, "../templates/partials");//new path of view folder

 

app.set('view engine', 'hbs');//to access the page dynamically useing hbs files
app.set('views',template_path);//defining the new path for view folder
hbs.registerPartials(partials_path);



app.use(express.static(p));

//routing

app.get("",(req,res)=>{
    // res.send("welcome to our home page")
    //after using hbs
    res.render('index');
});
app.get("/about",(req,res)=>{
    // res.send("welcome to our about page")
    //after using hbs
    res.render('about');
});
app.get("/weather",(req,res)=>{
    // res.send("welcome to our weather page")
    //after using hbs
    res.render('weather');
});
app.get("*",(req,res)=>{
    // res.send("Oop! Kiaf 404 error page.")
    //after using hbs
    res.render('404error',{
        errorMsg:"Oops! page not found"
    });
});

app.listen(port,()=>{
    console.log(`your server is running on port ${port}`);
})