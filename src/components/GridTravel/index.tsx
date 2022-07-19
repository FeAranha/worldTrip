import {
  Flex,
  Grid,
  GridItem,
  Img,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";

export function GridTravel() {
  return (
    <Flex flexDir="column">
      <Flex 
      w="1080px" 
      margin="0 auto">
        <Grid
          //flex-wrap="wrap"
          templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
          w="100%"
          mt={["10", "32"]}
          mx="auto"
          maxW="1440px"
          flexWrap="wrap"
          gap={[1, 5]}
        >
          <GridItem align="center">
            <Img src="/image/cocktail.svg" mb="4" />
            <Text
              fontWeight="600"
              color="gray.700"
              fontSize={["md", "xl", "2xl"]}
            >
              vida noturna
            </Text>
          </GridItem>
          <GridItem align="center">
            <Img src="/image/surf.svg" mb="4" />
            <Text
              fontWeight="600"
              color="gray.700"
              fontSize={["md", "xl", "2xl"]}
            >
              praia
            </Text>
          </GridItem>
          <GridItem align="center">
            <Img src="/image/building.svg" mb="4" />
            <Text
              fontWeight="600"
              color="gray.700"
              fontSize={["md", "xl", "2xl"]}
            >
              moderno
            </Text>
          </GridItem>
          <GridItem align="center">
            <Img src="/image/museum.svg" mb="4" />
            <Text
              fontWeight="600"
              color="gray.700"
              fontSize={["md", "xl", "2xl"]}
            >
              clássico
            </Text>
          </GridItem>
          <GridItem align="center">
            <Img src="/image/earth.svg" mb="4" />
            <Text
              fontWeight="600"
              color="gray.700"
              fontSize={["md", "xl", "2xl"]}
            >
              e mais...
            </Text>
          </GridItem>
        </Grid>
      </Flex>
      <Box
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="#47585B"
        my={["9", "20"]}
      />
      <Flex margin="0 auto">
        <Heading
          //bg="#bbb"
          textColor="#47585B"
          textAlign="center"
          fontWeight="500"
          mb={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Flex>
    </Flex>
  );
}
