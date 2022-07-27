import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { GridTravel } from "../components/GridTravel";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
        <Header />
        <Banner />
        <GridTravel />
        <Carousel />
    </>
  );
}
