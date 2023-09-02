import { useSelector } from 'react-redux';
import { selectLoading } from 'store/LinearLoadSlice';

const useLinearLoading = () => {
  const loading = useSelector(selectLoading);

  return { loading };
};

export default useLinearLoading;
