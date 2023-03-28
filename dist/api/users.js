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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRouter = express_1.default.Router();
const { getUsers, getUserById, getUserByUsername, createUser, editUser } = require('../db/models/users');
// GET /api/users/test
usersRouter.get('/test', (req, res, next) => {
    res.send({
        message: `Users endpoint operational ⚡`
    });
});
// GET /api/users/
usersRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsers();
    res.send({
        users
    });
}));
// GET /api/users/:userID
usersRouter.get('/id/:userID', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userID = parseInt(req.params.userID);
        const user = yield getUserById(userID);
        if (!user) {
            const error = {
                name: 'UserNotFoundError',
                message: `User does not exist with id: [${userID}] 🤔`
            };
            throw error;
        }
        res.send(user);
    }
    catch (error) {
        const { name, message } = error;
        next({ name, message });
    }
}));
// GET /api/users/:username
usersRouter.get('/:username', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.params.username;
        const user = yield getUserByUsername(username);
        if (!user) {
            const error = {
                name: 'UserNotFoundError',
                message: `User with username: [${username}] does not exist 🤔`
            };
            throw error;
        }
        res.send(user);
    }
    catch (error) {
        const { name, message } = error;
        next({ name, message });
    }
}));
// POST /api/users/register
usersRouter.post('/register', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, isAdmin, avatar } = req.body;
    try {
        if (password.length < 8) {
            next({
                name: "PasswordTooShort",
                message: `Password must be atleast 8 characters 😵`
            });
        }
        const checkUser = yield getUserByUsername(username);
        if (checkUser) {
            next({
                name: 'UserExistsError',
                message: `A user by ${username} already exists`
            });
        }
        const user = yield createUser({
            username, password, email, isAdmin, avatar
        });
        res.send({
            message: 'Thank you for signing up! 😎',
            user
        });
    }
    catch (error) {
        console.error(`error registration endpoint`, error);
        next(error);
    }
}));
// POST /api/users/login
usersRouter.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            next({
                name: 'MissingCredentialError',
                message: `Please supply both a username and password 🤔`
            });
        }
        const user = yield getUserByUsername(username);
        res.send({
            message: `You're logged in! 🙂`,
            user
        });
    }
    catch (error) {
        console.error(`error loging endpoint`, error);
        next(error);
    }
}));
// PATCH /api/users/edit/:userID
usersRouter.patch('/edit/:userID', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email, avatar } = req.body;
        const userID = parseInt(req.params.userID);
        const user = yield getUserById(userID);
        // fields object to send
        const fields = {
            username: username,
            password: password,
            email: email,
            avatar: avatar
        };
        // const fields: { [key: string]: any } = {}
        // fields.username = username
        // if(user && user.id === req.user.id)
        const userUpdate = yield editUser(userID, fields);
        res.send({
            userUpdate,
            message: `Profile updated! 👀`
        });
    }
    catch (error) {
        console.error(`error update user endpoint`, error);
        next(error);
    }
}));
module.exports = usersRouter;
