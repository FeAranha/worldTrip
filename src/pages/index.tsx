import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { GridTravel } from "../components/GridTravel";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      {/* <Flex direction="column"> */}
        <Header />
        <Banner />
        <GridTravel />
        <Carousel />
      {/* </Flex> */}
    </>
  );
}
