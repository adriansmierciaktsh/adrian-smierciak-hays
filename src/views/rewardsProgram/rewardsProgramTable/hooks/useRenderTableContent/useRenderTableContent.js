import { calculateRewardsProgramPoints } from 'views/rewardsProgram/RewardsProgram.utils';

export const useRenderTableContent = (data) => {
  const currentDate = new Date();
  const lastThreeMonths = Array.from({ length: 3 }, (_, i) => {
    const month = currentDate.getMonth() - i;
    const year = currentDate.getFullYear() - Math.floor((currentDate.getMonth() + i) / 12);
    return `${year}-${(month < 9 ? '0' : '') + (month + 1)}`;
  }).reverse();

  const clients = data.map((client) => client.clientName);

  const renderMonthCells = (client, month) => {
    const transactions = client.transactions.filter((transaction) => transaction.purchased.startsWith(month));
    const totalMonthPoints = transactions.reduce(
      (sum, transaction) => sum + calculateRewardsProgramPoints(transaction.price),
      0,
    );

    return <td key={month}>{totalMonthPoints}</td>;
  };

  const renderClientRows = () => {
    return clients.map((client, index) => {
      const totalClientPoints = data[index].transactions.reduce(
        (sum, transaction) => sum + calculateRewardsProgramPoints(transaction.price),
        0,
      );

      return (
        <tr key={client}>
          <th>{client}</th>
          {lastThreeMonths.map((month) => renderMonthCells(data[index], month))}
          <td>{totalClientPoints}</td>
        </tr>
      );
    });
  };

  return { lastThreeMonths, rows: renderClientRows() };
};
