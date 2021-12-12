import {NavigationContext} from '@react-navigation/core';
import React, {useContext} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../../constants/Colors';
import URLs from '../../../constants/URLs';
import {formatAPIImage, formatCurrency} from '../../../utils/formatter';
const {width, height} = Dimensions.get('window');

export default function PlantItem({item}) {
  const navigation = useContext(NavigationContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductInformation', {id: item.id})}
      activeOpacity={0.4}
      style={{width: width * 0.4, marginTop: 30}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 130,
            height: 130,
            // borderRadius: 100,
            overflow: 'hidden',
            backgroundColor: 'white',
          }}>
          <Image
            source={formatAPIImage(item.image_path)}
            style={{width: 130, height: 130}}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: COLOR.primaryColor,
            marginTop: 8,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: COLOR.primaryColor,
            fontWeight: 'bold',
          }}>
          {formatCurrency(item.price)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
