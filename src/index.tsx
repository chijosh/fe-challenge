/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { updateIntl } from 'react-intl-redux';
import { SnackbarProvider } from 'notistack';
import { store } from './state-managment/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { lang } from './locales';
import { getAppTheme } from './theme';
import App from './App';
import { AppState } from './types';

const container = document.getElementById('root')!;
const root = createRoot(container);

const LoadIntl = () => {
  const dispatch = useDispatch();
  const { themePref } = useSelector((state: AppState) => state);

  const [state, setState] = useState({
    locale: 'en',
    messages: lang.en,
    theme: 'white'
  });

  useEffect(() => {
    const userLang = navigator.language || 'en';
    setState({
      ...state,
      locale: userLang.slice(0, 2),
      messages: lang[`${userLang.slice(0, 2)}`]
    });

    // Dispatching because IntlProvider not passing locale object
    dispatch(
      updateIntl({
        locale: userLang.slice(0, 2),
        messages: lang[`${userLang.slice(0, 2)}`] //lang.de
      })
    );
  }, []);

  useMemo(() => {
    if (themePref.isDarkTheme) {
      setState({ ...state, theme: 'dark' });
    } else {
      setState({ ...state, theme: 'light' });
    }
  }, [themePref]);

  const theme = useMemo(
    () => createTheme(getAppTheme(state.theme)),
    [state.theme]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <IntlProvider locale={state.locale} messages={state.messages}>
            <App />
          </IntlProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadIntl />
    </Provider>
  </React.StrictMode>
);
