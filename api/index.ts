import express, {Request, Response, NextFunction} from 'express'
const apiRouter = express.Router()

// /api/
apiRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send({
    message: `API is underconstruction 🙏`
  })
})

// /api/test
apiRouter.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send({
    message: `Server is operational 🔥`
  })
})

// ROUTER: /api/cards
const cardsRouter = require('./cards')
apiRouter.use('/cards', cardsRouter)

// ROUTER: /api/users
const usersRouter = require('./users')
apiRouter.use('/users', usersRouter)


module.exports = apiRouter