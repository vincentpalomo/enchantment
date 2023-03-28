"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardsRouter = express_1.default.Router();
// GET /api/cards/test
cardsRouter.get('/test', (req, res, next) => {
    res.send({
        message: `Cards endpoint online ✔`
    });
});
module.exports = cardsRouter;
