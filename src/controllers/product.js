import { request, response } from 'express'

import DaoProducto from '../dao/product.js'

const daoProducto = new DaoProducto()

export const obtenerProductos = async (req = request, res = response) => {

    try {
        let productos = await daoProducto.findAll()

        return res.status(200).json(productos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, message: `Error servidor ${error}` })
    }
}


export const obtenerProductoId = async (req = request, res = response) => {

    try {
        let { id } = req.params

        let producto = await daoProducto.findById(id)

        if (!producto) return res.status(404).json({ ok: true, message: `El producto con el id ${id} no existe` })

        return res.status(200).json(producto)
    } catch (err) {
        return res.status(500).json({ ok: false, message: `Error servidor ${err}` })
    }
}

export const crearProducto = async (req = request, res = response) => {

    try {
        let { producto, precio, stock } = req.body

        await daoProducto.create({ producto, precio, stock })

        return res.status(201).json({ok: true, message: 'El producto se ha creado con exito'})
    } catch (error) {
        return res.status(500).json({ ok: false, message: `Error servidor ${error}` })

    }
}