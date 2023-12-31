import Image from "next/image";
import Button from "@/components/form/button/Button";
import { getName } from "@/utils/utils";
import styles from "./GameCard.module.css";

export default function GameCard({ onAdd }) {
  return (
    <div className={styles.gamecard}>
      <Image
        className={styles.image}
        alt="counter strike"
        src="/products/counter-strike.jpg"
        width={300}
        height={145}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>counter strike: Global offensive</h3>
        <p className={styles.category}>Ação, Estratégia, Multijogador.</p>
        <div className={styles.pricecontainer}>
          <h2 className={styles.price}>R$99,90</h2>
          <Button onClick={ onAdd }>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
}
