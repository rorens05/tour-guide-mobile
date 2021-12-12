import Base from './Base';

export default class Products extends Base {
  index = () => {
    return this.sendRequest({path: '/api/v1/products'});
  };

  show = id => {
    return this.sendRequest({path: `/api/v1/products/${id}`});
  };
}
