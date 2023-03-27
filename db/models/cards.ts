export {}
const client = require('../client')

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
const createCard = async ( name: string, description: string, img: string ) => {
  try {
    const { rows: [card] } = await client.query(`
    INSERT INTO cards(name, description, img)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [name, description, img])

    return card
  } catch (error) {
    console.error(error)
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

    return card
  } catch (error) {
    console.error(error)
  }
}

// get card by id
const getCardById = async (cardID: number) => {
  try {
    const { rows: [card] } = await client.query(`
    SELECT * FROM cards WHERE id = $1
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
    SELECT * FROM cards WHERE name = $1
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