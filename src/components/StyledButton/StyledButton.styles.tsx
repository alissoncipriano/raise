import { Button, darken, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: 10,

  '&:hover': {
    backgroundColor: darken(theme.palette.primary.main, 0.2),
  },
}));
