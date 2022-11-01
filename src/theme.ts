import { teal, red } from '@mui/material/colors';

export const getAppTheme = (mode: any) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          secondary: { main: teal[500] },
          warning: { main: red[700] },
          divider: '#fde68a',
          background: {
            paper: '#fefae0',
            default: '#dda15e'
          },
          text: {
            primary: '#000',
            secondary: '#27272a'
          }
        }
      : {
          primary: {
            main: '#dbf4ff'
          },
          divider: '#004282',
          background: {
            default: '#000e21',
            paper: '#000e21'
          },
          text: {
            primary: '#fff',
            secondary: '#71717a'
          }
        })
  }
});
