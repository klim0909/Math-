module.exports = {
  testEnvironment: 'node',
  testMatch: ["**/*.test.js"],
},
{
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
}