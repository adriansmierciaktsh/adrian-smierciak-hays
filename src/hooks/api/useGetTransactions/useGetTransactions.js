import { useEffect, useState } from 'react';

import { simulateFetchTransactions } from 'api/transactions/index';

export const useGetTransactions = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);

      try {
        const response = await simulateFetchTransactions();
        setData(response.transactions);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { data, isLoading, isError };
};
