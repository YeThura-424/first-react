import React from "react";
import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllow, setNumbrAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  return (
    <div className="password-wrapper">
      <div className="upper-section">
        <input type="text" value={password} />
        <button className="copy-button">Copy</button>
      </div>
      <div className="lower-section">
        <div className="length-section">
          <input
            type="range"
            name=""
            id="length"
            min={1}
            max={100}
            defaultValue={length}
          />
          <label htmlFor="length">Length : {length} </label>
        </div>
        <div className="number-section">
          <input
            type="checkbox"
            id="number"
            name=""
            defaultChecked={numberAllow}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="char-section">
          <input
            type="checkbox"
            id="char"
            name="char"
            defaultChecked={charAllow}
          />
          <label htmlFor="char">Character</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
