import { useEffect } from 'react';

import Rotors from './Rotors';
import Keyboard from './Keyboard';
import Lampboard from './Lampboard';
import Plugboard from './Plugboard';

import './style.css';

export default () => {
  return (
    <div className="enigmaWrapper">
      <div className="enigma">
        <Rotors />

        <Lampboard />

        <div className="line" />

        <Keyboard />

        <div className="line" />

        <Plugboard />
      </div>
    </div>
  );
};
