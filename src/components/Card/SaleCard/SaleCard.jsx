import Image from "next/image";
import Button from "@/components/form/button/Button";
import styles from "./SaleCard.module.css";

export default function SaleCard({ image }) {
  return (
    <div className={styles.salecard}>
      <Image src={image} width={250} height={300} />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta Exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.discount}>-20%</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>R$99,90</p>
            <h4 className={styles.discountedprice}>R$89,90</h4>
          </div>
        </div>
        <Button fullWidth={true}>Adicionar ao carrinho</Button>
      </div>
    </div>
  );
}
