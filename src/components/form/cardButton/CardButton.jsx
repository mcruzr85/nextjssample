import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useRecoilState } from "recoil";

import { cartState } from "@/atoms/Cart";
import CartMenu from "@/components/cartMenu/CartMenu";
import styles from "./CardButton.module.css";

export default function CardButton() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <div>
      <BsCart4
        className={styles.caricon}
        size={40}
        onClick={() => setOpen(!open)}
      />
      
        {cart.length ? <div className={styles.quantity}><p>{cart.length}</p></div> : null}
      
      {open && <CartMenu />}
    </div>
  );
}
