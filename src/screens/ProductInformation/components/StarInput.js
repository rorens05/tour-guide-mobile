import {Icon} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {generateArrayFromNumber} from '../../../utils/numberGenerator';

export default function StarInput({value, onChange = () => {}}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {generateArrayFromNumber(5).map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onChange(index + 1)}
            activeOpacity={0.9}>
            <Icon
              name="star"
              style={{
                tintColor: value >= index + 1 ? '#ffc107' : '#e0e0e0',
                height: 32,
                width: 32,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
