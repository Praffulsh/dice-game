import styles from "./StartGame.module.css";

const StartGame = (props) => {
  const {onClick} = { ...props };

  return (
    <div className={styles.container}>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className={styles.content}>
        <h1>DICE GAME</h1>
        <button onClick={onClick}>Play Now</button>
      </div>
    </div>
  );
};

export default StartGame;
