import styles from "./Button.module.css";
export default function Button({ children, fullWidth, ...props }) {
  return (
    <button
      className={`${styles.salesbutton} ${fullWidth && styles.fullWidth}`}
      {...props}
    >
      {children}
    </button>
  );
}
