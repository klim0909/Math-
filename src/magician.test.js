const Magician = require('../characters/magician');

test('calculateAttackModifier for Magician class with stoned = true', () => {
  const magician = new Magician(100);
  magician.setDistance(2);
  magician.stoned = true;
  expect(magician.calculateAttackModifier()).toBe(0.85);
});
