import { useState } from "react";
import "./App.css";
import PlayGame from "./components/PlayGame/PlayGame";
import StartGame from "./components/StartGame/StartGame";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const gameStart = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>
      {gameStarted == true ? <PlayGame /> : <StartGame onClick={gameStart} />}
    </>
  );
}

export default App;
