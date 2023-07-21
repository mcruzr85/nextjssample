import Head from "next/head";
import { useRecoilState } from "recoil";

import SaleCard from "@/components/Card/saleCard/SaleCard";
import Container from "@/components/container/Container";
import Navbar from "@/components/navbar/Navbar";
import Subtitle from "@/components/tipography/subtitle/Subtitle";
import GameCard from "@/components/Card/gameCard/GameCard";
import { carState } from "@/atoms/Cart";

import styles from "@/styles/index.module.css";

export default function Home() {
  const [cart, setCart] = useRecoilState(carState);

  const handleAddProduct = (product) => {
    setCart([...cart, product]);
  };


  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={"league-of-legends.jpg"}
                discount={25}
                fullPrice={100}
                price={75}
                onAdd={() =>
                  handleAddProduct({
                    image: "league-of-legends.jpg",
                    price: 75,
                  })
                }
              />
              <SaleCard
                image={"dota-2.jpg"}
                discount={30}
                fullPrice={150}
                price={100}
                onAdd={() =>
                  handleAddProduct({ image: "dota-2.jpg", price: 100 })
                }
              />
              <SaleCard
                image={"valorant.jpg"}
                discount={10}
                fullPrice={200}
                price={180}
                onAdd={() =>
                  handleAddProduct({ image: "valorant.jpg", price: 180 })
                }
              />
            </div>
          </div>

          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
/**
 * dentro de pages todos los archivos que no tengan_ van a ser rutas
 */
