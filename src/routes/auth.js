import { Router } from 'express'

import { iniciarSesion } from '../controllers/user.js'
const router = Router()

router.post('/login', iniciarSesion)

export default router