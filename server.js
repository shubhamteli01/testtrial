var express=require('express')
var app=express();



app.get("/",(req,res)=>{

    res.send(
        "<h1>shubham teli</h1>"
        +"<h1>in /// page</h1>"
    );
});

app.get("/about",(req,res)=>{

    res.send(
        "<h1>shubham teli</h1>"
        +"<h1>in about page</h1>"
    );
});


var server=app.listen(9000);
console.log("listening on port 9000");