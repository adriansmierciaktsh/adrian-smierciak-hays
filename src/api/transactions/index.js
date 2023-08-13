import { mockedTransactions } from 'api/mocks/transactions/index';

export const simulateFetchTransactions = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        transactions: mockedTransactions,
      });
    }, 2000);
  });
