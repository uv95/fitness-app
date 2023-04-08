import { makeCamelCase } from '@/utils/makeCamelCase';
import { IExercise } from '@/utils/types';
import { Badge, Card, Heading, Stack, Wrap } from '@chakra-ui/react';
import Image from 'next/image';
import style from '../styles/ExerciseCard.module.css';

type Props = { exercise: IExercise };

const ExerciseCard = ({ exercise }: Props) => {
  return (
    <Card
      alignItems="center"
      p={{ md: '10px', base: '5px' }}
      w={{ md: '250px', base: '200px' }}
      h={{ md: '300px', base: '260px' }}
    >
      <div className={style.image}>
        <Image src={exercise.gifUrl} alt="exercise" width={130} height={130} />
      </div>
      <Stack h="100%" p="10px">
        <Heading size={{ md: 'sm', base: 'xs' }}>
          {makeCamelCase(exercise.name)}
        </Heading>
        <Wrap mt="auto !important">
          <Badge
            borderRadius="20px"
            p="2px 8px"
            w="fit-content"
            fontSize={{ md: '10px', base: '9px' }}
            colorScheme="yellow"
          >
            {makeCamelCase(exercise.bodyPart)}
          </Badge>
          <Badge
            borderRadius="20px"
            p="2px 8px"
            w="fit-content"
            fontSize={{ md: '10px', base: '9px' }}
            colorScheme="pink"
          >
            {makeCamelCase(exercise.target)}
          </Badge>
          <Badge
            borderRadius="20px"
            p="2px 8px"
            w="fit-content"
            fontSize={{ md: '10px', base: '9px' }}
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
