import { Box, styled } from '@mui/material';

export const StyledHamburgerMenu = styled(Box)(({ theme }) => ({
  position: 'relative',

  '& .nav-hamburger-menu': {
    display: 'none',
  },

  '& .nav-hamburger-container': {
    position: 'absolute',
    top: '40px',
    right: '13px',
    width: '192px',
    padding: '15px',
    backgroundColor: 'white',
    border: '1px solid #dddddd',
    borderRadius: '5px',
    boxShadow: '2px 6px 13px -1px rgb(0 0 0 / 10%)',
    opacity: 0,
    transition: '0.2s all',

    '&.open': {
      opacity: 1,
    },

    '& .hamburger-items': {
      display: 'flex',
      flexDirection: 'column',
      gridGap: 10,
    },
  },
  '@media only screen and (max-width: 700px)': {
    '& .nav-hamburger-menu': {
      display: 'flex',
    },
  },
}));
