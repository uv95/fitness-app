import { IExercise, IState } from './types';

export const filterByBodyPartAndEquipment = (
  exercises: IExercise[],
  selectedFilters: IState
) => {
  if (!selectedFilters.bodyPart?.length && !selectedFilters.equipment?.length)
    return exercises;

  if (!selectedFilters.bodyPart?.length)
    return exercises.filter((ex) =>
      selectedFilters.equipment?.includes(ex.equipment)
    );

  if (!selectedFilters.equipment?.length)
    return exercises.filter((ex) =>
      selectedFilters.bodyPart?.includes(ex.bodyPart)
    );

  return exercises.filter(
    (ex) =>
      selectedFilters.bodyPart?.includes(ex.bodyPart) &&
      selectedFilters.equipment?.includes(ex.equipment)
  );
};

export const filterByBodyPart = (exercises: IExercise[], bodyPart: string) =>
  exercises.filter((ex) => ex.bodyPart === bodyPart);

export const filterByTarget = (exercises: IExercise[], target: string) =>
  exercises.filter((ex) => ex.target === target);

export const filterByEquipment = (exercises: IExercise[], equipment: string) =>
  exercises.filter((ex) => ex.equipment === equipment);
