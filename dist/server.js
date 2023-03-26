"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('./index');
const PORT = Number(process.env.PORT || 3000);
const server = app.listen(PORT, () => {
    console.log(`🧧 Server is running on http://localhost:${PORT}`);
});
module.exports = server;
