import './RewardsProgramTable.css';
import { useRenderTableContent } from './hooks/useRenderTableContent/useRenderTableContent';

export const RewardsProgramTable = ({ data }) => {
  const { lastThreeMonths, rows } = useRenderTableContent(data);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {lastThreeMonths.map((month) => (
            <th key={month}>{month}</th>
          ))}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
