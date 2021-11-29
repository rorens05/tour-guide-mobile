import {NavigationContext} from '@react-navigation/core';
import React, {useContext} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../../constants/Colors';
const {width, height} = Dimensions.get('window');

export default function PlantItem() {
  const navigation = useContext(NavigationContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductInformation')}
      activeOpacity={0.4}
      style={{width: width * 0.4, marginTop: 20}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 130,
            height: 130,
            borderRadius: 100,
            overflow: 'hidden',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../../../assets/images/planttest.png')}
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
          Silver Queen Plant
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: COLOR.primaryColor,
            fontWeight: 'bold',
          }}>
          800.00 php
        </Text>
      </View>
    </TouchableOpacity>
  );
}
