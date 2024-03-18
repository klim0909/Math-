const Character = require('./character');

class Magician extends Character {
  constructor(baseAttack) {
    super(baseAttack);
    this.stoned = false;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    return this.baseAttack;
  }

  calculateAttackModifier() {
    let modifier = super.calculateAttackModifier();
    if (this.stoned) {
      modifier -= Math.log2(this.distance) * 5 / 100;
    }
    return modifier;
  }
}

module.exports = Magician;
