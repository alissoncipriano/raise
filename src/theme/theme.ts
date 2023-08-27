import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    white: Record<string, any>;
  }
  interface PaletteOptions {
    white: Record<string, any>;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

const { palette } = createTheme();
export const theme = createTheme({
  palette: {
    primary: {
      main: '#E88282',
      light: '#FFFFFF',
      dark: '#000000',
      contrastText: '#FFF',
    },
    white: palette.augmentColor({
      color: {
        main: '#FFFFFF',
      },
    }),
  },
});
