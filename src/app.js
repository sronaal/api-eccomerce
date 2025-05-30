import express from 'express'
import 'dotenv/config.js'
import conexionDB from './conexionDB.js'

const app = express()

conexionDB()

export default app