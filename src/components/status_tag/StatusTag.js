import React from 'react';
import {Text, View} from 'react-native';

export default function StatusTag({children}) {
  let backgroundColor = 'gray';
  switch (children) {
    case 'processing':
      backgroundColor = 'blue';
      break;
    case 'verified':
      backgroundColor = 'rgb(0, 182, 182)';
      break;

    case 'shipping':
      backgroundColor = 'orange';
      break;
    case 'delivered':
      backgroundColor = 'green';
      break;
    case 'cancelled':
    case 'failed':
      backgroundColor = 'red';
      break;
    default:
      break;
  }
  return (
    <View style={{backgroundColor, padding: 8, borderRadius: 4}}>
      <Text style={{color: 'white'}}>{children?.toUpperCase()}</Text>
    </View>
  );
}
