import { FilterContext } from '@/context/FilterContext';
import { filters } from '@/utils/filters';
import { makeCamelCase } from '@/utils/makeCamelCase';
import { FilterActionsKind } from '@/utils/types';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Stack,
  MenuDivider,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import style from '../styles/Filter.module.css';

const Filter = () => {
  const { state, dispatch } = useContext(FilterContext);
  const { equipment, bodyPart } = state;

  return (
    <Flex mt="20px" gap="10px">
      {filters.map((filter) => (
        <Menu key={filter.name}>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {filter.placeholder}
          </MenuButton>
          <MenuList
            p="10px"
            h="400px"
            overflowY="scroll"
            className={style.filter}
          >
            <Stack>
              <Checkbox
                isChecked={
                  filter.name === 'equipment'
                    ? equipment.length === filter.items.length
                    : bodyPart.length === filter.items.length
                }
                onChange={() =>
                  dispatch({
                    type:
                      filter.name === 'equipment'
                        ? FilterActionsKind.EQUIPMENT_CHECK_ALL
                        : FilterActionsKind.BODYPART_CHECK_ALL,
                    payload: filter.items,
                  })
                }
              >
                All
              </Checkbox>
              <MenuDivider />
              {filter.items.map((item) => (
                <Checkbox
                  isChecked={
                    filter.name === 'equipment'
                      ? equipment.includes(item)
                      : bodyPart.includes(item)
                  }
                  key={item}
                  onChange={() =>
                    dispatch({
                      type:
                        filter.name === 'equipment'
                          ? FilterActionsKind.TOGGLE_EQUIPMENT_FILTER
                          : FilterActionsKind.TOGGLE_BODYPART_FILTER,
                      payload: [item],
                    })
                  }
                >
                  {makeCamelCase(item)}
                </Checkbox>
              ))}
            </Stack>
          </MenuList>
        </Menu>
      ))}
    </Flex>
  );
};

export default Filter;
