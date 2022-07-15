import Rotors from './Rotors';
import Rotor from './Rotor';

import { rotorMappings } from './config';

const rotorsCandidate = rotorMappings.map(mapping => new Rotor(mapping));

export default class Enigma {
  /**
   * @param {number[]} config.rotors 选择转子及顺序(5选3)，eg: [0, 3, 2]
   */
  constructor(config) {
    const { rotors } = config;

    this.rotors = new Rotors(rotors.map(i => rotorsCandidate[i]));
  }
}