export const totalMoneyOrder = (products) => {
  const totalMoney = products.reduce((value, product) => {
    return value + product.price;
  }, 0);
  return totalMoney;
};
