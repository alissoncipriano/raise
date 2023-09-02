import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, selectMessage, selectOpen } from 'store/AlertSlice';

const useAlertMessage = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectOpen);
  const message = useSelector(selectMessage);
  const handleClose = () => dispatch(hideAlert());

  return {
    open,
    message,
    handleClose,
  };
};

export default useAlertMessage;
