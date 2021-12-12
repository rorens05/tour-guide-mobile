import Base from './Base';

export default class Carts extends Base {
  index = () => {
    return this.sendRequest({path: '/api/v1/carts'});
  };

  create = data => {
    return this.sendRequest({path: `/api/v1/carts`, method: 'POST', data});
  };

  destroy = id => {
    return this.sendRequest({path: `/api/v1/carts/${id}`, method: 'DELETE'});
  };

  destroyAll = () => {
    index = () => {
      return this.sendRequest({
        path: '/api/v1/carts/destroy_all',
        method: 'DELETE',
      });
    };
  };
}
