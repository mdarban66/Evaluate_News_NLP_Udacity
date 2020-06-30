const mockAPI = require('../server/mockAPI');

describe('Mock API Test', () => {
    test('testing the length of properties', () => {

        const title = 'test json response';
        const message = 'this is a message';
        const time = 'now';

        expect(mockAPI.message.length).toBeGreaterThan(0);
        expect(mockAPI.title.length).toBeGreaterThan(0);
        expect(mockAPI.time.length).toBeGreaterThan(0);
    });
})