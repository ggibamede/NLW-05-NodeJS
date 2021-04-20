import express from "express";

import './database' 
const app = express();
import { routes } from './routes';
app.use(express.json());
app.use(routes)


app.listen(8080, ()=>{
    console.log("Servidor rodando")
})