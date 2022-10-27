import { ActionTypes } from '../../constants/actionTypes';
import { SnackbarActions } from '../../actions/snackbar/snackbarActions';

export const snackbarReducer = (state = {}, action: SnackbarActions) => {
  switch (action.type) {
    case ActionTypes.SNACKBAR_SUCCESS:
      return {
        ...state,
        successSnackbarOpen: true,
        successSnackbarMessage: action.payload
      };
    case ActionTypes.SNACKBAR_CLEAR:
      return {
        ...state,
        successSnackbarOpen: false,
        errorSnackbarOpen: false,
        infoSnackbarOpen: false
      };
    default:
      return state;
  }
};
