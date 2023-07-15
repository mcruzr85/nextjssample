import styles from "./Input.module.css";

export default function Input({ fullWidth, ...props }) {
  return (
    <input
      className={`${styles.input} ${fullWidth && styles.fullWidth} `}
      {...props}
    />
  );
}
