import { ActionTypes } from '../../constants/actionTypes';
// import { IProductItem } from '../../../types/index';

type SnackbarMessage = string;

export interface DisplaySuccessSnackbar {
  type: ActionTypes.SNACKBAR_SUCCESS;
  payload: SnackbarMessage;
}
export interface RemoveSnackbar {
  type: ActionTypes.SNACKBAR_CLEAR;
}

export type SnackbarActions = DisplaySuccessSnackbar | RemoveSnackbar;

export const showSuccessSnackbar = (
  message: SnackbarMessage
): DisplaySuccessSnackbar => ({
  type: ActionTypes.SNACKBAR_SUCCESS,
  payload: message
});

export const clearSnackbar = (): RemoveSnackbar => ({
  type: ActionTypes.SNACKBAR_CLEAR
});
