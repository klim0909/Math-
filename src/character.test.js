const Character = require('../characters/character');

test('calculateAttackModifier for Character class', () => {
  const character = new Character(100);
  character.setDistance(2);
  expect(character.calculateAttackModifier()).toBe(0.9);
});
