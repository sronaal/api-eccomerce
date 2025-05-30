import { Router } from 'express'

import { crearProducto, obtenerProductos} from '../controllers/product.js'
import { verificarToken } from '../middlewares/jwt.js'

const router = Router()



router.get('/', verificarToken ,obtenerProductos )

export default router