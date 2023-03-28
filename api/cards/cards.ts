import express from 'express'
const cardsRouter = express.Router()

// GET /api/cards/test
cardsRouter.get('/test', (req, res, next) => {
  res.send({
    message: `Cards endpoint online ✔`
  })
})