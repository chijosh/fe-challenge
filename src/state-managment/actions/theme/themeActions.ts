import { ActionTypes } from '../../constants/actionTypes';
// import { ModalState } from '../../../types/index';

export interface togglePreferenceThemeAction {
  type: ActionTypes.TOGGLE_DARKTHEME;
}

export type ThemeActions = togglePreferenceThemeAction;

export const toggleThemeAction = (): togglePreferenceThemeAction => ({
  type: ActionTypes.TOGGLE_DARKTHEME
});
