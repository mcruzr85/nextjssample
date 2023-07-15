import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" width={60} height={60} />
      <h1 className={styles.logoname}>DevSteam</h1>
    </div>
  );
}
