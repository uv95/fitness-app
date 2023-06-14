import { Card, CardBody, Flex, Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

const ExerciseInfoSkeleton = () => {
  return (
    <Card w="1030px" maxW="1030px" margin="0 auto 30px auto" h="340px">
      <CardBody>
        <Flex justifyContent="space-between" h="100%">
          <Skeleton
            h="300px"
            w="300px"
            endColor="gray.100"
            startColor="white"
          />
          <Stack gap="5px" w="60%">
            <Skeleton
              w="300px"
              h="43px"
              endColor="gray.100"
              startColor="white"
            />
            <Skeleton
              w="100%"
              h="120px"
              endColor="gray.100"
              startColor="white"
            />
            <Flex gap="15px" mt="auto !important">
              {[1, 2, 3].map((num) => (
                <Skeleton
                  key={num}
                  w="70px"
                  h="25px"
                  borderRadius="20px"
                  endColor="gray.100"
                  startColor="white"
                />
              ))}
            </Flex>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ExerciseInfoSkeleton;
