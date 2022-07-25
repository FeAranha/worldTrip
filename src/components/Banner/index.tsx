import { Flex, Heading, Img, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      justifyContent="center"
      bgImage="url('/image/BackgroundBanner.svg')"
      bgSize="cover"
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgRepeat="no-repeat"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Flex direction="column" flex="1">
          <Heading
            color="light.headingsText"
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
            fontWeight="500"
          >
            5 Continentes, <br /> infinita possibilidades.
          </Heading>
          <Text
            color="light.info"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>        
          <Img
            ml="8"
            w={["300px", "300px", "300px", "430px"]}
            display={['none', 'none', 'block']}
            src="/image/Airplane.svg"
            alt="Avião amarelo  e branco voando nas nuvens com um céu estrelado"
            transform="translateY(48px)"
          />        
      </Flex>
    </Flex>
  );
}
