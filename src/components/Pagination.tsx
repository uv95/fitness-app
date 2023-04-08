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

  const pages = [...Array(pagesCount)].map((_, i) => i + 1);

  return (
    <Flex alignItems="center" mt="auto" gap="5px">
      {pagesCount !== 1 && (
        <ChevronLeftIcon
          boxSize={6}
          onClick={() => changePage(currentPage === 1 ? 1 : currentPage - 1)}
          cursor="pointer"
        />
      )}
      {pages
        .slice(
          currentPage < 4 ? 0 : currentPage - 3,
          currentPage < 4 ? 5 : currentPage + 2
        )
        .map((page) => (
          <Button
            key={page}
            onClick={() => changePage(page)}
            bg={page === currentPage ? 'gray.900 !important' : 'gray.100'}
            color={page === currentPage ? 'white' : 'gray.900'}
          >
            {page}
          </Button>
        ))}
      {pagesCount !== 1 && (
        <ChevronRightIcon
          boxSize={6}
          onClick={() =>
            changePage(
              currentPage === pagesCount ? pagesCount : currentPage + 1
            )
          }
          cursor="pointer"
        />
      )}
    </Flex>
  );
};

export default Pagination;
