class Validator {
    static validateUsername(username) {
        return /^[a-zA-Z0-9]+(?:[_-][a-zA-Z0-9]+)*$/.test(username);
    }
}

module.exports = Validator;