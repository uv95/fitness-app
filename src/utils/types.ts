import { Dispatch } from 'react';

export interface IExercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

export interface IState {
  equipment: string[];
  bodyPart: string[];
}
export enum FilterActionsKind {
  TOGGLE_EQUIPMENT_FILTER = 'TOGGLE_EQUIPMENT_FILTER',
  TOGGLE_BODYPART_FILTER = 'TOGGLE_BODYPART_FILTER',
  EQUIPMENT_CHECK_ALL = ' EQUIPMENT_CHECK_ALL',
  BODYPART_CHECK_ALL = 'BODYPART_CHECK_ALL',
}

export interface IFilterActions {
  type: FilterActionsKind;
  payload: string[];
}
export interface IFilterContext {
  state: IState;
  dispatch: Dispatch<IFilterActions>;
}
