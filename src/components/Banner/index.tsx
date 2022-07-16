import { Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex w="100%" backgroundImage="url('/image/BackgroundBanner.svg')">
      <Flex w="1080px" justify="space-between" margin="0 auto">
        <Flex p="50px 20px" direction="column" flex="1">
          <Heading paddingBottom="20px">
            5 Continentes, infinitas
            <br /> possibilidades.
          </Heading>
          <Text>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Flex>
          <Img src="/image/Airplane.svg"
          mb="-50px"
          display={['none', 'block']}
          w="350px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
