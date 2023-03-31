const { client } = require('./')
const { createCard } = require('./models/cards')
const { createUser } = require('./models/users')

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
      image TEXT
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
        name: 'Thalara the Enchantress',
        description: 'New set aquired',
        image: 'No Image available 😵'
      },
      {
        name: 'Kael the Shadowblade',
        description: 'New set aquired',
        image: 'No Image available 😵'
      },
      {
        name: 'Nymira the Faerie Queen',
        description: 'New set aquired',
        image: 'No Image available 😵'
      },
      {
        name: 'Elyndria the Elven Ranger',
        description: 'New set aquired',
        image: 'No Image available 😵'
      },
      {
        name: 'Lyra the Celestial',
        description: 'New set aquired',
        image: 'No Image available 😵'
      },
    ]
    await Promise.all(cardsToCreate.map(createCard))
    console.log(`Finished creating cards... ✔`)
  } catch (error) {
    console.error(`Error creating cards... 🤔`)
  }
}

const createInitialUsers = async () => {
  try {
    console.log(`Creating users... 🙏`)
    const usersToCreate = [
      {
        username: 'jinx',
        password: 'bestbb',
        email: 'jinx@dachshund.com',
        isAdmin: true,
        avatar: 'No image available 😵'
      },
      {
        username: 'voodoo',
        password: 'smolboi',
        email: 'voodoo@dachshund.com',
        isAdmin: false,
        avatar: 'No image available 😵'
      }
    ]
    await Promise.all(usersToCreate.map(createUser))
    console.log(`Finished creating users... ✔`)
  } catch (error) {
    console.error(`Error creating users... 😵`)
  }
}

buildTables()
.then(createInitialUsers)
.then(createInitialCards)
.catch(console.error)
.finally(() => client.end())