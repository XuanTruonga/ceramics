import { axiosInstance } from './services';

class BaseService {
  BASE_URL = process.env.REACT_APP_BASE_URL;

  BASE_ENDPOINT = '';

  DEFAULT_LIMIT = 10;

  DEFAULT_PAGE = 1;

  PRIMARY_KEY = 'id';

  DEFAULT_SORT = 'createdAt -1';

  request;

  constructor(props) {
    this.setRequest();
  }

  /**
   * @param {AxiosRequestConfig} requestConfig
   * @returns
   */

  setRequest() {
    this.request = axiosInstance(this.BASE_URL);

    this.requestParams = {
      page_index: this.DEFAULT_PAGE,
      page_size: this.DEFAULT_LIMIT,
      sort: this.DEFAULT_SORT
    };
  }

  /**
   * @param {Object} query
   * @returns
   */
  list = (query = {}) => {
    const params = {
      ...this.requestParams,
      ...query
    };

    return this.request.get(this.BASE_ENDPOINT, { params });
  };

  /**
   * @param {string} id
   * @returns
   */
  find = (id) => {
    const url = `${this.BASE_ENDPOINT}/${id}`;
    return this.request.get(url);
  };

  /**
   * @param {Object} data
   * @returns
   */
  create = (data) => {
    return this.request.post(this.BASE_ENDPOINT, data);
  };

  /**
   * @param {Object} data
   * @returns
   */
  update = (data, id, method = 'put') => {
    if (id) {
      return this.request[method](`${this.BASE_ENDPOINT}/${id}`, data);
    }
    return this.request[method](`${this.BASE_ENDPOINT}/${data[this.PRIMARY_KEY]}`, data);
  };
  /**
   * @param {Object} data
   * @returns
   */
  save = (data) => {
    if (data.hasOwnProperty(this.PRIMARY_KEY) && data[this.PRIMARY_KEY]) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  };

  /**
   * @param {string} id
   * @returns
   */
  delete = (id) => {
    return this.request.delete(this.BASE_ENDPOINT + '/' + id);
  };
}
export default BaseService;
