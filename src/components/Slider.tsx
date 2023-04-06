import { IExercise } from '@/utils/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';

type Props = { exercises: IExercise[] };

const Slider = ({ exercises }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? currentIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === exercises?.length - 4;
    const newIndex = isLastSlide ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <Box>
      <Flex alignItems="center" gap="10px">
        <ChevronLeftIcon
          onClick={goToPrevious}
          w="30px"
          h="30px"
          cursor="pointer"
        />
        <Flex overflow="hidden" w="1000px">
          {exercises &&
            exercises.map((exercise) => (
              <Link
                key={exercise.id}
                href={`/exercise/${exercise.id}`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s',
                }}
              >
                <ExerciseCard exercise={exercise} />
              </Link>
            ))}
        </Flex>
        <ChevronRightIcon
          onClick={goToNext}
          w="30px"
          h="30px"
          cursor="pointer"
        />
      </Flex>
    </Box>
  );
};

export default Slider;
