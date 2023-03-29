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
  image: string
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

// GET /api/cards/:cardname
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

// POST /api/cards/create
cardsRouter.post('/create', async (req: Request, res: Response, next: NextFunction) => {
  const { name, description, image }: CardRequestBody = req.body
  try {
    const checkCard = await getCardByName(name)

    if (checkCard) {
      next({
        name: 'CardExistsError',
        message: `A card by ${name} already exists 🤔`
      })
    }

    const card = await createCard({
      name, description, image
    })

    res.send({
      message: `${name} Card has been successfully created! 🧧`,
      card
    })
  } catch (error) {
    console.log(`error create card endpoint`, error)
    next(error)
  }
})

// PATCH /api/cards/edit/:cardID
cardsRouter.patch('/edit/:cardID', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, image }: CardRequestBody = req.body
    const cardID = parseInt(req.params.cardID)

    const fields = {
      name: name,
      description: description,
      image: image
    }

    const cardUpdate = await editCard(cardID, fields)
    res.send({
      cardUpdate,
      message: `Card updated! 👀`
    })

  } catch (error) {
    console.error(`error update card endpoint`, error)
    next(error)
  }
})

module.exports = cardsRouter