import express, {Request, Response, NextFunction} from "express";
const usersRouter = express.Router()

const {
  getUsers,
  getUserById,
  getUserByUsername,
  createUser,
  editUser
} = require('../db/models/users')

interface UserRequestBody {
  id: number,
  username: string,
  password: string,
  email: string,
  isAdmin: boolean,
  avatar: string
}

interface ErrorHandler extends Error {
  name: string,
  message: string
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

// GET /api/users/:userID
usersRouter.get('/id/:userID', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userID = parseInt(req.params.userID)
    const user = await getUserById(userID)

    if (!user) {
      const error: ErrorHandler = {
        name: 'UserNotFoundError',
        message: `User does not exist with id: [${userID}] 🤔`
      }
      throw error
    }

    res.send(user)
  } catch (error) {
    const { name, message } = error as ErrorHandler
    next({ name, message })
  }
})

// GET /api/users/:username
usersRouter.get('/:username', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const username = req.params.username
    const user = await getUserByUsername(username)

    if (!user) {
      const error: ErrorHandler = {
        name: 'UserNotFoundError',
        message: `User with username: [${username}] does not exist 🤔`
      }
      throw error
    }

    res.send(user)
  } catch (error) {
    const { name, message } = error as ErrorHandler
    next({ name, message })
  }
})

// POST /api/users/register
usersRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const { username, password, email, isAdmin, avatar }: UserRequestBody = req.body

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
        message: `A user by ${username} already exists 🤔`
      })
    }

    const user = await createUser({
      username, password, email, isAdmin, avatar
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

// PATCH /api/users/edit/:userID
usersRouter.patch('/edit/:userID', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password, email, avatar }: UserRequestBody = req.body
    const userID = parseInt(req.params.userID)
    // implement jwt to get access to user
    const user = await getUserById(userID)
    console.log(user)

    // fields object to send
    const fields = {
      username: username,
      password: password,
      email: email,
      avatar: avatar
    }
    // const fields: { [key: string]: any } = {}
    // fields.username = username

    // if(user && user.id === req.user.id)

    const userUpdate = await editUser(userID, fields)
    res.send({
      userUpdate,
      message: `Profile updated! 👀`
    })
  } catch (error) {
    console.error(`error update user endpoint`, error)
    next(error)
  }
})

module.exports = usersRouter

