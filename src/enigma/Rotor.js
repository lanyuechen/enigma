export default class Rotor {
  constructor(config) {
    this.input = 'abcdefghijklmnopqrstuvwxyz';
    this.index = this.input.indexOf(config.cursor);
    this.notch = config.notch || '';
    this.next = null;

    this.mapping = {};
    this.mappingReverse = {};
    for (let i = 0; i < this.input.length; i++) {
      this.mapping[this.input[i]] = config.define[i];
      this.mappingReverse[config.define[i]] = this.input[i];
    }
  }

  transfer(letter) {
    letter = this.mapping[letter];
    letter = this.input[(this.input.indexOf(letter) + this.index) % 26];
    return letter;
  }

  transferReverse(letter) {
    letter = this.input[(this.input.indexOf(letter) - this.index + 26) % 26];
    letter = this.mappingReverse[letter];
    return letter;
  }

  step() {
    if (this.notch.includes(this.input[this.index]) && this.next) {
      this.next.step();
    }
    this.index = (this.index + 1) % 26;
  }
}
