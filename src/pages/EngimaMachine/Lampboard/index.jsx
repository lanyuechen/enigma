import './style.less';

export default () => {
  
  const renderKeys = (keys) => {
    return [...keys].map(letter => (
      <div key={letter} className="lamp">
        {letter}
      </div>
    ));
  }

  return (
    <div className="lampboard">
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
