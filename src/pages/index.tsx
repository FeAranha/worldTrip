import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Grid, GridItem, Heading, Img } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <Flex w="100%" alignItems ="center">
        <Flex w="1080px" margin="0 auto">
          <Grid templateColumns="repeat(5, 1fr)" color="#ccc" gap="10px">
            <GridItem bg="#ccc">
              <Img src="/image/cocktail.svg" />
            </GridItem>
            <GridItem bg="#ccc">
              <Img src="/image/surf.svg" />
            </GridItem>
            <GridItem bg="#ccc">
              <Img src="/image/building.svg" />
            </GridItem>
            <GridItem bg="#ccc">
              <Img src="/image/museum.svg" />
            </GridItem>
            <GridItem bg="#ccc">
              <Img src="/image/earth.svg" />
            </GridItem>
          </Grid>
        </Flex>
        <Flex>
          <Heading 
          color="#ccc"
          >Vamos nessa?<br/>Então escolha seu continente</Heading>
        </Flex>
      </Flex>
      <ChevronLeftIcon color="highlight.highlight" />
    </>
  );
}
