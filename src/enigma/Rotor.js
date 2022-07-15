export default class Rotor {
  constructor(mapping) {
    this.mapping = {};
    this.mappingReverse = {};
    for (let i = 0; i < mapping[0].length; i++) {
      this.mapping[mapping[0][i]] = mapping[1][i];
      this.mappingReverse[mapping[1][i]] = mapping[0][i];
    }
  }

  transfer(letter) {
    return this.mapping[letter];
  }

  transferReverse(letter) {
    return this.mappingReverse[letter];
  }
}
