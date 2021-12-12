import Base from './Base';

export default class Orders extends Base {
  index = () => {
    return this.sendRequest({path: '/api/v1/orders'});
  };

  show = id => {
    return this.sendRequest({path: `/api/v1/orders/${id}`});
  };

  create = data => {
    return this.sendRequest({path: `/api/v1/orders`, method: 'POST', data});
  };
}
