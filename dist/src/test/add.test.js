"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = __importDefault(require("../math/add"));
describe('This is a test', () => {
    it('should pass', () => {
        expect((0, add_1.default)(1, 2)).toBe(3);
    });
});
