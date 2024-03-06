const Magician = require('../src/magician');

test('calculateAttackModifier calculates correct modifier for stoned magician', () => {
  const magician = new Magician(100);
  magician.setDistance(2);
  magician.stoned = true;
  expect(magician.calculateAttackModifier()).toBe(0.85);
});
