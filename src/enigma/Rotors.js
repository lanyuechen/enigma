import Rotor from './Rotor';
import Reflector from './Reflector';

export default class Rotors {
  constructor(rotors, reflector) {
    this.rotors = rotors.map(rotor => new Rotor(rotor));
    this.reflector = new Reflector(reflector);

    for (let i = 0; i < this.rotors.length - 1; i++) {
      this.rotors[i].next = this.rotors[i + 1];
    }
  }

  transfer(letter) {
    this.rotors[0].step();
    for (let i = 0; i < this.rotors.length; i++) {
      letter = this.rotors[i].transfer(letter);
    }
    letter = this.reflector.transfer(letter);
    for (let i = this.rotors.length - 1; i >= 0; i--) {
      letter = this.rotors[i].transferReverse(letter);
    }

    return letter;
  }
}