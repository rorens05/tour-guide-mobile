import Base from './Base';

export default class PlacesAPI extends Base {
  index = () => {
    return this.sendRequest({path: '/api/v1/place_categories'});
  };

  place = id => {
    return this.sendRequest({path: '/api/v1/place_categories/place/' + id});
  };
}
