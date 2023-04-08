import { FilterContext } from '@/context/FilterContext';
import { FilterActionsKind } from '@/utils/types';
import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import React, { useContext } from 'react';

const FilterTags = () => {
  const { state, dispatch } = useContext(FilterContext);
  const allTags = [...state.equipment, ...state.bodyPart];

  return (
    <Flex flexWrap={'wrap'} gap="10px" m="20px 10px 0 10px">
      {allTags.map((tag) => (
        <Tag
          key={tag}
          colorScheme="blackAlpha"
          fontSize={{ base: '9px', sm: '15px' }}
        >
          <TagLabel>{tag}</TagLabel>
          <TagCloseButton
            onClick={() =>
              dispatch({
                type: FilterActionsKind.REMOVE_FILTER,
                payload: [tag],
              })
            }
          />
        </Tag>
      ))}
    </Flex>
  );
};

export default FilterTags;
