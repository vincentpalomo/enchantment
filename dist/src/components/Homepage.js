"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Homepage = (props) => {
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("div", { className: "mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8" },
            react_1.default.createElement("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2" },
                react_1.default.createElement("div", { className: "bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24" },
                    react_1.default.createElement("div", { className: "mx-auto max-w-xl text-center" },
                        react_1.default.createElement("h2", { className: "text-2xl font-bold text-white md:text-3xl" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit"),
                        react_1.default.createElement("p", { className: "hidden text-white/90 sm:mt-4 sm:block" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."),
                        react_1.default.createElement("div", { className: "mt-4 md:mt-8" },
                            react_1.default.createElement("a", { href: "#", className: "inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400" }, "Get Started Today")))),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2" },
                    react_1.default.createElement("img", { alt: "Student", src: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80", className: "h-40 w-full object-cover sm:h-56 md:h-full" }),
                    react_1.default.createElement("img", { alt: "Student", src: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", className: "h-40 w-full object-cover sm:h-56 md:h-full" }))))));
};
exports.default = Homepage;
