import styles from "./Number.module.css";

const Number = (props) => {
  const { text, onClick, selectedNumber } = { ...props };

  return (
    <div
      className={`${styles.container} ${selectedNumber && styles.selected}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Number;
