import SaleCard from "@/components/Card/saleCard/SaleCard";
import styles from "./Cards.module.css";

export default function Cards() {
  const sales = [
    { image: "league-of-legends.jpg", discount: 25, fullPrice: 100, price: 75 },
    { image: "dota-2.jpg", discount: 30, fullPrice: 150, price: 100 },
    { image: "valorant.jpg", discount: 10, fullPrice: 200, price: 180 },
  ];
  const games = [{}];
  return (
    <>
      {sales.map((e) => (
        <SaleCard image={e.image} />
      ))}
    </>
  );
}
