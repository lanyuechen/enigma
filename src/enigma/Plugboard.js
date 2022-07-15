export default class Plugboard {
  constructor(mapping) {
    this.mapping = {};
    if (mapping && mapping[0]) {
      for (let i = 0; i < mapping[0].length; i++) {
        this.mapping[mapping[0][i]] = mapping[1][i];
        this.mapping[mapping[1][i]] = mapping[0][i];
      }
    }
  }

  transfer(letter) {
    return this.mapping[letter] || letter;
  }
}