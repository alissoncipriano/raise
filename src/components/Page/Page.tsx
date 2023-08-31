import { PageProps } from './types';

import { Box } from '@mui/material';

const Page = ({ children, boxProps }: PageProps) => {
  return (
    <Box width='100%' minHeight='100vh' {...boxProps}>
      {children}
    </Box>
  );
};

export default Page;
