import Base from './Base';

export default class PlacesAPI extends Base {
  index = () => this.sendRequest({path: '/api/v1/place_categories'});

  place = id =>
    this.sendRequest({path: '/api/v1/place_categories/place/' + id});

  updateReview = (id, data) =>
    this.sendRequest({
      path: `/api/v1/place_categories/place/${id}/update_review`,
      method: 'POST',
      data,
    });
}
