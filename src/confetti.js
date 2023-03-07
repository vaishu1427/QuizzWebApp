import "./confettistyle.css";
import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";

export default function Createconfetti() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    
      <div className="confettie-wrap" ref={confetiRef}>
        <Confetti numberOfPieces={150} width={width} height={height} />
      </div>
  );
}
