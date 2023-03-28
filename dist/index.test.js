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
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);
const server = require('./server');
// describe('/health endpoint', () => {
//   it('should return {server is healthy}', async (done) => {
//     const response = await request.get('/health')
//     expect(response.status).toBe(200)
//     expect(response.body).toBe(String)
//     done()
//   });
// });
describe('/health', () => {
    it('responds to a request at /health with a message specifying it is healthy', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/health');
        expect(response.status).toEqual(200);
        expect(typeof response.body.message).toEqual('string');
    }));
});
