"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("./components");
require("./index.css");
const api_1 = require("./api/api");
const App = () => {
    const [cards, setCards] = (0, react_1.useState)([]);
    const [user, setUser] = (0, react_1.useState)(localStorage.getItem('user') || '');
    const [online, setOnline] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const getCards = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const cards = yield (0, api_1.fetchAllCards)();
                setCards(cards);
            }
            catch (error) {
                console.error(error);
            }
        });
        getCards();
    }, []);
    (0, react_1.useEffect)(() => {
        const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const currentUser = yield (0, api_1.fetchActiveUser)(user);
                if (currentUser) {
                    setOnline(true);
                }
                else {
                    setOnline(false);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        if (user !== '') {
            getUser();
        }
    }, [user]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("header", null,
                react_1.default.createElement(components_1.Navbar, { online: online, user: user, setUser: setUser, setOnline: setOnline })),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(components_1.Homepage, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/cards', element: react_1.default.createElement(components_1.Cards, { cards: cards }) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/about', element: react_1.default.createElement(components_1.About, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/decks', element: react_1.default.createElement(components_1.Decks, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/login', element: react_1.default.createElement(components_1.Login, { setUser: setUser }) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/register', element: react_1.default.createElement(components_1.Register, null) })))));
};
const container = document.getElementById('root');
const root = container ? (0, client_1.createRoot)(container) : null;
if (root) {
    root.render(react_1.default.createElement(App, null));
}
