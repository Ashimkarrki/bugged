import { React, useState, useEffect } from "react";
import q1 from "./photos/q2.png";
const Card = ({
  s,
  id,
  prev,
  setPrev,
  isSame,
  setIsSame,
  clicked,
  setClicked,
}) => {
  const [turn, setTurn] = useState(false);
  const [isIntial, setIsInitial] = useState(true);
  const turnThings = () => {
    console.log(clicked);
    if (!prev) {
      setIsInitial(false);
      setPrev(id);
      setTurn((prev) => true);
    } else {
      if (prev === id) {
        setTurn(true);
        setPrev();
        setIsInitial(false);
        setClicked((prev) => 0);
      } else {
        setTurn((prev) => true);
        setIsInitial(false);
        setIsSame(!isSame);
        setTimeout(() => setTurn((prev) => false), 1600);
      }
    }
  };
  useEffect(() => {
    console.log("effect");
    if (prev === id) {
      setPrev();
      setTimeout(() => setTurn((prev) => false), 1600);
      setClicked((prev) => 0);
    }
  }, [isSame]);

  return (
    <div
      className={`image__container  ${turn ? "image__container--turnup" : ""} ${
        !turn && !isIntial ? "image__container--turndown" : ""
      }`}
      onClick={() => {
        turnThings();
      }}
    >
      <img className="image image--front" src={q1} alt="an_image" />
      <img className="image image--back" src={s} alt="an_image" />
    </div>
  );
};

export default Card;
