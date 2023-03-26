import { config } from 'dotenv'
import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from 'express'
import cors from 'cors'
import createHttpError from 'http-errors'

// const router = require('./api')

// dotenv
config()

// express server
const app: Application = express()

// middleware
app.use(express.json())
app.use(cors())

// server health route
app.get('/health', (req: Request, res: Response, next: NextFunction) => {
  res.send('Server is healthy ❤')
})

// error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound())
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    status: err.status || 500,
    message: err.message
  })
}

app.use(errorHandler)

// api router
// app.use('/api', router)


module.exports = app 