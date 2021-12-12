export const getParams = navigation => {
  if (navigation) {
    const {index, routes} = navigation.getState();
    console.log('params', index, routes);
    return routes[index].params || {};
  }
};
