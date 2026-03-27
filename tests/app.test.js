const request = require('supertest');
const app = require('../server');

describe('Antigravity Bank API Tests', () => {
    it('GET /api/balance should return account balance', async () => {
        const res = await request(app).get('/api/balance');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('balance');
        expect(res.body.currency).toEqual('USD');
    });

    it('GET /api/transactions should return a list of recent transactions', async () => {
        const res = await request(app).get('/api/transactions');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
    });
});
