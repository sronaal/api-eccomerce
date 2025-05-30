import { Router } from 'express'

import { crearProducto, obtenerProductos} from '../controllers/product.js'
import { verificarToken, validarRol } from '../middlewares/jwt.js'

const router = Router()



router.get('/', verificarToken, validarRol('admin')  ,obtenerProductos )

export default router