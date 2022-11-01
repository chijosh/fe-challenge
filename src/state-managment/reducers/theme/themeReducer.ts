import { ActionTypes } from '../../constants/actionTypes';
import { ThemeActions } from '../../actions/theme/themeActions';

import { ThemeState } from '../../../types/index';

const initialState: ThemeState = { isDarkTheme: false };

export const themeReducer = (state = initialState, action: ThemeActions) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_DARKTHEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };

    default:
      return state;
  }
};
