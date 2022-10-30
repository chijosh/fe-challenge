import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState: any = {
  intl: {
    locale: 'en',
    message: {
      'app.greeting': 'Ciao!'
    }
  }
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
});
