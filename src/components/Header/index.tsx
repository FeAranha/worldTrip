import { Flex, Grid, Icon, Img } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h={["50px", "100px"]}
      mx="auto"
      px="1rem"
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                color="#47585B"
                as={ChevronLeftIcon}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Img
          w={["81px", "184px"]}
          src="/image/Logo.svg"
          alt="Logo world trip, um avião passando por baixo de world e subindo em meio ao Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
