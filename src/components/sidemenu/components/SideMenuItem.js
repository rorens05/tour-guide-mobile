import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SideMenuItem({title, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon name={icon} size={20} />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
