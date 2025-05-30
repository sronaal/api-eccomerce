import { Router } from 'express'

import routerUser  from "./user.js";
import routerAuth from './auth.js'
import routerProduct from './product.js'

const routes = Router()


routes.use('/user', routerUser)
routes.use('/auth', routerAuth)
routes.use('/product',  routerProduct)

export default routes

