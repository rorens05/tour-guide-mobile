import {Icon} from '@ui-kitten/components';
import React from 'react';
import {Text, View} from 'react-native';
import {generateArrayFromNumber} from '../../../utils/numberGenerator';

export default function StarRating({ratings}) {
  return (
    <View style={{paddingTop: 2, flexDirection: 'row', marginRight: 12}}>
      {generateArrayFromNumber(5).map((item, index) => {
        return (
          <Icon
            key={index}
            name="star"
            style={{
              tintColor: ratings >= index + 1 ? '#ffc107' : '#e0e0e0',
              height: 16,
              width: 16,
            }}
          />
        );
      })}
    </View>
  );
}
