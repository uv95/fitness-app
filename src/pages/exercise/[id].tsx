import SimilarExercises from '@/components/SimilarExercises';
import ExerciseInfoSkeleton from '@/components/skeletons/ExerciseInfoSkeleton';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import {
  filterByBodyPart,
  filterByEquipment,
  filterByTarget,
} from '@/utils/filterExercises';
import { makeCamelCase } from '@/utils/makeCamelCase';
import { IExercise } from '@/utils/types';
import { Box, Button, Divider } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';

const DynamicExerciseInfo = dynamic(
  () => import('../../components/ExerciseInfo'),
  {
    loading: () => <ExerciseInfoSkeleton />,
  }
);

type Props = {
  exercise: IExercise;
  exercisesFiltered: {
    byBodyPart: IExercise[];
    byTarget: IExercise[];
    byEquipment: IExercise[];
  };
};

const ExercisePage = ({ exercise, exercisesFiltered }: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{makeCamelCase(exercise.name)}</title>
      </Head>
      <Box minH="calc(100vh - 100px)">
        <Button m="20px" onClick={router.back}>
          Back
        </Button>
        <DynamicExerciseInfo exercise={exercise} />
        <Divider />
        <SimilarExercises exercisesFiltered={exercisesFiltered} />
      </Box>
    </>
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
