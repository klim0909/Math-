class Character {
  constructor(baseAttack) {
    this.baseAttack = baseAttack;
    this.distance = 0;
  }

  setDistance(distance) {
    this.distance = distance;
  }

  getAttack() {
    return this.baseAttack * this.calculateAttackModifier();
  }

  calculateAttackModifier() {
    return 1 - (this.distance - 1) * 0.1;
  }
}

module.exports = Character;