import express, {Request, Response, NextFunction} from 'express'
const cardsRouter = express.Router()

// GET /api/cards/test
cardsRouter.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send({
    message: `Cards endpoint operational ⚡`
  })
})

module.exports = cardsRouter