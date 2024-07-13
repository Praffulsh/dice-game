import styles from "./DiceRoll.module.css";

const DiceRoll = (props) => {
  const { rollDice, currentDice } = { ...props };

  return (
    <div className={styles.container}>
      <div className={styles.dice} onClick={rollDice}>
        <img
          src={`/images/dices/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default DiceRoll;
