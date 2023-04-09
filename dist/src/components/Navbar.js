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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = (props) => {
    var _a, _b, _c, _d;
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const logout = () => {
        props.setUser('');
        props.setOnline(false);
        localStorage.removeItem('user');
        navigate('/');
        setIsMenuOpen(false);
    };
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };
    return (react_1.default.createElement("div", { className: 'relative z-50 flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8' },
        react_1.default.createElement("div", { className: 'flex items-center ml-auto ' },
            react_1.default.createElement("div", { className: `${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 bg-white py-2 px-4 right-0 border space-y-1` },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: 'block font-serif text-xl text-black hover:text-pink-500', onClick: handleCloseMenu }, "home"),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/cards', className: 'block font-serif text-xl text-black hover:text-pink-500', onClick: handleCloseMenu }, "cards"),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/decks', className: 'block font-serif text-xl text-black hover:text-pink-500', onClick: handleCloseMenu }, "decks"),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/about', className: 'block font-serif text-xl text-black hover:text-pink-500', onClick: handleCloseMenu }, "about"),
                !props.online ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: '/login', className: 'block font-serif text-xl text-black hover:text-pink-500', onClick: handleCloseMenu }, "login"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: '/register', className: 'block font-serif text-xl text-black hover:text-pink-500', onClick: handleCloseMenu }, "register"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: 'flex' },
                        react_1.default.createElement("span", { className: 'block m-1 font-serif text-xl text-pink-500' }, (_a = props.loggedUser) === null || _a === void 0 ? void 0 : _a.username)),
                    react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: 'active:text-pink-500' },
                        react_1.default.createElement("button", { onClick: logout, className: 'block font-serif text-xl text-black hover:text-pink-500' }, "logout"))))),
            react_1.default.createElement("button", { className: 'block m-3 text-4xl text-gray-800 lg:hidden hover:text-gray-600 focus:text-gray-600', onClick: handleToggleMenu }, props.online ? (react_1.default.createElement("img", { alt: 'avatar', src: (_b = props.loggedUser) === null || _b === void 0 ? void 0 : _b.avatar, className: 'object-cover w-10 h-10 rounded-full' })) : ('🧙‍♂️'))),
        react_1.default.createElement("div", { className: 'flex items-center' },
            react_1.default.createElement(react_router_dom_1.Link, { to: '/cards' },
                react_1.default.createElement("span", { className: 'hidden font-serif text-4xl text-black lg:inline' }, "enchantment \uD83E\uDDD9\u200D\u2642\uFE0F"))),
        react_1.default.createElement("div", { className: 'justify-end flex-1 hidden mr-auto lg:flex' },
            react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: 'active:text-pink-500' },
                react_1.default.createElement("button", { className: 'm-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500' }, "home")),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/cards', className: 'active:text-pink-500' },
                react_1.default.createElement("button", { className: 'm-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500' }, "cards")),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/decks', className: ' active:text-pink-500' },
                react_1.default.createElement("button", { className: 'm-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500' }, "decks")),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/about', className: ' active:text-pink-500' },
                react_1.default.createElement("button", { className: 'm-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500' }, "about"))),
        react_1.default.createElement("div", { className: 'items-center justify-end flex-1 hidden lg:flex' }, !props.online ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_router_dom_1.Link, { to: '/login', className: ' active:text-pink-500' },
                react_1.default.createElement("button", { className: 'm-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500' }, "login")),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/register', className: ' active:text-pink-500' },
                react_1.default.createElement("button", { className: 'm-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500' }, "register")))) : (react_1.default.createElement(react_1.default.Fragment, null,
            ((_c = props.loggedUser) === null || _c === void 0 ? void 0 : _c.username) === 'jinx' ? (react_1.default.createElement("img", { alt: 'avatar', src: 'https://i.ibb.co/F0nkS0z/Avatar.png', className: 'object-cover w-10 h-10 rounded-full' })) : (react_1.default.createElement("img", { src: (_d = props.loggedUser) === null || _d === void 0 ? void 0 : _d.avatar, alt: '', className: 'object-cover w-10 h-10 rounded-full' })),
            react_1.default.createElement("span", { className: 'm-2 font-serif text-xl text-pink-500' }, props.user),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: 'active:text-pink-500' },
                react_1.default.createElement("button", { onClick: logout, className: 'm-2 font-serif text-xl text-black hover:text-pink-500 focus:text-pink-500 ' }, "logout")))))));
};
exports.default = Navbar;
