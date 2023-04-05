import { IExercise, IState } from './types';

export const filterExercises = (
  exercises: IExercise[],
  selectedFilters: IState
) => {
  if (!selectedFilters.bodyPart.length && !selectedFilters.equipment.length)
    return exercises;

  if (!selectedFilters.bodyPart.length)
    return exercises.filter((ex) =>
      selectedFilters.equipment.includes(ex.equipment)
    );

  if (!selectedFilters.equipment.length)
    return exercises.filter((ex) =>
      selectedFilters.bodyPart.includes(ex.bodyPart)
    );

  return exercises.filter(
    (ex) =>
      selectedFilters.bodyPart.includes(ex.bodyPart) &&
      selectedFilters.equipment.includes(ex.equipment)
  );
};
