import { Schema, model } from "mongoose";
//se importa solamemte el squema y el modelo de mongoose

const producto = new Schema({
    /*title: String,
    price: Number,
    description: String,
    Stock:Boolean*/
    // se define el campo y el tipo de elemento 

    title:{
        type: String,
        require:true
    },
    price:{
        type: Number,
        require:false
    },
    description:{
        type: String,
        require:false
    },
    stock:{
        type: Boolean,
        require:false
    }//Se define los esquemas y se define si son obligatorios
})

export const Product= model("Products", producto)