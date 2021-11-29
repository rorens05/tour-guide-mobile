import {NavigationContext} from '@react-navigation/core';
import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';

export default function ProductInformation() {
  const navigation = useContext(NavigationContext);
  return (
    <MainContainer title="  ">
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/planttest.png')}
            style={{width: '80%', height: 400}}
          />
        </View>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 12,
            }}>
            Silver Queen Plant
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', marginBottom: 8}}>
            800.00 php
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Good air purifying plant. One of the best air purifying plant in the
            Philippines. The Silver Queen plant is even recommended by NASA.
            Their greatest capability is to reduce the Benzene toxin when placed
            indoors
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Dashboard', {
                screen: 'Home',
                params: {screen: 'Cart'},
              })
            }>
            <Text
              style={{
                backgroundColor: COLOR.primaryColor,
                color: 'white',
                borderRadius: 20,
                paddingHorizontal: 40,
                paddingVertical: 16,
                fontWeight: 'bold',
              }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainContainer>
  );
}
