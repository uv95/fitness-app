import ExerciseCard from '@/components/ExerciseCard';
import Filter from '@/components/Filter';
import FilterTags from '@/components/FilterTags';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import { FilterContext } from '@/context/FilterContext';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import { filterByBodyPartAndEquipment } from '@/utils/filterExercises';
import { paginate } from '@/utils/paginationHelper';
import { IExercise } from '@/utils/types';
import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

type HomeProps = { exercises: IExercise[] };

export default function Home({ exercises }: HomeProps) {
  const { state } = useContext(FilterContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedExercises, setPaginatedExercises] = useState<IExercise[]>([]);
  const [filteredExercises, setFilteresdExercises] =
    useState<IExercise[]>(exercises);
  const pageSize = 12;

  useEffect(() => {
    const filteredExercises = filterByBodyPartAndEquipment(exercises, state);
    setFilteresdExercises(filteredExercises);
  }, [exercises, state]);

  useEffect(() => {
    const paginatedFilteredExercises = paginate(
      filteredExercises,
      currentPage,
      pageSize
    );
    setPaginatedExercises(paginatedFilteredExercises);
  }, [filteredExercises, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredExercises]);

  return (
    <Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        maxW="1200px"
        minH="100vh"
        margin="0 auto"
      >
        <Filter />
        <FilterTags />
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          p="20px 0"
        >
          {paginatedExercises.map((exercise: IExercise) => (
            <Link href={`/exercise/${exercise.id}`} key={exercise.id}>
              <ExerciseCard exercise={exercise} />
            </Link>
          ))}
        </Flex>
        <Pagination
          itemsLength={filteredExercises.length}
          currentPage={currentPage}
          pageSize={pageSize}
          changePage={setCurrentPage}
        />
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const allExercises = await fetchApi(baseUrl);

  return {
    props: {
      exercises: allExercises,
    },
  };
}
