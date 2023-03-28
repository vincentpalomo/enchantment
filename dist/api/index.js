"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRouter = express_1.default.Router();
// /api/
apiRouter.get('/', (req, res, next) => {
    res.send({
        message: `API is underconstruction 🙏`
    });
});
// /api/test
apiRouter.get('/test', (req, res, next) => {
    res.send({
        message: `Server is operational 🔥`
    });
});
// ROUTER: /api/cards
const cardsRouter = require('./cards');
cardsRouter.use('/cards', cardsRouter);
// ROUTER: /api/users
const usersRouter = require('./users');
usersRouter.use('/users', usersRouter);
module.exports = apiRouter;
