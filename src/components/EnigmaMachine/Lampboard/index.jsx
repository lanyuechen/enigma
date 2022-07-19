import './style.less';

export default (props) => {
  const { active } = props;
  
  const renderKeys = (keys) => {
    return [...keys].map(letter => (
      <div
        key={letter}
        className={`lamp ${letter === active.toUpperCase() ? 'lampOn' : ''}`}
      >
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
