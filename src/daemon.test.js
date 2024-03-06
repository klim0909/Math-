const Daemon = require('../src/daemon');

test('calculateAttackModifier calculates correct modifier for stoned daemon', () => {
  const daemon = new Daemon(120);
  daemon.setDistance(5);
  daemon.stoned = true;
  const attackModifier = daemon.calculateAttackModifier();
  console.log("Actual Attack Modifier for stoned Daemon:", attackModifier);
});
