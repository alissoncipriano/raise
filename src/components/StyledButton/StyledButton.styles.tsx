import { Button, darken, lighten, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: 10,

  '&:hover': {
    backgroundColor: darken(theme.palette.primary.main, 0.2),
  },

  '&:disabled': {
    backgroundColor: lighten(theme.palette.primary.main, 0.5),
    color: '#FFF',
  },
}));
