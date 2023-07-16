import { BsCart4 } from "react-icons/bs";
import Logo from "@/components/logo/Logo";
import Input from "@/components/form/input/Input";
import CardButton from "@/components/form/cardButton/CardButton";
//API do OpenWeatherMap
//https://miro.com/app/board/o9J_l10llhU=/
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.searchcontainer}>
        <Input type="text" placeholder="Buscar" fullWidth />
      </div>

      <CardButton />
    </nav>
  );
}

//export default porque está solo este componente a ser exportado dentro del archivo
