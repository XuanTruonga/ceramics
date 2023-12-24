import { localStorageCartProducts, localStorageHeartProducts } from 'components/localStorage/localStorage';
import { toast } from 'react-toastify';

const cartStorageKey = 'Cart';
const heartStorageKey = 'Heart';
let config = localStorageCartProducts();
let configHeart = localStorageHeartProducts();


export const HandleAddCart = (data, setRenderApp) => {
  let newData = { ...data, quantityProductCart: 1 };
  const product = config.find((item) => item._id === newData._id);
  if (product) {
    const indexConfig = config.findIndex((item) => item._id === product._id);
    config[indexConfig] = { ...product, quantityProductCart: ++product.quantityProductCart };
  } else {
    config.push(newData);
  }
  localStorage.setItem(cartStorageKey, JSON.stringify(config));
  setRenderApp(Math.random());
};

export const HandleAddProductLike = (data, setRenderApp) => {
  const newData = { ...data, isHeart: true };
  const product = configHeart.find((item) => item._id === data._id);
  if (product) {
    const indexConfig = configHeart.findIndex((item) => item._id === product._id);
    configHeart.splice(indexConfig, 1);
    toast.error('Bỏ sản phẩm yêu thích thành công!', {
      position: toast.POSITION.TOP_RIGHT
    });
  } else {
    configHeart.push(newData);
    toast.success('Thêm sản phẩm yêu thích thành công!', {
      position: toast.POSITION.TOP_RIGHT
    });
  }
  localStorage.setItem(heartStorageKey, JSON.stringify(configHeart));
  setRenderApp(Math.random());
};

export const HandleDeleteProductLike = (data, setRenderApp) => {
  const indexConfigHeart = configHeart.findIndex((item) => {
    return item._id === data._id;
  });
  configHeart.splice(indexConfigHeart, 1);
  localStorage.setItem(heartStorageKey, JSON.stringify(configHeart));
  setRenderApp(Math.random());
};

export const totalProductCart = () => {
  const dataLocalStorageCart = localStorageCartProducts();
  const total = dataLocalStorageCart.reduce((value, curr) => {
    return value + curr.quantityProductCart;
  }, 0);
  return total;
};

export const totalMoney = (data) => {
  const moneys = data.reduce((value, item) => {
    let price = item.priceRoot - (item.priceRoot / 100) * item.discount;
    return value + item.quantityProductCart * price;
  }, 0);
  return moneys;
};

export const HandleUpProduct = (data, index, setRenderApp) => {
  if (config[index].quantityProductCart < data[index].quantity) {
    config[index] = { quantityProductCart: ++data[index].quantityProductCart, ...data[index] };
    localStorage.setItem(cartStorageKey, JSON.stringify(config));
    setRenderApp(Math.random());
  }
};

export const HandleDownProduct = (data, index, setRenderApp) => {
  if (config[index].quantityProductCart > 1) {
    config[index] = { quantityProductCart: --data[index].quantityProductCart, ...data[index] };
    localStorage.setItem(cartStorageKey, JSON.stringify(config));
    setRenderApp(Math.random());
  }
};
export const HandleDeleteProduct = (index, setRenderApp) => {
  config.splice(index, 1);
  localStorage.setItem(cartStorageKey, JSON.stringify(config));
  setRenderApp(Math.random());
};
