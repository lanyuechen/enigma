import Rotors from './Rotors';
import Plugboard from './Plugboard';

export default class Enigma {
  /**
   * @param {any[]} config.rotors 转子设置
   * @param {string[]} config.reflector 反射器设置
   * @param {string[]} config.plugboard 设置插线板
   */
  constructor(config) {
    const { rotors, reflector, plugboard } = config;

    this.rotors = new Rotors(rotors, reflector);
    this.plugboard = new Plugboard(plugboard);
  }

  transfer(letter) {
    letter = this.plugboard.transfer(letter);
    letter = this.rotors.transfer(letter);
    letter = this.plugboard.transfer(letter);

    return letter;
  }
}