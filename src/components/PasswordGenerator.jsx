import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllow, setNumbrAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    let pass = "";

    let passString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) passString += "0123456789";
    if (charAllow) passString += "!@#$%^&*()[]<>?/";

    for (let i = 1; i < length; i++) {
      const randNum = Math.floor(Math.random() * passString.length + 1);
      pass += passString.charAt(randNum);
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllow, charAllow]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className="password-wrapper">
      <div className="upper-section">
        <input type="text" value={password} readOnly ref={passwordRef} />
        <button className="copy-button" onClick={copyPassword}>
          Copy
        </button>
      </div>
      <div className="lower-section">
        <div className="length-section">
          <input
            type="range"
            name=""
            id="length"
            min={1}
            max={100}
            onChange={(e) => setLength(e.target.value)}
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
            onChange={() => setNumbrAllow((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="char-section">
          <input
            type="checkbox"
            id="char"
            name="char"
            defaultChecked={charAllow}
            onChange={() => setCharAllow((prev) => !prev)}
          />
          <label htmlFor="char">Character</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
