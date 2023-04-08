import { makeCamelCase } from '@/utils/makeCamelCase';
import { IExercise } from '@/utils/types';
import {
  Badge,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type Props = { exercise: IExercise };

const ExerciseInfo = ({ exercise }: Props) => {
  return (
    <Card w="1030px" maxW="1030px" margin="0 auto 30px auto" h="340px">
      <CardBody>
        <Flex justifyContent="space-between" h="100%">
          <Image
            src={exercise.gifUrl}
            alt="exercise gif"
            width={300}
            height={300}
          />
          <Stack gap="5px" w="60%">
            <Heading>{makeCamelCase(exercise.name)}</Heading>
            <Text fontSize="20px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              voluptatem non adipisci deserunt reiciendis unde eveniet, beatae
              asperiores autem nulla accusantium, nesciunt fugiat quidem
              temporibus suscipit, maiores eius id voluptas.
            </Text>
            <Flex gap="15px" mt="auto !important">
              <Badge
                borderRadius="20px"
                p="2px 10px"
                fontSize="15px"
                colorScheme="yellow"
              >
                {makeCamelCase(exercise.bodyPart)}
              </Badge>
              <Badge
                borderRadius="20px"
                p="2px 10px"
                fontSize="15px"
                colorScheme="pink"
              >
                {makeCamelCase(exercise.target)}
              </Badge>
              <Badge
                borderRadius="20px"
                p="2px 10px"
                fontSize="15px"
                colorScheme="blue"
              >
                {makeCamelCase(exercise.equipment)}
              </Badge>
            </Flex>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ExerciseInfo;
