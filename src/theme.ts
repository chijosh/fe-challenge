import { teal, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    secondary: { main: teal[500] },
    warning: { main: red[700] }
  }
});
