import Rotor from './Rotor';

export default class Rotors {
  constructor(rotors) {
    this.rotors = rotors.map(rotor => {
      if (rotor instanceof Rotor) {
        return rotor;
      }
      return new Rotor(rotor);
    });
  }

  transfer(letter) {
    for (let rotor of this.rotors) {
      letter = rotor.transfer(letter);
    }
    return letter;
  }
}