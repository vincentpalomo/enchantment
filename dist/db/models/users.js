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
// get all users
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield client.query(`
    SELECT * FROM users
    `);
        return rows;
    }
    catch (error) {
        console.error(error);
    }
});
// create user 
const createUser = ({ username, password, email, isAdmin, avatar }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [user] } = yield client.query(`
    INSERT INTO users(username, password, email, isAdmin, avatar)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [username, password, email, isAdmin, avatar]);
        delete user.password;
        delete user.isAdmin;
        return user;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
// edit user
const editUser = (userID, fields = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const setString = Object.keys(fields)
        .map((key, i) => `"${key}"=$${i + 1}`)
        .join(', ');
    try {
        const { rows: [user] } = yield client.query(`
    UPDATE users SET ${setString}
    WHERE id = ${userID}
    RETURNING *
    `, Object.values(fields));
        delete user.password;
        return user;
    }
    catch (error) {
        console.error(error);
    }
});
// delete user
const deleteUser = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [user] } = yield client.query(`
    DELETE FROM users
    WHERE id = $1
    `, [userID]);
        if (!user) {
            throw {
                name: 'UserNotFoundError',
                message: `User does not exist with id: ${userID} 🤔`
            };
        }
        return { message: `User: ${userID} has been deleted` };
    }
    catch (error) {
        console.error(error);
    }
});
// get user by id
const getUserById = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [user] } = yield client.query(`
    SELECT * FROM users WHERE id = $1
    `, [userID]);
        if (!user) {
            throw {
                name: 'UserNotFoundError',
                message: `User does not exist with id: ${userID} 🤔`
            };
        }
        return user;
    }
    catch (error) {
        console.error(error);
    }
});
// get user by username
const getUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [user] } = yield client.query(`
    SELECT * FROM users WHERE username = $1
    `, [username]);
        if (!user) {
            throw {
                name: 'UserNotFoundError',
                message: `User with username: ${username} does not exist 🤔`
            };
        }
    }
    catch (error) {
        console.error(error);
    }
});
module.exports = {
    getUsers,
    createUser,
    editUser,
    deleteUser,
    getUserById,
    getUserByUsername
};
