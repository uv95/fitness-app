import { FilterActionsKind, IFilterActions, IState } from '@/utils/types';

function filterReducer(state: IState, action: IFilterActions): IState {
  const { type, payload } = action;
  switch (type) {
    case FilterActionsKind.TOGGLE_EQUIPMENT_FILTER:
      const [equipmentItem] = payload;

      return {
        ...state,
        equipment: !state.equipment.includes(equipmentItem)
          ? [...state.equipment, equipmentItem]
          : state.equipment.filter((item) => item !== equipmentItem),
      };
    case FilterActionsKind.TOGGLE_BODYPART_FILTER:
      const [bodyPartItem] = payload;
      return {
        ...state,
        bodyPart: !state.bodyPart.includes(bodyPartItem)
          ? [...state.bodyPart, bodyPartItem]
          : state.bodyPart.filter((item) => item !== bodyPartItem),
      };
    case FilterActionsKind.REMOVE_FILTER:
      const [filter] = payload;
      return {
        ...state,
        bodyPart: state.bodyPart.filter((item) => item !== filter),
        equipment: state.equipment.filter((item) => item !== filter),
      };

    case FilterActionsKind.EQUIPMENT_CHECK_ALL:
      return {
        ...state,
        equipment: state.equipment.length === payload.length ? [] : payload,
      };

    case FilterActionsKind.BODYPART_CHECK_ALL:
      return {
        ...state,
        bodyPart: state.bodyPart.length === payload.length ? [] : payload,
      };

    default:
      return state;
  }
}

export default filterReducer;
