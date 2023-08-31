import { Box, styled } from '@mui/material';

export const StyledSidebar = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: '1000000',

  '@media only screen and (max-width: 700px)': {
    paddingLeft: 20,
    paddingRight: 20,

    '& .nav-items': {
      display: 'none',
    },
  },
}));
