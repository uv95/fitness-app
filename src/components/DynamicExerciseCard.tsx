import { Card, Skeleton } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

export const DynamicExerciseCard = dynamic(() => import('./ExerciseCard'), {
  loading: () => (
    <Card w="250px" h="300px">
      <Skeleton w="100%" h="100%" endColor="gray.100" startColor="white" />
    </Card>
  ),
});
