import { useRecoilState } from "recoil";

import { carState } from "@/atoms/Cart";

import CartOption from "@/components/cartOption/CartOption";
import Button from "@/components/form/button/Button";

import styles from "./CartMenu.module.css";

export default function CartMenu() {
  const [cart, setCart] = useRecoilState(carState);

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((e, index) => index !== pos));
  };

  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {!cart.length ? (
          <p>Nehum produto no seu carrinho</p>
        ) : (
          cart.map((e, pos) => (
            <CartOption
              key={`cart-${pos}`}
              image={e.image}
              price={e.price}
              onRemove={() => handleRemoveProduct(pos)}
            />
          ))
        )}
      </div>

      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>
          R${cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}
        </h2>
      </div>
      <Button fullWidth> Finalizar compra</Button>
    </div>
  );
}
