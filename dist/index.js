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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_errors_1 = __importDefault(require("http-errors"));
// dotenv
(0, dotenv_1.config)();
// express server
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// server health route
app.get('/health', (req, res, next) => {
    res.send('Server is healthy ❤');
});
// error handler
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message
    });
};
app.use(errorHandler);
// api router
app.use('/api', require('./api'));
// DB connection
const { client } = require('./db');
// connect to server
const PORT = process.env.PORT || 4000;
const handle = app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`⚡ Server running on ${PORT}`);
    try {
        yield client.connect();
        console.log(`Database is online! 🔥`);
    }
    catch (error) {
        console.error('Database is not online! 😵');
    }
}));
module.exports = { app, handle };