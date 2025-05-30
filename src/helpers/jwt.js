import { request, response } from 'express'

import jwt from 'jsonwebtoken'


export const crearToken = (userData) => {

    return jwt.sign(userData, process.env.JWTSECRET, { expiresIn: '10h' })
}

export const verificarToken = (req = request, res = response, next) => {

    try {
        const accessToken = req.headers['authorization']

        if (!accessToken) res.status(401).json({ message: "Token autenticacín requerido" })

        jwt.verify(accessToken, process.env.JWTSECRET, (err,data) => {

            if (err) {
                if (err.name === 'TokenExpiredError') return res.status(401).json({ message: 'Token expirado' });

                if (err.name === 'JsonWebTokenError') return res.status(401).json({ message: 'Token invalido' })

                if (err.name === 'NotBeforeError') return res.status(401).json({ message: 'Token no válido aún' })
            } else {
                req.user = data;
                next();
            }


        })

    } catch (error) {

        return res.status(500).json("Error en la autenciacion")
    }
}