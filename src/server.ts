import express from "express";

const app = express();






app.get("/",(req, res)=>{
    return res.json({message : "NLW#5 "})
})

app.post("/users",(req, res)=>{
    return res.json({message : "User salvo com sucesso"})
})

app.listen(8080, ()=>{
    console.log("Servidor rodando")
})