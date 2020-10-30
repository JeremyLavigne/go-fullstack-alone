const supertest = require('supertest');
const redis = require('redis');
const app = require('../app');

/* Mock database */
const client = redis.createClient();
const mockMatch = [
    { teamHome: 'Chelsea', teamAway: 'Man U' },
    { teamHome: 'Tottenham', teamAway: 'Burnley' },
];

for (let i = 0; i < mockMatch.length; i += 1) {
    client.hmset(`match-test-${i}`, mockMatch[i], (err) => {
        if (err) { console.log(err); }
    });
}

const api = supertest(app);

test('Matches are returned as json', async () => {
    await api
        .get('/api/matches')
        .then((data) => {
            expect(data.status).toBe(200);
            expect(data.header['content-type']).toContain('application/json');
        });
});

test('One match is Chelsea vs Man U', async () => {
    const response = await api.get('/api/matches');

    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ match: { teamHome: 'Chelsea', teamAway: 'Man U' } }),
        ]),
    );
});

test('There is two matches in database', async () => {
    const response = await api.get('/api/matches');

    expect(response.body).toHaveLength(2);
});

afterAll(() => {
    client.flushall();
    client.quit();
});
