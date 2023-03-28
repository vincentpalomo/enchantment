import express, {Request, Response, NextFunction} from 'express'
const cardsRouter = express.Router()

const {
  getCards,
  getCardById,
  getCardByName,
  createCard,
  editCard
} = require('../db/models/cards')

interface CardRequestBody {
  id: number,
  name: string,
  description: string,
  img: string
}

interface ErrorHandler extends Error {
  name: string,
  message: string
}

// GET /api/cards/test
cardsRouter.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send({
    message: `Cards endpoint operational ⚡`
  })
})

// GET /api/cards/
cardsRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const cards = await getCards()
  res.send(cards)
})

// GET /api/cards/id/:cardID
cardsRouter.get('/id/:cardID', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cardID = parseInt(req.params.cardID)
    const card = await getCardById(cardID)

    if (!card) {
      const error: ErrorHandler = {
        name: 'CardNotFoundError',
        message: `Card does not exist with id: [${cardID}] 🤔`
      }
      throw error
    }

    res.send(card)
  } catch (error) {
    const { name, message } = error as ErrorHandler
    next({ name, message })
  }
})

// /api/cards/:cardname
cardsRouter.get('/:cardname', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cardname = req.params.cardname
    const card = await getCardByName(cardname)

    if(!card) {
      const error: ErrorHandler = {
        name: 'CardNotFoundError',
        message: `Card with cardname: [${cardname}] does not exist 🤔`
      }
      throw error
    }

    res.send(card)
  } catch (error) {
    const { name, message } = error as ErrorHandler
    next({ name, message })
  }
})

module.exports = cardsRouter