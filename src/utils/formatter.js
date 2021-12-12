export const formatCurrency = value => {
  return '₱ ' + parseFloat(value || '0').toFixed(2);
};

export const formatAPIImage = image => {
  if (image != null) {
    return {uri: URLs.BASE_URL + image};
  }
  return require('../assets/images/noimage.jpeg');
};

export const formatDate = dateString => {
  const date = new Date('2021-12-12T15:40:04.742+08:00');
  return date.toDateString();
};
