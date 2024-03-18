const Daemon = require('../characters/daemon');

test('calculateAttackModifier for Daemon class with stoned = true', () => {
  const daemon = new Daemon(100);
  daemon.setDistance(2);
  daemon.stoned = true;
  expect(daemon.calculateAttackModifier()).toBe(0.95);
});
