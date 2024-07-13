import styles from "./Button.module.css";

const Button = (props) => {
  const { text, outline, onClick } = { ...props };
  return (
    <div>
      <button onClick={onClick} className={outline && styles.outline}>
        {text}
      </button>
    </div>
  );
};

export default Button;
