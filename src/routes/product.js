import { Router } from 'express'

import { crearProducto, obtenerProductos} from '../controllers/product.js'

const router = Router()


router.get('/', obtenerProductos )

export default router