import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import github from '../assets/icons/github.svg';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" h="50px" mt="20px">
      <Flex alignItems="center" h="100%" w="90%" m="0 auto" fontSize="12px">
        <Text>Built with Next.js and Chakra-UI</Text>
        <Spacer />
        <Link href="https://github.com/uv95" passHref>
          <Flex gap="5px">
            <Image src={github} alt="github" width={17} height={17} />
            Github
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
