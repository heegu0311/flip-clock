import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Digit = ({ digit }) => {
  const prevDigit = digit - 1 > 0 ? digit - 1 : 9;
  const [state, setState] = useState(false);
  const [lower, setLower] = useState(prevDigit);
  const [upper, setUpper] = useState(prevDigit);
  const [flip, setFlip] = useState(prevDigit);
  const container = useRef(null);

  useGSAP(
    async () => {
      setUpper(digit);

      await gsap.fromTo(
        ".upper.flip",
        { rotateX: 0 },
        {
          rotateX: -90,
          duration: 0.35,
          repeat: 0,
          ease: "linear",
        },
      );
      setState(true);
      setFlip(digit);
      await gsap.fromTo(
        ".lower.flip",
        { rotateX: -90 },
        { rotateX: 0, duration: 0.35, repeat: 0, ease: "linear" },
      );
      setState(false);
      setLower(digit);
    },
    { scope: container, dependencies: [digit] },
  );

  return (
    <div ref={container} className="num">
      <div className="upper">
        <div>
          <span>{upper}</span>
        </div>
      </div>
      <div className="upper flip">
        <div>
          <span>{flip}</span>
        </div>
      </div>
      <div className="lower flip" style={{ display: state ? "block" : "none" }}>
        <div>
          <span>{flip}</span>
        </div>
      </div>
      <div className="lower">
        <div>
          <span>{lower}</span>
        </div>
      </div>
    </div>
  );
};

export default Digit;
