import ExerciseInfo from '@/components/ExerciseInfo';
import SimilarExercises from '@/components/SimilarExercises';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import {
  filterByBodyPart,
  filterByEquipment,
  filterByTarget,
} from '@/utils/filterExercises';
import { IExercise } from '@/utils/types';
import { Box, Button, Divider } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type Props = {
  exercise: IExercise;
  exercisesFiltered: {
    byBodyPart: IExercise[];
    byTarget: IExercise[];
    byEquipment: IExercise[];
  };
};

const ExercisePage = ({ exercise, exercisesFiltered }: Props) => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Link href="/" passHref>
        <Button m="20px">Back</Button>
      </Link>
      <ExerciseInfo exercise={exercise} />
      <Divider colorScheme="pink" />
      <Divider colorScheme="pink" />
      <SimilarExercises exercisesFiltered={exercisesFiltered} />
    </Box>
  );
};

export default ExercisePage;

export async function getStaticPaths() {
  const exercises = await fetchApi(baseUrl);
  const paths = exercises.map((exercise: IExercise) => ({
    params: { id: exercise.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const exercises = await fetchApi(baseUrl);
  const exercise = exercises.find(
    (ex: IExercise) => ex.id === context.params.id
  );
  const byBodyPart = filterByBodyPart(exercises, exercise.bodyPart);
  const byTarget = filterByTarget(exercises, exercise.target);
  const byEquipment = filterByEquipment(exercises, exercise.equipment);
  return {
    props: {
      exercisesFiltered: {
        byBodyPart,
        byTarget,
        byEquipment,
      },
      exercise,
    },
  };
}
