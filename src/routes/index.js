import { Router } from 'express'

import routerUser  from "./user.js";
import routerAuth from './auth.js'

const routes = Router()


routes.use('/user', routerUser)
routes.use('/auth', routerAuth)

export default routes

