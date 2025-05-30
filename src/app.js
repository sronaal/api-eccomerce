import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'

import conexionDB from './conexionDB.js'
import routes from './routes/index.js'
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api',  routes)

conexionDB()

export default app