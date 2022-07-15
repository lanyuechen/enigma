export default () => {
  return (
    <div className="keyboard">
      {'QWERTZUIO'.split('').map(letter => (
        <div key={letter} className="key">
          {letter}
        </div>
      ))}
      <div style={{clear: 'left'}} />
      <div style={{marginLeft: '48px'}}>
        {'ASDFGHJK'.split('').map(letter => (
          <div key={letter} className="key">
            {letter}
          </div>
        ))}
      </div>
      <div style={{clear: 'left'}} />
      {'PYXCVBNML'.split('').map(letter => (
        <div key={letter} className="key">
          {letter}
        </div>
      ))}
    </div>
  );
};
