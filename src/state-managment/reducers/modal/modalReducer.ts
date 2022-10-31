import { ActionTypes } from '../../constants/actionTypes';
import { ModalActions } from '../../actions/modal/modalActions';

import { ModalState } from '../../../types/index';

const initialState: ModalState = {
  isModalOpen: false
};

export const modalReducer = (state = initialState, action: ModalActions) => {
  switch (action.type) {
    case ActionTypes.SET_MODAL_DISPLAY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
