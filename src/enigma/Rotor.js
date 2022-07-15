export default class Rotor {
  constructor(mapping) {
    const input = 'abcdefghigklmnopqrstuvwxyz';
    
    this.mapping = {};
    for (let i = 0; i < input.length; i++) {
      this.mapping[input[i]] = mapping[i];
    }
  }

  transfer(letter) {
    return this.mapping[letter];
  }
}
