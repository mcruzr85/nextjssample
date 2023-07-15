import SaleCard from "@/components/Card/saleCard/SaleCard";
import Container from "@/components/container/Container";
import Navbar from "@/components/navbar/Navbar";
import Subtitle from "@/components/tipography/subtitle/Subtitle";
import Head from "next/head";
import styles from "@/styles/index.module.css";
import GameCard from "@/components/Card/gameCard/GameCard";

export default function Home() {
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
              <SaleCard />
              <SaleCard />
              <SaleCard />
            </div>
          </div>

          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div>
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
