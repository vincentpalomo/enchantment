const { client } = require('./')
const { createCard } = require('./models/cards')

async function buildTables() {
  client.connect()

  try {
    console.log(`Dropping all tables...🙏`)
    await client.query(`
    DROP TABLE IF EXISTS cards CASCADE;
    DROP TABLE IF EXISTS users CASCADE;
    `)
    console.log(`Finished dropping tables...✔`)
  } catch (error) {
    console.error(`Error dropping tables... 😵`)
  }

  try {
    console.log(`Starting to build tables...🙏`)
    await client.query(`
    CREATE TABLE cards (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      img TEXT
    );

    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      email TEXT UNIQUE NOT NULL,
      isAdmin BOOLEAN DEFAULT false,
      avatar TEXT
    );
    `)
    console.log(`Finished building tables... ✔`)
  } catch (error) {
    console.error(`Error building tables... 😵`)
  }
}

const createInitialCards = async () => {
  try {
    console.log(`Creating cards... 🧧`)
    const cardsToCreate = [
      {
        name: 'Hightower',
        description: 'New set aquired',
        img: 'No Image available 😵'
      }
    ]
    await Promise.all(cardsToCreate.map(createCard))
    console.log(`Finished creating cards... 🧧`)
  } catch (error) {
    console.error(`Error creating cards... 🤔`)
  }
}

const createInitialUsers = async () => {
  try {
    console.log(`Creating users... 🙏`)
    console.log(`Finished creating users... ✔`)
  } catch (error) {
    console.error(`Error creating users... 😵`)
  }
}

buildTables()
.then(createInitialCards)
.catch(console.error)
.finally(() => client.end())