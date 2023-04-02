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
const api_1 = require("../api/api");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Login = (props) => {
    const [username, setUsername] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [message, setMessage] = (0, react_1.useState)('');
    const history = (0, react_router_dom_1.useNavigate)();
    const login = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setUsername('');
        setPassword('');
        try {
            if (!username || !password) {
                setMessage('username or password missing');
            }
            const login = yield (0, api_1.fetchLogin)(username, password);
            if (login.status) {
                // setMessage('Invalid username or password, please try again 🧙‍♂️');
                setMessage(login.message);
            }
            else {
                history('/cards');
            }
        }
        catch (error) {
            console.error(error);
        }
    });
    return (react_1.default.createElement("div", { className: 'py-6 bg-white sm:py-8 lg:py-12' },
        react_1.default.createElement("div", { className: 'px-4 mx-auto max-w-screen-2xl md:px-8' },
            react_1.default.createElement("h2", { className: 'mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl' }, "Login"),
            react_1.default.createElement("form", { className: 'max-w-lg mx-auto border rounded-lg', onSubmit: login },
                react_1.default.createElement("div", { className: 'flex flex-col gap-4 p-4 md:p-8' },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: 'inline-block mb-2 text-sm text-gray-800 sm:text-base' }, "Username"),
                        react_1.default.createElement("input", { name: 'username', value: username, required: true, onChange: (e) => setUsername(e.target.value), className: 'w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring' })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: 'inline-block mb-2 text-sm text-gray-800 sm:text-base' }, "Password"),
                        react_1.default.createElement("input", { type: 'password', name: 'password', value: password, required: true, onChange: (e) => setPassword(e.target.value), className: 'w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring' })),
                    react_1.default.createElement("span", { className: 'text-center text-red-500' }, message),
                    react_1.default.createElement("button", { type: 'submit', className: 'block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base' }, "Log in")),
                react_1.default.createElement("div", { className: 'flex items-center justify-center p-4 bg-gray-100' },
                    react_1.default.createElement("p", { className: 'text-sm text-center text-gray-500' },
                        "Don't have an account?",
                        ' ',
                        react_1.default.createElement(react_router_dom_1.Link, { to: '/register', className: 'text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700' }, "Register")))))));
};
exports.default = Login;
