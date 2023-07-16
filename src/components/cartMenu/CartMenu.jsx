import CartOption from "@/components/cartOption/CartOption";
import Button from "@/components/form/button/Button";
import styles from "./CartMenu.module.css";


export default function CartMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        <CartOption />
        <CartOption />
        <CartOption />
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>R$45,99</h2>
      </div>
      <Button fullWidth> Finalizar compra</Button>
    </div>
  );
}
