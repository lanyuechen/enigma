import { useMemo, useState } from 'react';

import Enigma from '@/enigma';

import Rotors from './Rotors';
import Keyboard from './Keyboard';
import Lampboard from './Lampboard';
import Plugboard from './Plugboard';

import './style.css';

export default (props) => {
  const { rotors, plugboard } = props;
  const [lampKey, setLampKey] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const enigma = useMemo(() => new Enigma({ rotors, plugboard }), []);

  const handleKeyDown = (key) => {
    const code = enigma.transfer(key);
    setLampKey(code);
    setInput(input + key);
    setOutput(output + code);
  }

  const handleKeyUp = () => {
    setLampKey('');
  }

  return (
    <div className="enigmaWrapper">
      <div className="enigma">
        <Rotors />

        <Lampboard active={lampKey} />

        <div className="line" />

        <Keyboard
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />

        <div className="line" />

        <Plugboard />
      </div>
    </div>
  );
};
