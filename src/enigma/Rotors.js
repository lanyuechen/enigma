import Rotor from './Rotor';
import Reflector from './Reflector';

export default class Rotors {
  constructor(rotors, reflector) {
    this.rotors = rotors.map(rotor => {
      if (rotor instanceof Rotor) {
        return rotor;
      }
      return new Rotor(rotor);
    });

    this.reflector = reflector instanceof Reflector ? reflector : new Reflector(reflector);
  }

  transfer(letter) {
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