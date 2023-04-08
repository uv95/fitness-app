import { FilterContext } from '@/context/FilterContext';
import { FilterActionsKind } from '@/utils/types';
import { Tag, TagCloseButton, TagLabel, Wrap } from '@chakra-ui/react';
import React, { useContext } from 'react';

const FilterTags = () => {
  const { state, dispatch } = useContext(FilterContext);
  const allTags = [...state.equipment, ...state.bodyPart];

  return (
    <Wrap gap="10px" m="20px 10px 0 10px">
      {allTags.map((tag) => (
        <Tag key={tag} bg="gray.100" fontSize={{ base: '9px', sm: '15px' }}>
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
    </Wrap>
  );
};

export default FilterTags;
