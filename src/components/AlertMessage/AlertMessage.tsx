import useAlertMessage from './useAlertMessage';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { theme } from 'theme/theme';
import { JSX } from 'react/jsx-runtime';

function TransitionLeft(props: JSX.IntrinsicAttributes & SlideProps) {
  return <Slide {...props} direction='left' />;
}

const AlertMessage = () => {
  const { open, message, handleClose } = useAlertMessage();

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      TransitionComponent={TransitionLeft}
    >
      <Alert
        onClose={handleClose}
        severity='error'
        sx={{
          width: '100%',
          marginTop: 8,
          backgroundColor: theme.palette.errorAlert.light,
          color: theme.palette.errorAlert.contrastText,
        }}
        icon={
          <ReportProblemIcon
            style={{
              color: theme.palette.errorAlert.contrastText,
            }}
          />
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
