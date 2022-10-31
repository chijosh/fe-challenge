import { ActionTypes } from '../../constants/actionTypes';
import { ModalState } from '../../../types/index';

export interface SetModalDisplayAction {
  type: ActionTypes.SET_MODAL_DISPLAY;
  payload: ModalState;
}

export type ModalActions = SetModalDisplayAction;

export const setModalDisplay = (value: ModalState): SetModalDisplayAction => ({
  type: ActionTypes.SET_MODAL_DISPLAY,
  payload: value
});
