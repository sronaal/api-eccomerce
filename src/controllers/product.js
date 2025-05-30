import { request, response } from 'express'

import DaoProducto from '../dao/product.js'

const daoProducto = new DaoProducto()

export const obtenerProductos = async  (req = request, res = response) => {

    try {
        let productos = await daoProducto.findAll()
        
        return res.status(200).json({ productos })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok :false , message: `Error servidor ${error}` })
    }
}


export const crearProducto = (req = request, res = response) => {
    
}