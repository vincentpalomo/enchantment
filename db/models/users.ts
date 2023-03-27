export {}
const client = require('../client')

// get all users
const getUsers = async () => {
  try {
    const { rows: user } = await client.query(`
    SELECT id FROM users
    `)

    return user
  } catch (error) {
    console.error(error)
  }
}

// create user 
const createUser = async (username: string, password: string, email: string, isAdmin: boolean, avatar: string) => {
  try {
    const { rows: [user] } = await client.query(`
    INSERT INTO users(username, password, email, isAdmin, avatar)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [username, password, email, isAdmin, avatar])

    return user
  } catch (error) {
    console.error(error)
  }
}

// edit user

// delete user

// get user by id
const getUserById = async (userID: number) => {
  try {
    const { rows: [user] } = await client.query(`
    SELECT * FROM users WHERE id = $1
    `, [userID])

    if (!user) {
      throw {
        name: 'UserNotFoundError',
        message: `User does not exist with id: ${userID} 🤔`
      }
    }

    return user
  } catch (error) {
    console.error(error)
  }
}

// get user by username
const getUserByUsername = async (username: string) => {
  try {
    const { rows: [user] } = await client.query(`
    SELECT * FROM users WHERE username = $1
    `, [username])

    if (!user) {
      throw {
        name: 'UserNotFoundError',
        message: `User with username: ${username} does not exist 🤔`
      }
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  getUserByUsername
}