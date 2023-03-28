"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client = require('../client');
// get all cards
const getCards = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: card } = yield client.query(`
    SELECT id FROM cards
    `);
        const cards = yield Promise.all(card.map((c) => getCardById(c.id)));
        return cards;
    }
    catch (error) {
        console.error(error);
    }
});
// create card
const createCard = (name, description, img) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [card] } = yield client.query(`
    INSERT INTO cards(name, description, img)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [name, description, img]);
        return card;
    }
    catch (error) {
        console.error(error);
    }
});
// edit card
const editCard = (cardID, fields = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const setString = Object.keys(fields)
        .map((key, i) => `"${key}"=$${i + 1}`)
        .join(', ');
    try {
        if (setString.length > 0) {
            yield client.query(`
      UPDATE cards SET ${setString}
      WHERE id = ${cardID}
      RETURNING *
      `, Object.values(fields));
        }
        ;
        return yield getCardById(cardID);
    }
    catch (error) {
        console.error(error);
    }
});
// delete card
const deleteCard = (cardID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [card] } = yield client.query(`
    DELETE FROM cards WHERE id = $1
    `, [cardID]);
        if (!card) {
            throw {
                name: "NoCardExistsError",
                message: `Card with id: ${cardID} does not exist... 😵`
            };
        }
        return { message: `Card: ${cardID} has been removed 🗑` };
    }
    catch (error) {
        console.error(error);
    }
});
// get card by id
const getCardById = (cardID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [card] } = yield client.query(`
    SELECT * FROM cards WHERE id = $1
    `, [cardID]);
        if (!card) {
            throw {
                name: "CardNotFoundError",
                message: `No card exists with the id: ${cardID} 🤔`
            };
        }
        return card;
    }
    catch (error) {
        console.error(error);
    }
});
// get card by name
const getCardByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [card] } = yield client.query(`
    SELECT * FROM cards WHERE name = $1
    `, [name]);
        if (!card) {
            throw {
                name: "CardNotFoundError",
                message: `No card exists with the name: "${name}" 🤔`
            };
        }
        return card;
    }
    catch (error) {
        console.error(error);
    }
});
module.exports = {
    getCards,
    createCard,
    editCard,
    deleteCard,
    getCardById,
    getCardByName
};
