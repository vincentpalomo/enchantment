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
const { createUser } = require('./models/users');
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
      hp INT NOT NULL,
      mana INT NOT NULL,
      description TEXT NOT NULL,
      skill_1 VARCHAR(50) NOT NULL,
      skill_2 VARCHAR(50) NOT NULL,
      skill_3 VARCHAR(50) NOT NULL,
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
                name: 'Thalara the Enchantress',
                hp: 5,
                mana: 6,
                description: 'description needed 🧙‍♂️',
                skill_1: 'Enchantment',
                skill_2: 'Charm',
                skill_3: 'Illusion',
                image: 'https://i.ibb.co/mBT3wyv/Thalara.png'
            },
            {
                name: 'Kael the Shadowblade',
                hp: 6,
                mana: 5,
                description: 'description needed 🧙‍♂️',
                skill_1: 'Stealth',
                skill_2: 'Backstab',
                skill_3: 'Shadow Blade',
                image: 'https://i.ibb.co/TYPKNTr/Kael.png'
            },
            {
                name: 'Nymira the Faerie Queen',
                hp: 7,
                mana: 7,
                description: 'Skills: Nature Magic, Flight, Fairy Dust',
                skill_1: 'Nature Magic',
                skill_2: 'Flight',
                skill_3: 'Fairy Dust',
                image: 'https://i.ibb.co/jHRs731/Nymira.png'
            },
            {
                name: 'Elyndria the Elven Ranger',
                hp: 8,
                mana: 4,
                description: 'Skills: Archery, Tracking, Nature Magic',
                skill_1: 'Quickshot',
                skill_2: 'Tracking',
                skill_3: 'Piercing Arrow',
                image: 'https://i.ibb.co/jM26KzD/Elyndria.png'
            },
            {
                name: 'Lyra the Celestial',
                hp: 9,
                mana: 8,
                description: 'Skills: Divine Magic, Healing, ',
                skill_1: 'Divine Magic',
                skill_2: 'Healing',
                skill_3: 'Protection',
                image: 'https://i.ibb.co/vxdLmrC/Lyra.png'
            },
            {
                name: 'Azura the Elemental Witch',
                hp: 4,
                mana: 10,
                description: 'Skills: Elemental Magic, Pyromancy, Cryomancy',
                skill_1: 'Elemental Magic',
                skill_2: 'Pyromancy',
                skill_3: 'Cryomancy',
                image: 'https://i.ibb.co/JdFFmPK/Azura.png'
            },
        ];
        yield Promise.all(cardsToCreate.map(createCard));
        console.log(`Finished creating cards... ✔`);
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
                avatar: 'https://i.ibb.co/F0nkS0z/Avatar.png'
            },
            {
                username: 'voodoo',
                password: 'smolboi',
                email: 'voodoo@dachshund.com',
                isAdmin: false,
                avatar: 'https://i.ibb.co/F0nkS0z/Avatar.png'
            }
        ];
        yield Promise.all(usersToCreate.map(createUser));
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
