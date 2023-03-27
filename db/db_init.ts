const { client } = require('./')

async function buildTables() {
  client.connect()

  try {
    console.log(`Dropping all tables...🙏`)
    await client.query(`
    DROP TABLE IF EXISTS cards CASCADE;
    `)
    console.log(`Finished dropping tables...✔`)
  } catch (error) {
    console.error(`Error dropping tables 😵`)
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
    `)
    console.log(`Finished building tables ✔`)
  } catch (error) {
    console.error(`Error building tables 😵`)
  }
}

buildTables()
.catch(console.error)
.finally(() => client.end())