export const moneyFormat = (x: number) => {
  return x.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
