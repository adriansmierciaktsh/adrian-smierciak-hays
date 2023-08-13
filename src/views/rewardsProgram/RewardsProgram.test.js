import { render, screen } from '@testing-library/react';

import { RewardsProgram } from './RewardsProgram';
import { calculateRewardsProgramPoints } from './RewardsProgram.utils';

describe('RewardsProgram component', () => {
  test('should renders heading', () => {
    render(<RewardsProgram />);
    const heading = screen.getByText(/Rewards Program Points/i);

    expect(heading).toBeInTheDocument();
  });
});

describe('calculateRewardsProgramPoints function', () => {
  test('should throw an error for non-numeric input', () => {
    expect(() => {
      calculateRewardsProgramPoints('not a number');
    }).toThrow('Argument must be a number');
  });

  test('should return correct points for purchase amount > $100', () => {
    const amount = 150;
    const points = calculateRewardsProgramPoints(amount);
    expect(points).toBe(2 * (amount - 100) + 50);
  });

  test('should return correct points for purchase amount > $50 and < $100', () => {
    const amount = 75;
    const points = calculateRewardsProgramPoints(amount);
    expect(points).toBe(amount - 50);
  });

  test('should return 0 points for purchase amount < $50', () => {
    const amount = 30;
    const points = calculateRewardsProgramPoints(amount);
    expect(points).toBe(0);
  });
});
