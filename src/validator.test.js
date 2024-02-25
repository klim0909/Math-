const Validator = require('./validator');

describe('Validator', () => {
    describe('#validateUsername()', () => {
        it('should return true for valid usernames', () => {
            expect(Validator.validateUsername("john_doe")).toBe(true);
            expect(Validator.validateUsername("johndoe123")).toBe(true);
            expect(Validator.validateUsername("j_doe_123")).toBe(true);
            expect(Validator.validateUsername("johndoe")).toBe(true);
        });

        it('should return false for invalid usernames', () => {
            expect(Validator.validateUsername("_johndoe")).toBe(false); 
            expect(Validator.validateUsername("-johndoe")).toBe(false); 
            expect(Validator.validateUsername("johndoe-_")).toBe(false);
            expect(Validator.validateUsername("johndoe__")).toBe(false);
            expect(Validator.validateUsername("johndoe--")).toBe(false); 
            expect(Validator.validateUsername("johndoe---")).toBe(false); 
        });
    });
});
