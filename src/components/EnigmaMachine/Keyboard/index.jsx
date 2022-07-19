import { useEffect, useState, useRef } from 'react';

import './style.less';

export default (props) => {
  const { onKeyDown, onKeyUp } = props;
  const [activeKey, setActiveKey] = useState('');
  const store = useRef({ activeKey }).current;

  useEffect(() => {
    if (activeKey) {
      onKeyDown?.(activeKey);
    } else {
      onKeyUp?.(store.activeKey);
    }
    store.activeKey = activeKey;
  }, [activeKey]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setActiveKey(e.key);
    };

    const handleKeyUp = () => {
      setActiveKey('');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, []);

  const renderKeys = (keys) => {
    return [...keys].map(letter => (
      <div
        key={letter}
        className={`key ${letter === activeKey.toUpperCase() ? 'keyOn' : ''}`}
        onMouseDown={() => setActiveKey(letter)}
        onMouseUp={() => setActiveKey('')}
      >
        {letter}
      </div>
    ));
  }

  return (
    <div className="keyboard">
      <div>
        {renderKeys('QWERTZUIO')}
      </div>
      <div>
        {renderKeys('ASDFGHJK')}
      </div>
      <div>
        {renderKeys('PYXCVBNML')}
      </div>
    </div>
  );
};
