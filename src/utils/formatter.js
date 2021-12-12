export const formatCurrency = value => {
  return '₱ ' + parseFloat(value || '0').toFixed(2);
};

export const formatAPIImage = image => {
  if (image != null) {
    return {uri: URLs.BASE_URL + image};
  }
  return require('../assets/images/noimage.jpeg');
};
