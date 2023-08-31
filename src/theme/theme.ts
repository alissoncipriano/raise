import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primary: true;
  }
}
export const theme = createTheme({
  palette: {
    primary: {
      main: '#E88282',
      light: '#FEF0F0',
      dark: '#000000',
      contrastText: '#FFF',
    },
  },
});
