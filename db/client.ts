import { config } from 'dotenv'
import { Client } from 'pg'

config()

// db name
// const DB_NAME = 'fantasy-cards'

const DB_URL = process.env.DATABASE_URL

let client = new Client({
  connectionString: DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client