import {
  Box,
  Img,
  Flex,
  Grid,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { RiInformationLine } from "react-icons/ri";

export default function continentEurope() {
  return (
    <Flex direction="column">
      <Header />

      <Flex
        w="100%"
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgImage="url('/image/europeBanner.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          textAlign={["center", "left"]}
          fontSize={["1.75rem", "5xl"]}
          color="#F5F8FA"
          fontWeight="500"
        >
          Europa
        </Heading>
      </Flex>
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Grid
          templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
          gap={[5, 10, 16, 20]}
          my={["8", "20"]}
        >
          <Text
            fontSize={["lg", "xl", "xl", "2xl"]}
            textAlign="justify"
            color="dark.600"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex align="center" justify="space-between">
            <Flex
              direction="column"
              justify="center"
              align={["flex-start", "flex-start", "center"]}
            >
              <Heading
                fontSize={["2xl", "5xl"]}
                color="highlight.highlight"
                fontWeight="500"
              >
                50
              </Heading>
              <Text fontWeight="500" fontSize={["md", "xl"]} color="dark.600">
                países
              </Text>
            </Flex>
            <Flex
              direction="column"
              justify="center"
              align={["flex-start", "flex-start", "center"]}
            >
              <Heading
                fontSize={["2xl", "5xl"]}
                color="highlight.highlight"
                fontWeight="500"
              >
                60
              </Heading>
              <Text fontWeight="500" fontSize={["md", "xl"]} color="dark.600">
                líguas
              </Text>
            </Flex>
            <Flex
              direction="column"
              justify="center"
              align={["flex-start", "flex-start", "center"]}
            >
              <Heading
                fontSize={["2xl", "5xl"]}
                color="highlight.highlight"
                fontWeight="500"
              >
                27
              </Heading>
              <Text fontWeight="500" fontSize={["md", "xl"]} color="dark.600">
                cidades +100
                <Popover>
                  <PopoverTrigger>
                    <span>
                      <Icon
                        cursor="pointer"
                        as={RiInformationLine}
                        ml="1"
                        color="gray.400"
                        w={["10px", "16px"]}
                        h={["10px", "16px"]}
                      />
                    </span>
                  </PopoverTrigger>
                  <PopoverContent bg="dark.600" color="highlight.highlight">
                    <PopoverArrow bg="dark.600" />
                    <PopoverCloseButton />
                    <PopoverBody fontWeight="400" fontSize="lg">
                      Paris, Londres, Roma, Milão, Praga, Lisboa, Barcelona,
                      Madrid, Berlim,{" "}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Text>
            </Flex>
          </Flex>
          </Grid>
          <Heading
            color="dark.600"
            fontWeight="500"
            fontSize={["2xl", "4xl"]}
            mb={["32px", "32px", "80px", "80px"]}
          >
            Cidades +100
          </Heading>
          <Grid
            templateColumns={[
              "1fr",
              "1fr 1fr",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={["20px", "45px"]}
            alignItems="center"
            justifyContent="center"
            px={["30px", "0"]}
          >
            <Box borderRadius="4px" overflow="hidden">
              <Img src="/image/londres.svg" h="170px" w="100%" />
              <Flex
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
              >
                <Flex direction="column">
                  <Heading fontSize="xl" fontWeight="500" color="dark.600">
                    Londres
                  </Heading>
                  <Text
                    mt="3"
                    fontSize="md"
                    color="light.info"
                    fontWeight="500"
                  >
                    Reino Unido
                  </Text>
                </Flex>
                <Img
                  src="/image/reinoUnido.svg"
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  objectFit="cover"
                />
              </Flex>
            </Box>

            <Box borderRadius="4px" overflow="hidden">
              <Img src="/image/paris.svg" h="170px" w="100%" />
              <Flex
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
              >
                <Flex direction="column">
                  <Heading fontSize="xl" fontWeight="500" color="dark.600">
                    Paris
                  </Heading>
                  <Text
                    mt="3"
                    fontSize="md"
                    color="light.info"
                    fontWeight="500"
                  >
                    França
                  </Text>
                </Flex>
                <Img
                  src="/image/franca.svg"
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  objectFit="cover"
                />
              </Flex>
            </Box>
            <Box borderRadius="4px" overflow="hidden">
              <Img src="/image/roma.svg" h="170px" w="100%" />
              <Flex
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
              >
                <Flex direction="column">
                  <Heading fontSize="xl" fontWeight="500" color="dark.600">
                    Roma
                  </Heading>
                  <Text
                    mt="3"
                    fontSize="md"
                    color="light.info"
                    fontWeight="500"
                  >
                    Itália
                  </Text>
                </Flex>
                <Img
                  src="/image/italia.svg"
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  objectFit="cover"
                />
              </Flex>
            </Box>
            <Box borderRadius="4px" overflow="hidden">
              <Img src="/image/praga.svg" h="170px" w="100%" />
              <Flex
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
              >
                <Flex direction="column">
                  <Heading fontSize="xl" fontWeight="500" color="dark.600">
                    Praga
                  </Heading>
                  <Text
                    mt="3"
                    fontSize="md"
                    color="light.info"
                    fontWeight="500"
                  >
                    República Tcheca
                  </Text>
                </Flex>
                <Img
                  src="/image/republicaTcheca.svg"
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  objectFit="cover"
                />
              </Flex>
            </Box>
            <Box borderRadius="4px" overflow="hidden">
              <Img src="/image/amsterda.svg" h="170px" w="100%" />
              <Flex
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
              >
                <Flex direction="column">
                  <Heading fontSize="xl" fontWeight="500" color="dark.600">
                    Amsterdã
                  </Heading>
                  <Text
                    mt="3"
                    fontSize="md"
                    color="light.info"
                    fontWeight="500"
                  >
                    Holanda
                  </Text>
                </Flex>
                <Img
                  src="/image/holanda.svg"
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  objectFit="cover"
                />
              </Flex>
            </Box>
          </Grid>
      </Flex>
    </Flex>
  );
}
