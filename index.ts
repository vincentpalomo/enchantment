import { config } from 'dotenv'
import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from 'node_modulesold/@types/express'
import cors from 'node_modulesold/@types/cors'
import createHttpError from 'node_modulesold/@types/http-errors'
import morgan from 'node_modulesold/@types/morgan'

// dotenv
config()

// express server
const app: Application = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// server health route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'Server is healthy ❤' })
})

// api router !! keep routes above error handlers !!
const apiRouter = require('./api')
app.use('/api', apiRouter)

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

// DB connection
const { client } = require('./db')

// connect to server
const PORT = process.env.PORT || 4000

const handle = app.listen(PORT, async () => {
  console.log(`⚡ Server running on http://localhost:${PORT}/`)

  try {
    await client.connect()
    console.log(`Database is online! 🔥`)
  } catch (error) {
    console.error('Database is not online! 😵')
  }
})


module.exports = { app, handle} 