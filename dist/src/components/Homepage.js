"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Homepage = (props) => {
    return (react_1.default.createElement("section", { className: "relative flex items-center w-full bg-white" },
        react_1.default.createElement("div", { className: "relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl" },
            react_1.default.createElement("div", { className: "relative flex-col items-start m-auto align-middle" },
                react_1.default.createElement("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24" },
                    react_1.default.createElement("div", { className: "relative items-center gap-12 m-auto lg:inline-flex md:order-first" },
                        react_1.default.createElement("div", { className: "max-w-xl text-center lg:text-left" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("p", { className: "text-2xl font-medium tracking-tight text-black sm:text-4xl" }, "I am a short heading"),
                                react_1.default.createElement("p", { className: "max-w-xl mt-4 text-base tracking-tight text-gray-600" }, "Use this paragraph to share information about your company or products. Make it engaging and interesting, and showcase your brand's personality. Thanks for visiting our website!")),
                            react_1.default.createElement("div", { className: "flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start" },
                                react_1.default.createElement(react_router_dom_1.Link, { to: "/cards", className: "items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black" }, "Get started"),
                                react_1.default.createElement(react_router_dom_1.Link, { to: "/about", className: "inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" },
                                    "Learn more",
                                    react_1.default.createElement("span", { "aria-hidden": "true" }, " \u2192 "))))),
                    react_1.default.createElement("div", { className: "order-first block w-full mt-12 aspect-square lg:mt-0" },
                        react_1.default.createElement("img", { className: "object-cover object-center w-full mx-auto bg-black rounded-2xl lg:ml-auto", alt: "hero", src: "https://i.ibb.co/8PnhbSw/Battle.png" })))))));
};
exports.default = Homepage;
