import express from "express";
const usersRouter = express.Router()

// GET /api/users/test
usersRouter.get('/test', (req, res, next) => {
  res.send({
    message: `Users endpoint operational ⚡`
  })
})

module.exports = usersRouter