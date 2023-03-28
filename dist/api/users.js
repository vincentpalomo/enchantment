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
const { getUsers, createUser, getUserByUsername } = require('../db/models/users');
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
// POST /api/users/register
usersRouter.post('/register', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, avatar } = req.body;
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
            username, password, email, avatar
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
module.exports = usersRouter;
