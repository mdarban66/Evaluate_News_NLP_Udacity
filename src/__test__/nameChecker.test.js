import { checkForName } from '../client/js/nameChecker';

describe('Testing the CheckName function', () => {
    test('Testing the checkForName() is defined', () => {
        expect(checkForName).toBeDefined();
    });

    test('Testing the type of checkForName()', () => {
        expect(typeof checkForName).not.toBe('list');
    });
})