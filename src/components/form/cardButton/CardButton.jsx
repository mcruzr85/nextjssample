import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import CartMenu from "@/components/cartMenu/CartMenu";
import styles from "./CardButton.module.css";

export default function CardButton() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <BsCart4
        className={styles.caricon}
        size={40}
        onClick={() => setOpen(!open)}
      />
      {open && <CartMenu />}
    </div>
  );
}
