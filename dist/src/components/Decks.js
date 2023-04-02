"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Decks = (props) => {
    return (react_1.default.createElement("section", { className: 'relative flex items-center w-full bg-white' },
        react_1.default.createElement("div", { className: 'relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl' },
            react_1.default.createElement("div", { className: 'py-6 bg-white sm:py-0' },
                react_1.default.createElement("div", { className: 'max-w-screen-xl px-4 mx-auto md:px-8' },
                    react_1.default.createElement("div", { className: 'grid gap-8 sm:grid-cols-2 sm:gap-12' },
                        react_1.default.createElement("div", { className: 'overflow-hidden bg-gray-100 rounded-lg shadow-lg h-80 sm:rounded-none sm:shadow-none md:h-auto' },
                            react_1.default.createElement("img", { src: 'https://i.ibb.co/9gFVsdz/Lythande.png', loading: 'lazy', alt: 'Photo by Jeremy Cai', className: 'object-cover object-center w-full h-full rounded-2xl' })),
                        react_1.default.createElement("div", { className: 'flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32 xl:py-64' },
                            react_1.default.createElement("p", { className: 'mb-4 text-sm font-semibold text-indigo-500 uppercase md:text-base' }, "Decks"),
                            react_1.default.createElement("h1", { className: 'mb-2 text-2xl font-bold text-center text-gray-800 sm:text-left md:text-3xl' }, "currently not available"),
                            react_1.default.createElement("p", { className: 'mb-8 text-center text-gray-500 sm:text-left md:text-lg' }, "Decks are currently in development...\uD83E\uDDD9\u200D\u2642\uFE0F"),
                            react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: 'inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base' }, "Go home"))))))));
};
exports.default = Decks;
