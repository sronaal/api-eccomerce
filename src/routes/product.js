import { Router } from 'express'

import { crearProducto, obtenerProductos, obtenerProductoId, eliminarProducto} from '../controllers/product.js'
import { verificarToken, validarRol } from '../middlewares/jwt.js'

const router = Router()



router.get('/',   obtenerProductos )
router.get('/:estado', verificarToken, validarRol('admin'))
router.get('/producto/:id', obtenerProductoId)
router.post('/', crearProducto)
router.delete('/:id', eliminarProducto)


export default router