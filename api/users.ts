import express, {Request, Response, NextFunction} from "express";
const usersRouter = express.Router()

const {
  getUsers,
  createUser,
  getUserByUsername
} = require('../db/models/users')

interface UserRequestBody {
  username: string,
  password: string,
  email: string,
  avatar: string
}

// GET /api/users/test
usersRouter.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send({
    message: `Users endpoint operational ⚡`
  })
})

// GET /api/users/
usersRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const users = await getUsers()

  res.send({
    users
  })
})

// POST /api/users/register
usersRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const { username, password, email, avatar }: UserRequestBody = req.body

  try {
    if (password.length < 8) {
      next({
        name: "PasswordTooShort",
        message: `Password must be atleast 8 characters 😵`
      })
    }

    const checkUser = await getUserByUsername(username)

    if (checkUser) {
      next({
        name: 'UserExistsError',
        message: `A user by ${username} already exists`
      })
    }

    const user = await createUser({
      username, password, email, avatar
    })

    res.send({
      message: 'Thank you for signing up! 😎',
      user
    })
  } catch (error) {
    console.error(`error registration endpoint`, error)
    next(error)
  }
})

// POST /api/users/login
usersRouter.post('/login', async (req: Request, res: Response, next:NextFunction) => {
  const { username, password }: UserRequestBody = req.body

  try {
    if (!username || !password) {
      next({
        name: 'MissingCredentialError',
        message: `Please supply both a username and password 🤔`
      })
    }

    const user = await getUserByUsername(username)

    res.send({
      message: `You're logged in! 🙂`,
      user
    })
  } catch (error) {
    console.error(`error loging endpoint`, error)
    next(error)
  }
})

module.exports = usersRouter