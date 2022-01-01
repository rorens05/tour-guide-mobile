import {Icon} from '@ui-kitten/components';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function ActionButton({
  onPress = () => {},
  icon = '',
  text = '',
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon
        name={icon}
        style={{tintColor: '#404040', height: 16, width: 16, marginRight: 8}}
      />
      <Text style={{color: '#404040', fontWeight: 'bold', fontSize: 12}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
