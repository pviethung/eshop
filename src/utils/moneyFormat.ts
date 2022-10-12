const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
export const moneyFormat = (x: number) => {
  return formatter.format(x);
};
