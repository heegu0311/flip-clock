import React, { useRef, useState } from "react";

const Digit = ({ digit }) => {
  const prevDigit = digit - 1 > 0 ? digit - 1 : 9;
  const [state, setState] = useState(false);
  const [lower, setLower] = useState(prevDigit);
  const [upper, setUpper] = useState(prevDigit);
  const [flip, setFlip] = useState(prevDigit);
  const container = useRef(null);

  return (
    <div ref={container} className="num">
      <div className="upper">
        <div>
          <span>{digit}</span>
        </div>
      </div>
      <div className="upper flip">
        <div>
          <span>{digit}</span>
        </div>
      </div>
      <div className="lower flip" style={{ display: state ? "block" : "none" }}>
        <div>
          <span>{digit}</span>
        </div>
      </div>
      <div className="lower">
        <div>
          <span>{digit}</span>
        </div>
      </div>
    </div>
  );
};

export default Digit;
