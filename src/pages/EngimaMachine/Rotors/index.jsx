import './style.less';

export default () => {
  return (
    <div className="rotors">
      <div className="rotor">
        <div className="letter nextLetter">B</div>
        <div className="letter currentLetter">A</div>
        <div className="letter previousLetter">Z</div>
      </div>
      <div className="rotor" id="rotor2">
        <div className="letter nextLetter">B</div>
        <div className="letter currentLetter">A</div>
        <div className="letter previousLetter">Z</div>
      </div>
      <div className="rotor" id="rotor3">
        <div className="letter nextLetter">B</div>
        <div className="letter currentLetter">A</div>
        <div className="letter previousLetter">Z</div>
      </div>
    </div>
  );
};
