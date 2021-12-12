import {NavigationContext} from '@react-navigation/core';
import {Icon} from '@ui-kitten/components';
import React, {useContext, useEffect, useState} from 'react';
import {Image, RefreshControl, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carts from '../../api/Carts';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';
import {formatAPIImage, formatCurrency} from '../../utils/formatter';
import {useIsFocused} from '@react-navigation/native';

export default function Transactions() {
  const navigation = useContext(NavigationContext);
  const isFocused = useIsFocused();

  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCarts = async () => {
    setLoading(true);
    let response = await new Carts().index();
    if (response.ok) {
      setCarts(response.data);
    } else {
      alert('Something went wrong while fetching the carts');
    }
    setLoading(false);
  };

  const deleteItem = async id => {
    setLoading(true);
    let response = await new Carts().destroy(id);
    if (response.ok) {
      getCarts();
    } else {
      alert('Something went wrong while deleting the item');
    }
    setLoading(false);
  };

  useEffect(() => {
    getCarts();
  }, []);

  useEffect(() => {
    getCarts();
  }, [isFocused]);

  return (
    <MainContainer title="Cart">
      <View style={{flex: 1}}>
        <ScrollView
          refreshControl={
            <RefreshControl onRefresh={getCarts} refreshing={loading} />
          }>
          {carts.length == 0 && !loading && (
            <Text
              style={{
                margin: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                color: COLOR.primaryColor,
              }}>
              You have no item in your cart
            </Text>
          )}
          {carts.map(item => (
            <View
              key={item.id}
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingVertical: 30,
                paddingVertical: 10,
              }}>
              <Image
                source={formatAPIImage(item.product.image_path)}
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 20,
                  borderRadius: 50,
                  marginRight: 20,
                }}
              />
              <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                  {item.product.name}
                </Text>
                <Text style={{}} numberOfLines={2}>
                  {item.product.description}
                </Text>
                <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                  Quantity: {item.quantity}
                </Text>
              </View>
              <View
                style={{width: 120, alignItems: 'flex-end', paddingRight: 20}}>
                <Text
                  style={{color: 'red', fontWeight: 'bold', fontSize: 16}}
                  numberOfLines={2}>
                  {formatCurrency(item.quantity * item.product.price)}
                </Text>
                <TouchableOpacity
                  style={{marginTop: 8}}
                  onPress={() => deleteItem(item.id)}>
                  <Icon
                    name="trash-2-outline"
                    style={{width: 20, height: 20}}
                    fill="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
