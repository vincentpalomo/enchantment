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
        const { rows: users } = yield client.query(`
    SELECT id, username, avatar FROM users
    `);
        return users;
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
    RETURNING id, username, email, avatar
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
// get user
const getUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield getUserByUsername(username);
        if (user.password !== password) {
            throw new Error(`Incorrect Password, please try again...🧙‍♂️`);
        }
        const filteredUser = {
            id: user.id,
            username: user.username,
            avatar: user.avatar
        };
        return filteredUser;
    }
    catch (error) {
        console.error(error);
    }
});
// get user by id
const getUserById = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: [user] } = yield client.query(`
    SELECT id, username, email, avatar FROM users WHERE id = $1
    `, [userID]);
        if (!user) {
            throw {
                name: 'UserNotFoundError',
                message: `User does not exist with id: [${userID}] 🤔`
            };
        }
        delete user.password;
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
    SELECT id, username, password, avatar FROM users WHERE username = $1
    `, [username]);
        if (!user) {
            throw {
                name: 'UserNotFoundError',
                message: `User with username: [${username}] does not exist 🤔`
            };
        }
        return user;
    }
    catch (error) {
        console.error(error);
    }
});
module.exports = {
    getUser,
    getUsers,
    createUser,
    editUser,
    deleteUser,
    getUserById,
    getUserByUsername
};
