const Character = require('./character');

class Daemon extends Character {
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

  calculateAttackModifier() {
    let modifier = super.calculateAttackModifier();
    if (this.stoned) {
      modifier -= Math.log2(this.distance) * 0.05; // Изменяем эту строку
    }
    return modifier;
  }
}

module.exports = Daemon;
