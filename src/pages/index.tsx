import { useEffect } from 'react';
import Enigma from '@/enigma';

export default () => {
  useEffect(() => {
    const enigma = new Enigma({
      rotors: [0, 1, 2],
      plugboard: ['a', 'b'],
    });

    const handleKeyPress = (e: KeyboardEvent) => {
      console.log(`${e.key} -> ${enigma.transfer(e.key)}`);
    }

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    }

  }, []);
  return (
    <div>
      hello
    </div>
  );
}
