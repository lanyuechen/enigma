import Rotors from './Rotors';
import Rotor from './Rotor';
import Reflector from './Reflector';
import Plugboard from './Plugboard';

import { rotorMappings, reflectorMapping } from './config';

const rotorsCandidate = rotorMappings.map(mapping => new Rotor(mapping));
const reflector = new Reflector(reflectorMapping);

export default class Enigma {
  /**
   * @param {number[]} config.rotors 选择转子及顺序(5选3)，eg: [0, 3, 2]
   * @param {string[]} config.plugboard 设置插线板
   */
  constructor(config) {
    const { rotors, plugboard } = config;

    this.rotors = new Rotors(rotors.map(i => rotorsCandidate[i]), reflector);
    this.plugboard = new Plugboard(plugboard);
  }

  transfer(letter) {
    letter = this.plugboard.transfer(letter);
    letter = this.rotors.transfer(letter);
    letter = this.plugboard.transfer(letter);

    return letter;
  }
}