import { Router } from 'express'

import { crearUsuario, obtenerUsuarios} from '../controllers/user.js'
const routerUser = Router()


routerUser.get('/', obtenerUsuarios)
routerUser.post('/create',  crearUsuario) 

export default routerUser