export const calculateRewardsProgramPoints = (amount) => {
  if (typeof amount !== 'number') {
    throw new Error('Argument must be a number');
  }

  //the purchase amount is greater than $100
  if (amount > 100) return 2 * (amount - 100) + 50;

  //the purchase amount is greater than $50 and less than $100
  if (amount > 50) return amount - 50;

  //the purchase amount is less than $50
  return 0;
};
