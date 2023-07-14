import SaleCard from "@/components/Card/SaleCard/SaleCard";
import Container from "@/components/container/Container";
import Navbar from "@/components/navbar/Navbar";
import Subtitle from "@/components/tipography/subtitle/Subtitle";
import Head from "next/head";

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
          <div>
            <Subtitle>Promoções</Subtitle>
            <div>
              <SaleCard />
            </div>
          </div>
          <div>
            <Subtitle>Outros Jogos</Subtitle>
          </div>
        </Container>
      </div>
    </>
  );
}
/**
 * dentro de pages todos los archivos que no tengan_ van a ser rutas
 */
