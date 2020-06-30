const request = require('supertest');
const server = require('../server/index');
const mockAPI = require('../server/mockAPI');

describe('Testing get request for /test', () => {
    test('Testing if the response is returned', function(ok) {
        request(server)
            .get('/test')
            .expect(200)
            .end(function(error, res) {
                expect(res.body.title).toEqual(mockAPI.title);
                expect(res.body.message).toEqual(mockAPI.message);
                expect(res.body.time).toEqual(mockAPI.time);
                ok();
            });
    });
});