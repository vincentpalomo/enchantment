"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const pg_1 = require("pg");
(0, dotenv_1.config)();
// db name
// const DB_NAME = 'fantasy-cards'
const DB_URL = process.env.DATABASE_URL;
let client = new pg_1.Client({
    connectionString: DB_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = client;
