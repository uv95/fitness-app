import { makeCamelCase } from '@/utils/makeCamelCase';
import { IExercise } from '@/utils/types';
import { Badge, Card, Heading, Stack, Wrap } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type Props = { exercise: IExercise };

const ExerciseCard = ({ exercise }: Props) => {
  return (
    <Card alignItems="center" p="10px" w="250px" h="300px">
      <Image src={exercise.gifUrl} alt="exercise" width={140} height={140} />

      <Stack h="100%" p="10px">
        <Heading size="sm">{makeCamelCase(exercise.name)}</Heading>
        <Wrap h="50%" mt="auto !important">
          <Badge
            borderRadius="20px"
            p="2px 10px"
            w="fit-content"
            colorScheme="yellow"
          >
            {makeCamelCase(exercise.bodyPart)}
          </Badge>
          <Badge
            borderRadius="20px"
            p="2px 10px"
            w="fit-content"
            colorScheme="pink"
          >
            {makeCamelCase(exercise.target)}
          </Badge>
          <Badge
            borderRadius="20px"
            p="2px 10px"
            w="fit-content"
            colorScheme="blue"
          >
            {makeCamelCase(exercise.equipment)}
          </Badge>
        </Wrap>
      </Stack>
    </Card>
  );
};

export default ExerciseCard;
