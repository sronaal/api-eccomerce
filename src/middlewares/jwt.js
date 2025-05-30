import { request, response } from 'express'
import jwt from 'jsonwebtoken'

export const verificarToken = (req = request, res = response, next) => {

    try {
        const accessToken = req.headers['authorization']
        if (!accessToken) res.status(401).json({ message: "Token  requerido" })

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
        console.log(error)
        return res.status(500).json("Error en la autenciacion")
    }
}

export function validarRol(...rolPermitido) {
  return (req, res, next) => {
    const { rol } = req.user;
    console.log(req.user)
    if (!rolPermitido.includes(rol)) {
      return res.status(403).json({ message: 'Acceso denegado: rol insuficiente' });
    }
    next();
  };
}