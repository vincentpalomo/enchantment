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
const cardsRouter = express_1.default.Router();
const { getCards, getCardById, getCardByName, createCard, editCard } = require('../db/models/cards');
// GET /api/cards/test
cardsRouter.get('/test', (req, res, next) => {
    res.send({
        message: `Cards endpoint operational ⚡`
    });
});
// GET /api/cards/
cardsRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cards = yield getCards();
    res.send(cards);
}));
// GET /api/cards/id/:cardID
cardsRouter.get('/id/:cardID', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cardID = parseInt(req.params.cardID);
        const card = yield getCardById(cardID);
        if (!card) {
            const error = {
                name: 'CardNotFoundError',
                message: `Card does not exist with id: [${cardID}] 🤔`
            };
            throw error;
        }
        res.send(card);
    }
    catch (error) {
        const { name, message } = error;
        next({ name, message });
    }
}));
// /api/cards/:cardname
cardsRouter.get('/:cardname', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cardname = req.params.cardname;
        const card = yield getCardByName(cardname);
        if (!card) {
            const error = {
                name: 'CardNotFoundError',
                message: `Card with cardname: [${cardname}] does not exist 🤔`
            };
            throw error;
        }
        res.send(card);
    }
    catch (error) {
        const { name, message } = error;
        next({ name, message });
    }
}));
module.exports = cardsRouter;
