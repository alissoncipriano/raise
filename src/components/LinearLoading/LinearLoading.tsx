import useLinearLoading from './useLinearLoading';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LinearLoading = () => {
  const { loading } = useLinearLoading();

  return <Box sx={{ width: '100%' }}>{loading && <LinearProgress />}</Box>;
};

export default LinearLoading;
