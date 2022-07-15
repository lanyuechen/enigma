export default () => {
  return (
    <div className="lampboard">
      {'QWERTZUIO'.split('').map(letter => (
        <div key={letter} className="light">
          {letter}
        </div>
      ))}
      <div style={{clear: 'left'}} />
      {'ASDFGHJK'.split('').map(letter => (
        <div key={letter} className="light">
          {letter}
        </div>
      ))}
      <div style={{clear: 'left'}} />
      {'PYXCVBNML'.split('').map(letter => (
        <div key={letter} className="light">
          {letter}
        </div>
      ))}
    </div>
  );
};
