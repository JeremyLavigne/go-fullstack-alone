const supertest = require('supertest');
const redis = require('redis');
const app = require('../app');

/* Mock database */
const client = redis.createClient();
const mockMatches = { teamHome: 'Chelsea', teamAway: 'Man U' };

client.hmset('test-match', mockMatches, (err) => {
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

    expect(response).toBe(mockMatches);
    // console.log(data);
    // expect(data.teamHome).toBe('Chelsea');
    // expect(data.teamAway).toBe('Man U');
});

afterAll(async () => {
    await client.flushall();
    client.quit();
});
