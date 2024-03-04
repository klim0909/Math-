const ErrorRepository = require('./ErrorRepository');

describe('ErrorRepository', () => {
    let errorRepository;

    beforeEach(() => {
        errorRepository = new ErrorRepository();
        errorRepository.addError(404, 'Not Found');
        errorRepository.addError(500, 'Internal Server Error');
    });

    test('translate method should return error description for known code', () => {
        expect(errorRepository.translate(404)).toBe('Not Found');
        expect(errorRepository.translate(500)).toBe('Internal Server Error');
    });

    test('translate method should return "Unknown error" for unknown code', () => {
        expect(errorRepository.translate(400)).toBe('Unknown error');
        expect(errorRepository.translate(503)).toBe('Unknown error');
    });
});
