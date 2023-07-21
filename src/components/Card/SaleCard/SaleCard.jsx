import Image from "next/image";
import Button from "@/components/form/button/Button";
import { getName } from "@/utils/utils";
import styles from "./SaleCard.module.css";

export default function SaleCard({ image, discount, fullPrice, price, onAdd }) {
  return (
    <div className={styles.salecard}>
      <Image
        src={`/products/${image}`}
        alt={getName(image)}
        width={250}
        height={300}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta Exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.discount}>{`-${discount}%`}</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>{`R$${fullPrice}`}</p>
            <h4 className={styles.discountedprice}>{`R$${price}`}</h4>
          </div>
        </div>
        <Button fullWidth={true} onClick={onAdd}>
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
}

SaleCard.defaultProps = {
  image: "league-of-legends.jpg",
  discount: 25,
  fullPrice: 100,
  price: 75,
};
