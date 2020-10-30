const supertest = require('supertest');
const redis = require('redis');
const app = require('../app');

/* Mock database */
const client = redis.createClient();
const mockMatch = { teamHome: 'Chelsea', teamAway: 'Man U' };

client.hmset('match-test', mockMatch, (err) => {
    if (err) { console.log(err); }
});

const api = supertest(app);

test('Matches are returned as json', async () => {
    await api
        .get('/api/matches')
        .then((data) => {
            expect(data.status).toBe(200);
            expect(data.header['content-type']).toContain('application/json');
        });
});

test('Expected match is returned', async () => {
    const response = await api.get('/api/matches');

    const expected = { key: 'match-test', match: mockMatch };

    expect(response.body[0]).toMatchObject(expected);
});

afterAll(() => {
    client.flushall();
    client.quit();
});
