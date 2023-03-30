import { IExercise } from './types';

export const paginate = (
  items: IExercise[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
