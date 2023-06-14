import { IExercise } from '@/utils/types';
import { Box, Card, Container, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import style from '../styles/Slider.module.css';
import { DynamicExerciseCard } from './DynamicExerciseCard';

type Props = { exercises: IExercise[] };

const Slider = ({ exercises }: Props) => {
  return (
    <Box>
      <Flex gap="5px">
        <Flex
          h={{ md: '315px', base: '275px' }}
          gap="20px"
          p="0 5px"
          overflowX="scroll"
          w="100%"
          className={style.slider}
        >
          {exercises.map((exercise) => (
            <Container m="0" p="0" key={exercise.id}>
              <Link passHref href={`/exercise/${exercise.id}`}>
                <DynamicExerciseCard exercise={exercise} />
              </Link>
            </Container>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Slider;
