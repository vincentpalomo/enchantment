import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'

const router = require('./api')

config()

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api', router)

module.exports = server