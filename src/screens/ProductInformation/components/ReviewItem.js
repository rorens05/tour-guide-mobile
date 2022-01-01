import React from 'react';
import {Text, View} from 'react-native';
import StarRating from './StarRating';

export default function ReviewItem({review}) {
  return (
    <View
      style={{
        paddingVertical: 12,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
        }}>{`${review.user.first_name} ${review.user.last_name}`}</Text>
      <StarRating ratings={review.rating} />
      <Text style={{marginTop: 12}}>{review.content}</Text>
    </View>
  );
}
