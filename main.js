import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import { Product } from "./Models/productos.js";
// se usa a cors por la seguridad ademas es un midleware que me deja mantener una comunicacion con apis que son hincha huevos

dotenv.config();
const app= express()

app.use(express.json())//parseas todas las solicitudes que haces con json
app.use(cors("*"))//habilitas cors para todas las rutas

mongoose.connect(process.env.DB)
//el . env son variables de en trono para todos los archivos

app.post("/producto", async (req, res)=>{
    const {title,price,description,stock}=req.body
    await Product.create({
        title: title,
        price:price,
        description:description,
        stock:stock
    })
    res.status(201).json("mensaje: el producto fue creado")
})

app.listen(process.env.PORT, ()=> {
    console.log(`app en el puerto http://localhost:${process.env.PORT}`);
    
})