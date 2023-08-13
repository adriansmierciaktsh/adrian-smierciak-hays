import { useGetTransactions } from 'hooks/api/useGetTransactions/useGetTransactions';

import { RewardsProgramTable } from './RewardsProgramTable';
import { ErrorMessage } from 'components/errorMessage/ErrorMessage';
import { Loader } from 'components/loader/Loader';

export const RewardsProgramTableContainer = () => {
  const { data, isLoading, isError } = useGetTransactions();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;

  return <RewardsProgramTable data={data} />;
};
