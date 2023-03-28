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
const { client } = require('./');
const { createCard } = require('./models/cards');
function buildTables() {
    return __awaiter(this, void 0, void 0, function* () {
        client.connect();
        try {
            console.log(`Dropping all tables...🙏`);
            yield client.query(`
    DROP TABLE IF EXISTS cards CASCADE;
    DROP TABLE IF EXISTS users CASCADE;
    `);
            console.log(`Finished dropping tables...✔`);
        }
        catch (error) {
            console.error(`Error dropping tables... 😵`);
        }
        try {
            console.log(`Starting to build tables...🙏`);
            yield client.query(`
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
    `);
            console.log(`Finished building tables... ✔`);
        }
        catch (error) {
            console.error(`Error building tables... 😵`);
        }
    });
}
const createInitialCards = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Creating cards... 🧧`);
        const cardsToCreate = [
            {
                name: 'Hightower',
                description: 'New set aquired',
                img: 'No Image available 😵'
            }
        ];
        yield Promise.all(cardsToCreate.map(createCard));
        console.log(`Finished creating cards... 🧧`);
    }
    catch (error) {
        console.error(`Error creating cards... 🤔`);
    }
});
const createInitialUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Creating users... 🙏`);
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
        ];
        console.log(`Finished creating users... ✔`);
    }
    catch (error) {
        console.error(`Error creating users... 😵`);
    }
});
buildTables()
    .then(createInitialUsers)
    .then(createInitialCards)
    .catch(console.error)
    .finally(() => client.end());
