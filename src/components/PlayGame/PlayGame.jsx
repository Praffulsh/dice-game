import { useState } from "react";
import DiceRoll from "../DiceRoll/DiceRoll";
import NumberSelector from "../NumberSelector/NumberSelector";
import styles from "./PlayGame.module.css";
import Button from "../Button/Button";
import Rules from "../Rules/Rules";

const PlayGame = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(4);
  const [error, setError] = useState("");
  const [displayRules, setDisplayRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    setSelectedNumber();

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const handleClick = (value) => {
    setError("");
    setSelectedNumber(value);
  };

  const resetScore = () => {
    setCurrentDice(1);
    setScore(0);
    setSelectedNumber();
    setError("");
  };

  const showRules = () => {
    setDisplayRules((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.scoreContainer}>
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div>
          <NumberSelector
            handleClick={handleClick}
            selectedNumber={selectedNumber}
            error={error}
          />
        </div>
      </div>
      <DiceRoll rollDice={rollDice} currentDice={currentDice} />
      <div className={styles.btn}>
        <Button outline text="Reset Score" onClick={resetScore} />
        <Button
          text={`${displayRules ? "Hide " : "Show "} Rules`}
          onClick={showRules}
        />
      </div>
      {displayRules && <Rules />}
    </div>
  );
};

export default PlayGame;
