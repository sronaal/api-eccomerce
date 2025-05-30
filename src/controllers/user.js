import { request, response } from "express";

import UserDao from "../dao/user.js";
import { convertirPassword, validarPassword } from '../helpers/bcrypt.js'
import { crearToken } from '../helpers/jwt.js'
let userDao = new UserDao();



export const crearUsuario = async (req = request, res = response) => {
    try {
        let { firstname, lastname, email, password } = req.body;

        const hashPassword = await convertirPassword(password)
        let dataUser = { firstname, lastname, email };
        dataUser.password = hashPassword

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

export const iniciarSesion = async (req = request, res = response) => {

    try {

        let { email, password } = req.body

        const userFind = await userDao.findByEmail(email)

        if (!userFind) return res.status(401).json({ ok: false, message: "El usuario y contraseña son invalidos" })


        if (! await validarPassword(userFind.password, password)) return res.status(401).json({ ok: false, message: "El usuario y contraseña son invalidos" })
        
        let token = crearToken({id: userFind._id, email: userFind.email})

        res.status(200).json({ ok: true, token})
        

    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, message: `Error Server ${error}` });

    }
}