import { Flex, Heading, Img } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      justifyContent="center"
      bgImage="url('/image/BackgroundBanner.svg')"
      bgSize="cover"
      w="100%"
      h="335px"
    >
      <Flex w="1440px" justify="space-between" margin="0 auto">
        <Flex direction="column" flex="1">
          <Heading mt="80px" ml="140px" size="lg" fontWeight="500">
            5 Continentes, infinita
            <br /> possibilidades.
          </Heading>
          <Heading mt="20px" ml="140px" size="small" fontWeight="400">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Heading>
        </Flex>

        <Flex>
          <Img
            mr="197.25px"
            src="/image/Airplane.svg"
            mb="-190px"
            display={["none", "block"]}
            w="350px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
