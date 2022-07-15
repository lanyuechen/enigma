import { useEffect } from 'react';
import Enigma from '@/enigma';

export default () => {
  useEffect(() => {
    const enigma = new Enigma({
      rotors: [
        { define: 'ygxdctravhkjfuqszobinwpmle', cursor: 'a', notch: 'b' },
        { define: 'xwtzvdegrhajymsqfloucbkipn', cursor: 'a', notch: 'b' },
        { define: 'qgsrwnfbekxvotmaczdlipujyh', cursor: 'a', notch: 'b' },
      ],
      reflector: ['pgjiyuzcdewlm', 'xokqvftsnahbr'],
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
