import { Card, Skeleton } from '@chakra-ui/react';
import React from 'react';

const HomeExercisesSkeleton = () => {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <Card key={i} w="250px" h="300px">
          <Skeleton w="100%" h="100%" endColor="gray.100" startColor="white" />
        </Card>
      ))}
    </>
  );
};

export default HomeExercisesSkeleton;
