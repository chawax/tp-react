import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { slice } from '../redux/pandas';
import { getPandas, getPandasError, isPandasFetching } from '../redux/pandas/selectors';
import { Panda } from '../types/Panda';

const usePandas = () => {
  const pandas: Panda[] = useSelector(getPandas);
  const loading: boolean = useSelector(isPandasFetching);
  const error: Error | undefined = useSelector(getPandasError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(slice.actions.loadPandasRequest());
  }, [dispatch]);
  return {
    pandas: pandas || [],
    error: error?.message,
    loading,
  };
};

/*
// Version sans Saga
const usePandas = () => {
  const [pandas, setPandas] = useState<Panda[]>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3004/pandas')
      .then((response: AxiosResponse) => {
        setPandas(response.data);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return {
    pandas,
    error,
    loading,
  };
};
*/

export default usePandas;
