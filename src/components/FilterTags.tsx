import { FilterContext } from '@/context/FilterContext';
import { FilterActionsKind } from '@/utils/types';
import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import React, { useContext } from 'react';

const FilterTags = () => {
  const { state, dispatch } = useContext(FilterContext);
  const allTags = [...state.equipment, ...state.bodyPart];

  return (
    <Flex flexWrap={'wrap'} gap="10px">
      {allTags.map((tag) => (
        <Tag key={tag} colorScheme="blackAlpha">
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
