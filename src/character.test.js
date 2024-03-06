const Character = require('../src/character');

test('calculateAttackModifier calculates correct modifier', () => {
  const character = new Character(100);
  character.setDistance(3);
  expect(character.calculateAttackModifier()).toBe(0.8);
});
