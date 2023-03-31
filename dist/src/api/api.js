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
exports.fetchDeleteUser = exports.fetchEditUser = exports.fetchLogin = exports.fetchRegister = exports.fetchUserByUsername = exports.fetchUserByUserID = exports.fetchAllUsers = exports.fetchDeleteCard = exports.fetchEditCard = exports.fetchCreateCard = exports.fetchCardByCardname = exports.fetchCardById = exports.fetchAllCards = exports.APIURL = void 0;
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
// create card
const fetchCreateCard = (name, description, image) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/cards/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            description: `${description}`,
            image: `${image}`,
        }),
    });
    const json = res.json();
    return json;
});
exports.fetchCreateCard = fetchCreateCard;
// edit card
const fetchEditCard = (cardID, name, description, image) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/cards/edit/${cardID}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            description: `${description}`,
            image: `${image}`,
        }),
    });
    const json = res.json();
    return json;
});
exports.fetchEditCard = fetchEditCard;
// delete card
const fetchDeleteCard = (cardID) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/cards/delete/${cardID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = res.json();
    return json;
});
exports.fetchDeleteCard = fetchDeleteCard;
// all users
const fetchAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/users/`);
    const json = res.json();
    return json;
});
exports.fetchAllUsers = fetchAllUsers;
// user by id
const fetchUserByUserID = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/users/id/${userID}`);
    const json = yield res.json();
    return json;
});
exports.fetchUserByUserID = fetchUserByUserID;
// user by username
const fetchUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/users/${username}`);
    const json = yield res.json();
    return json;
});
exports.fetchUserByUsername = fetchUserByUsername;
// register user
const fetchRegister = (username, password, email, isAdmin, avatar) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
            email: `${email}`,
            isAdmin: `${isAdmin}`,
            avatar: `${avatar}`,
        }),
    });
    const json = res.json();
    return json;
});
exports.fetchRegister = fetchRegister;
// login user
const fetchLogin = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
        }),
    });
    const json = res.json();
    return json;
});
exports.fetchLogin = fetchLogin;
// edit user
const fetchEditUser = (userID, username, password, email, avatar) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/users/edit/${userID}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
            email: `${email}`,
            avatar: `${avatar}`,
        }),
    });
    const json = res.json();
    return json;
});
exports.fetchEditUser = fetchEditUser;
// delete user
const fetchDeleteUser = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${exports.APIURL}/users/delete/${userID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = res.json();
    return json;
});
exports.fetchDeleteUser = fetchDeleteUser;
