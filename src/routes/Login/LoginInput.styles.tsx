import { InputBase, styled } from '@mui/material';

export const StyledLoginInput = styled(InputBase)(() => ({
  '&.MuiInputBase-root': {
    backgroundColor: 'rgba(201, 201, 201, 0.19)',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 5,
    border: '1px solid #e7e7e7',
  },

  '& .MuiInputBase-input': {
    '&::placeholder': {
      color: '#000000',
      opacity: 0.3,
      fontWeight: 500,
    },

    '&:hover::placeholder': {
      opacity: 0.4,
    },

    '&:focus::placeholder': {
      opacity: 0.1,
    },
  },
}));
