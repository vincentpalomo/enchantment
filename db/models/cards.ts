export {}
const client = require('../client')
interface Cards {
  name: string,
  description: string,
  image: string
}

// get all cards
const getCards = async () => {
  try {
    const { rows: card } = await client.query(`
    SELECT id FROM cards
    `)

    const cards = await Promise.all(card.map((c: any) => getCardById(c.id)))
    return cards

  } catch (error) {
    console.error(error)
  }
}

// create card
const createCard = async ( {name, description, image}: Cards ): Promise<Cards | null> => {
  try {
    const { rows: [card] } = await client.query(`
    INSERT INTO cards(name, description, image)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [name, description, image])

    return card
  } catch (error) {
    console.error(error)
    return null
  }
}

// edit card
const editCard = async (cardID: number, fields: object = {}) => {
  const setString = Object.keys(fields)
  .map((key, i) => `"${key}"=$${i +1}`)
  .join(', ')

  try {
    if (setString.length > 0) {
      await client.query(`
      UPDATE cards SET ${setString}
      WHERE id = ${cardID}
      RETURNING *
      `, Object.values(fields))
    };

    return await getCardById(cardID)
  } catch (error) {
   console.error(error) 
  }

}

// delete card
const deleteCard = async (cardID: number) => {
  try {
    const { rows: [card] } = await client.query(`
    DELETE FROM cards WHERE id = $1
    `, [cardID])

    if (!card) {
      throw {
        name: "NoCardExistsError",
        message: `Card with id: ${cardID} does not exist... 😵`
      }
    }

    return { message: `Card: ${cardID} has been removed 🗑`}
  } catch (error) {
    console.error(error)
  }
}

// get card by id
const getCardById = async (cardID: number) => {
  try {
    const { rows: [card] } = await client.query(`
    SELECT id, name, description, image FROM cards WHERE id = $1
    `,[cardID]);

    if (!card) {
      throw {
        name: "CardNotFoundError",
        message: `No card exists with the id: ${cardID} 🤔`
      }
    }

    return card
  } catch (error) {
    console.error(error)
  }
} 

// get card by name
const getCardByName = async (name: string) => {
  try {
    const {rows: [card]} = await client.query(`
    SELECT id, name, description, image FROM cards WHERE name = $1
    `, [name]);

    if (!card) {
      throw {
        name: "CardNotFoundError",
        message: `No card exists with the name: "${name}" 🤔`
      }
    }

    return card
  } catch (error) {
    console.error(error)
  }
} 

module.exports = {
  getCards,
  createCard,
  editCard,
  deleteCard,
  getCardById,
  getCardByName
}