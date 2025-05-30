import { request, response } from "express";
import UserDao from "../dao/user.js";

let userDao = new UserDao();

export const crearUsuario = async (req = request, res = response) => {
    try {
        let { firstname, lastname, email, password } = req.body;

        let dataUser = { firstname, lastname, email, password };

        const findUser = await userDao.findByEmail(email)

        if (findUser) return res.status(400).json({ ok: false, message: `El correo ${email} ya se encuentra registrado` })

        const userCreate = await userDao.create(dataUser);

        return res.status(201).json({ ok: true, message: "Usuario Creado" })

    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, message: `Error Server ${error}` });
    }
};


export const obtenerUsuarios = async (req = request, res = response) => {

    try {
        let usuarios = await userDao.findAll()

        return res.status(200).json({ usuarios })


    } catch (error) {
         return res
            .status(500)
            .json({ ok: false, message: `Error Server ${error}` });
    }   
}