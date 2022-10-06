export const moneyFormat = (x: number) => {
  return x.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};
