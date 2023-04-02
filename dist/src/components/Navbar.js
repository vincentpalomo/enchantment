"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    return (react_1.default.createElement("div", { className: "flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8" },
        react_1.default.createElement("div", { className: "flex items-center" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/cards" },
                react_1.default.createElement("span", { className: "font-serif text-4xl text-black" }, "enchantment \uD83E\uDDD9\u200D\u2642\uFE0F"))),
        react_1.default.createElement("div", { className: "flex justify-end flex-1 mr-auto" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/home", className: "active:text-pink-500" },
                react_1.default.createElement("button", { className: "m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500" }, "home")),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/cards", className: "active:text-pink-500" },
                react_1.default.createElement("button", { className: "m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500" }, "cards")),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/decks", className: " active:text-pink-500" },
                react_1.default.createElement("button", { className: "m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500" }, "decks")),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/about", className: " active:text-pink-500" },
                react_1.default.createElement("button", { className: "m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500" }, "about"))),
        react_1.default.createElement("div", { className: "flex items-center justify-end flex-1" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: " active:text-pink-500" },
                react_1.default.createElement("button", { className: "m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500" }, "login")),
            " ",
            react_1.default.createElement(react_router_dom_1.Link, { to: "/register", className: " active:text-pink-500" },
                react_1.default.createElement("button", { className: "m-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500" }, "register")))));
};
exports.default = Navbar;
