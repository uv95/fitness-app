import { IFilterContext } from '@/utils/types';
import { createContext, useReducer } from 'react';
import filterReducer from './FilterReducer';

const initialState = {
  equipment: [],
  bodyPart: [],
};

export const FilterContext = createContext<IFilterContext>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const FilterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
