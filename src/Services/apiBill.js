const { axiosInstance, baseEndpoint } = require('./services');

export const apiGetBillUserId = async (useId) => {
  const res = await axiosInstance.get(baseEndpoint.bill + '/' + useId);
  return res;
};

export const apiGetBillDetail = async (billId) => {
  const res = await axiosInstance.get(baseEndpoint.bill + '/' + 'bill-detail' + '/' + billId);
  return res;
};
