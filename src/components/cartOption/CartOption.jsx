import Image from "next/image";
import { getName } from "@/utils/utils";
import styles from "./CartOption.module.css";

export default function CartOption({ image, price, onRemove }) {
  return (
    <div className={styles.option}>
      <Image
        className={styles.image}
        src={`/products/${image}`}
        alt={getName(image)}
        width={62}
        height={74}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{getName(image)}</h3>
        <h3 className={styles.price}>{`R$${price}`}</h3>
        <p className={styles.remover} onClick={onRemove}>
          Remover
        </p>
      </div>
    </div>
  );
}

CartOption.defaultProps = {
  image: "dota-2.jpg",
  price: 25,
};
