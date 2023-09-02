import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    errorAlert: Record<string, any>;
  }
  interface PaletteOptions {
    errorAlert: Record<string, any>;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primary: true;
    errorAlert: true;
  }
}

declare module '@mui/material/Alert' {
  interface ButtonPropsColorOverrides {
    primary: true;
    errorAlert: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E88282',
      light: '#FEF0F0',
      dark: '#F4F4F4',
      contrastText: '#FFF',
    },
    errorAlert: {
      main: '#974E4E',
      light: '#EF5F5F',
      dark: '#521717',
      contrastText: '#FFF',
    },
  },
});
