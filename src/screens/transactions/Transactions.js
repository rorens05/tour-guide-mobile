import {NavigationContext} from '@react-navigation/core';
import {Icon} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';

export default function Transactions() {
  const navigation = useContext(NavigationContext);
  return (
    <MainContainer title="Cart">
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 30,
              paddingVertical: 10,
            }}>
            <View style={{marginLeft: 10, paddingHorizontal: 30}}>
              <Icon
                name="checkmark-outline"
                style={{width: 20, height: 20}}
                fill="gray"
              />
            </View>
            <Image
              source={require('../../assets/images/planttest.png')}
              style={{width: 60, height: 60, borderRadius: 50, marginRight: 20}}
            />
            <View style={{flex: 1, paddingLeft: 30}}>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Plant 1
              </Text>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Price
              </Text>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Quantity
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 30,
              paddingVertical: 10,
            }}>
            <View style={{marginLeft: 10, paddingHorizontal: 30}}>
              <Icon
                name="checkmark-outline"
                style={{width: 20, height: 20}}
                fill="gray"
              />
            </View>
            <Image
              source={require('../../assets/images/planttest.png')}
              style={{width: 60, height: 60, borderRadius: 50, marginRight: 20}}
            />
            <View style={{flex: 1, paddingLeft: 30}}>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Plant 1
              </Text>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Price
              </Text>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Quantity
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 30,
              paddingVertical: 10,
            }}>
            <View style={{marginLeft: 10, paddingHorizontal: 30}}>
              <Icon
                name="checkmark-outline"
                style={{width: 20, height: 20}}
                fill="gray"
              />
            </View>
            <Image
              source={require('../../assets/images/planttest.png')}
              style={{width: 60, height: 60, borderRadius: 50, marginRight: 20}}
            />
            <View style={{flex: 1, paddingLeft: 30}}>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Plant 1
              </Text>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Price
              </Text>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Quantity
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 30,
              paddingVertical: 10,
            }}>
            <View style={{marginLeft: 10, paddingHorizontal: 30}}>
              <Icon
                name="checkmark-outline"
                style={{width: 20, height: 20}}
                fill="gray"
              />
            </View>
            <Image
              source={require('../../assets/images/planttest.png')}
              style={{width: 60, height: 60, borderRadius: 50, marginRight: 20}}
            />
            <View style={{flex: 1, paddingLeft: 30}}>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Plant 1
              </Text>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Price
              </Text>
              <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                Quantity
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: COLOR.primaryColor,
          flexDirection: 'row',
          padding: 12,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', marginRight: 12}}>
          Total Price: 500 php
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'white',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 4,
              paddingVertical: 8,
              paddingHorizontal: 12,
              fontWeight: 'bold',
            }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
}
