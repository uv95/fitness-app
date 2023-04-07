import { IExercise } from '@/utils/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Container, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';

type Props = { exercises: IExercise[] };

const Slider = ({ exercises }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? exercises.length - 4 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === exercises.length - 4;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <Box>
      <Flex alignItems="center" gap="10px">
        <ChevronLeftIcon
          onClick={goToPrevious}
          w="35px"
          h="35px"
          cursor="pointer"
        />
        <Flex overflow="hidden" w="1040px">
          {exercises.map((exercise) => (
            <Link
              key={exercise.id}
              href={`/exercise/${exercise.id}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s',
              }}
            >
              <Container p="5px">
                <ExerciseCard exercise={exercise} />
              </Container>
            </Link>
          ))}
        </Flex>
        <ChevronRightIcon
          onClick={goToNext}
          w="35px"
          h="35px"
          cursor="pointer"
        />
      </Flex>
    </Box>
  );
};

export default Slider;
