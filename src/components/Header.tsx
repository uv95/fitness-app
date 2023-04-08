import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <Box bg="gray.900" color="white" h="50px">
      <Flex
        alignItems="center"
        h="100%"
        w="90%"
        m="0 auto"
        fontSize="20px"
        fontWeight="bold"
      >
        <Link href="/" passHref>
          Fitness App
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
