import { useDispatch, useSelector } from 'react-redux';
import {
  hideAlert,
  selectMessage,
  selectOpen,
  selectType,
} from 'store/AlertSlice';

export type AlertType = {
  message: string;
  type?: 'success' | 'error';
};

const useAlertMessage = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectOpen);
  const message = useSelector(selectMessage);
  const type = useSelector(selectType);
  const handleClose = () => dispatch(hideAlert());

  return {
    open,
    message,
    handleClose,
    type,
  };
};

export default useAlertMessage;
