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
exports.fetchCardByCardname = exports.fetchCardById = exports.fetchAllCards = exports.APIURL = void 0;
exports.APIURL = "http://localhost:8000/api";
// all cards
const fetchAllCards = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/cards/`);
    const json = yield res.json();
    return json;
});
exports.fetchAllCards = fetchAllCards;
// card by id
const fetchCardById = (cardID) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/cards/id/${cardID}`);
    const json = yield res.json();
    return json;
});
exports.fetchCardById = fetchCardById;
// card by cardname
const fetchCardByCardname = (cardname) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/cards/${cardname}`);
    const json = yield res.json();
    return json;
});
exports.fetchCardByCardname = fetchCardByCardname;
