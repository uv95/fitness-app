import { IExercise } from '@/utils/types';
import { Card, Container, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type Props = { exercise: IExercise };

const ExerciseCard = ({ exercise }: Props) => {
  return (
    <Card alignItems="center" p="5px" w="250px" h="300px">
      <>
        <Image src={exercise.gifUrl} alt="exercise" width={140} height={140} />
        <Container>
          <Heading size="sm">
            {exercise.name
              .split(' ')
              .map((word) => word && word[0].toUpperCase() + word.slice(1))
              .join(' ')}
          </Heading>

          <Text>
            <strong>Body part:</strong> {exercise.bodyPart}
          </Text>
          <Text>
            <strong>Muscle:</strong> {exercise.target}
          </Text>
          <Text>
            <strong>Equipment:</strong> {exercise.equipment}
          </Text>
        </Container>
      </>
    </Card>
  );
};

export default ExerciseCard;
