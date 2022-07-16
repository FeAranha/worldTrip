import { Box, Flex, VStack } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';

export function Header() {
    return (
        <VStack>
        <Box>
            <Flex
                as="header"
                w="100%"
                maxWidth={1480}
                h="100"
                mx="auto"
                px="6"
                alignItems="center"
            >
                <Img
                    src='/image/Logo.svg'
                    alt='World Trip'
                />
            </Flex>
        </Box>
        </VStack>
    );
}