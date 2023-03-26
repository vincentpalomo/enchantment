require('dotenv').config()
const app = require('./index')
const supertest = require('supertest')
const request = supertest(app)
const server = require('./server')

// describe('/health endpoint', () => {
//   it('should return {server is healthy}', async (done) => {
//     const response = await request.get('/health')
//     expect(response.status).toBe(200)
//     expect(response.body).toBe(String)
//     done()
//   });
// });

describe('/health', () => {
  it('responds to a request at /health with a message specifying it is healthy', async () => {
    const response = await request.get('/health');
    expect(response.status).toEqual(200);
    expect(typeof response.body.message).toEqual('string');
  });
});
