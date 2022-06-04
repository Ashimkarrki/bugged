import "./main.css";
import luffy from "./photos/luffy.png";
import luffy2 from "./photos/luffy2.png";
import brook from "./photos/brook.png";
import db from "./photos/db.png";
import potato from "./photos/potato.png";
import sakura from "./photos/sakura.png";
import saiki from "./photos/saiki.png";
import baldy from "./photos/baldy.png";
import { React, useState } from "react";
import Card from "./Card";
function App() {
  const randomShuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let randomDigit = Math.ceil(Math.random() * 7);
      let temp = arr[randomDigit];
      arr[randomDigit] = arr[i];
      arr[i] = temp;
    }
    return arr;
  };
  function fetchImage() {
    let random = [...cards];
    for (let i = 0; i < 8; i++) {
      random.push(random[i]);
    }
    setUsing(randomShuffle(random));
  }
  const [cards, setCards] = useState([
    luffy,
    luffy2,
    brook,
    db,
    potato,
    sakura,
    saiki,
    baldy,
  ]);
  const [using, setUsing] = useState([]);
  const [prev, setPrev] = useState();
  const [isSame, setIsSame] = useState(true);
  const [newGame, setNewGame] = useState(false);
  const [clicked, setClicked] = useState(0);

  return (
    <div className="app">
      {newGame && (
        <div className="field">
          {using?.map((s, i) => {
            return (
              <Card
                key={i}
                s={s}
                id={s}
                prev={prev}
                setPrev={setPrev}
                isSame={isSame}
                setIsSame={setIsSame}
                clicked={clicked}
                setClicked={setClicked}
              />
            );
          })}
        </div>
      )}
      <button
        className="newgame"
        onClick={() => {
          fetchImage();
          setNewGame(!newGame);
          setPrev();
          setIsSame(true);
        }}
      >
        {!newGame ? " New Game" : "Quit"}
      </button>
    </div>
  );
}

export default App;
