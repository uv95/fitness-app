import { IExercise } from '@/utils/types';
import Link from 'next/link';
import React from 'react';
import { DynamicExerciseCard } from './DynamicExerciseCard';

type Props = { paginatedExercises: IExercise[] };

const PaginatedExercises = ({ paginatedExercises }: Props) => {
  return (
    <>
      {paginatedExercises.map((exercise: IExercise) => (
        <Link href={`/exercise/${exercise.id}`} key={exercise.id}>
          <DynamicExerciseCard exercise={exercise} />
        </Link>
      ))}
    </>
  );
};

export default PaginatedExercises;
