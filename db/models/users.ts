export {}
const client = require('../client')

interface User {
  username: string,
  password: string,
  email: string,
  isAdmin: boolean,
  avatar: string
}

// get all users
const getUsers = async () => {
  try {
    const { rows } = await client.query(`
    SELECT * FROM users
    `)

    return rows
  } catch (error) {
    console.error(error)
  }
}

// create user 
const createUser = async ({username, password, email, isAdmin, avatar}: User): Promise<User | null> => {
  try {
    const { rows: [user] } = await client.query(`
    INSERT INTO users(username, password, email, isAdmin, avatar)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [username, password, email, isAdmin, avatar])

    delete user.password
    delete user.isAdmin
    
    return user
  } catch (error) {
    console.error(error)
    return null
  }
}

// edit user
const editUser = async (userID: number, fields = {}) => {
  const setString = Object.keys(fields)
  .map((key, i) => `"${key}"=$${i + 1}`)
  .join(', ')

  try {
    const { rows: [user] } = await client.query(`
    UPDATE users SET ${setString}
    WHERE id = ${userID}
    RETURNING *
    `, Object.values(fields))

    delete user.password
    return user
  } catch (error) {
    console.error(error)
  }
}

// delete user
const deleteUser = async (userID: number) => {
  try {
   const { rows: [user] } = await client.query(`
    DELETE FROM users
    WHERE id = $1
    `, [userID])

    if (!user) {
      throw {
        name: 'UserNotFoundError',
        message: `User does not exist with id: ${userID} 🤔`
      }
    }

    return { message: `User: ${userID} has been deleted` }
  } catch (error) {
    console.error(error)
  }
}

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
  editUser,
  deleteUser,
  getUserById,
  getUserByUsername
}