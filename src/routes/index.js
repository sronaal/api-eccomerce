import { Router } from 'express'

import routerUser  from "./user.js";

const routes = Router()


routes.use('/user', routerUser)


export default routes

