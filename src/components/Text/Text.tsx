import { Typography } from '@mui/material';
import { TextProps } from './types';

const Text = ({ children, typographyProps }: TextProps) => {
  return (
    <Typography fontFamily='Poppins' {...typographyProps}>
      {children}
    </Typography>
  );
};

export default Text;
