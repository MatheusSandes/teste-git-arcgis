const express= require("express");
const app= express();

app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
        res.render("index")    
});

app.get("/print", (req, res) =>{
    res.render("print")    
});

app.get("/edit", (req, res) =>{
    res.render("edit")    
});

app.get("/table", (req, res) =>{
    res.render("table")    
});

app.get("/teste", (req, res) =>{
    res.render("teste01")    
});

app.get("/reserva", (req, res) =>{
    res.render("reserva")    
});

app.listen(3000, () =>{
    console.log("app rodando");
});