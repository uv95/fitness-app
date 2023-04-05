import { Button, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  itemsLength: number;
  currentPage: number;
  pageSize: number;
  changePage: Dispatch<SetStateAction<number>>;
};

const Pagination = ({
  itemsLength,
  currentPage,
  pageSize,
  changePage,
}: Props) => {
  const pagesCount = Math.ceil(itemsLength / pageSize);

  if (pagesCount === 1) return null;

  const pages = [...Array(pagesCount)].map((_, i) => i + 1);

  return (
    <Flex alignItems="center">
      <ChevronLeftIcon
        boxSize={6}
        onClick={() => changePage(currentPage === 1 ? 1 : currentPage - 1)}
        cursor="pointer"
      />
      {pages
        .slice(
          currentPage < 4 ? 0 : currentPage - 3,
          currentPage < 4 ? 5 : currentPage + 2
        )
        .map((page) => (
          <Button
            key={page}
            onClick={() => changePage(page)}
            colorScheme={page === currentPage ? 'blue' : 'gray'}
          >
            {page}
          </Button>
        ))}
      <ChevronRightIcon
        boxSize={6}
        onClick={() =>
          changePage(currentPage === pagesCount ? pagesCount : currentPage + 1)
        }
        cursor="pointer"
      />
    </Flex>
  );
};

export default Pagination;
