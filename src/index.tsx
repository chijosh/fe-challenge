/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { updateIntl } from 'react-intl-redux';
import { SnackbarProvider } from 'notistack';
import { store } from './state-managment/store';
import { ThemeProvider } from '@mui/material/styles';

import { lang } from './locales';
import { theme } from './theme';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

const LoadIntl = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    locale: 'en',
    messages: lang.en
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

  return (
    <>
      <IntlProvider locale={state.locale} messages={state.messages}>
        <App />
      </IntlProvider>
    </>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <LoadIntl />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
