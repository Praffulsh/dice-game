import styles from "./NumberSelector.module.css";

import Number from "../Number/Number";

const NumberSelector = (props) => {
  const { selectedNumber, handleClick, error } = { ...props };
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <p className={styles.errorMsg}>{error}</p>
      <div className={styles.container}>
        {numbers.map((value, index) => (
          <Number
            selectedNumber={selectedNumber === value}
            onClick={() => handleClick(value)}
            key={index}
            text={value}
          />
        ))}
      </div>
      <p className={styles.text}>Select Number</p>
    </>
  );
};

export default NumberSelector;
