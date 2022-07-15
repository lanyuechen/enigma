export default () => {
  return (
    <div className="plugboard">
      {'QWERTZUIO'.split('').map(letter => (
        <div key={letter} className="plug">
          {letter}
        </div>
      ))}
      <div style={{clear: 'left'}} />
      {'ASDFGHJK'.split('').map(letter => (
        <div key={letter} className="plug">
          {letter}
        </div>
      ))}
      <div style={{clear: 'left'}} />
      {'PYXCVBNML'.split('').map(letter => (
        <div key={letter} className="plug">
          {letter}
        </div>
      ))}
    </div>
  );
};
