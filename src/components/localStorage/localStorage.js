
export const localStorageCartProducts = () => {
  const data = JSON.parse(localStorage.getItem('Cart')) || [];
  return data;
};

export const localStorageHeartProducts = () => {
  const data = JSON.parse(localStorage.getItem('Heart')) || [];
  return data;
};

export const localStorageCateAdmin = () => {
  const data = JSON.parse(localStorage.getItem('CateAdmin')) || '';
  return data;
};
