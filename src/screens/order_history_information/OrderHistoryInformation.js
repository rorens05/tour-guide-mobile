import {NavigationContext, useNavigation} from '@react-navigation/core';
import {Divider, Text} from '@ui-kitten/components';
import React, {useContext, useEffect, useState} from 'react';
import {Image, RefreshControl, ScrollView, View} from 'react-native';
import Orders from '../../api/Orders';
import MainContainer from '../../components/layout/MainContainer';
import StatusTag from '../../components/status_tag/StatusTag';
import COLOR from '../../constants/Colors';
import {
  formatAPIImage,
  formatCurrency,
  formatDate,
} from '../../utils/formatter';
import {getParams} from '../../utils/navigationHelper';

export default function OrderHistoryInformation() {
  const navigation = useContext(NavigationContext);
  const {id} = getParams(navigation);

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const getOrderInformation = async () => {
    setLoading(true);

    let response = await new Orders().show(id);
    console.log('order information response', response);
    if (response.ok) {
      setOrder(response.data);
    } else {
      alert('Something went wrong while fetching the order');
      navigation.goBack();
    }
    setLoading(false);
  };

  useEffect(() => {
    getOrderInformation();
  }, []);

  const totalPrice = () => {
    return (order?.order_items || []).reduce((total, item) => {
      return total + (item.quantity || 0) * (item?.price || 0);
    }, 0);
  };

  return (
    <MainContainer title="Order Information">
      <View style={{padding: 12, justifyContent: 'space-between', flex: 1}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={getOrderInformation}
            />
          }>
          <View
            style={{
              backgroundColor: 'white',
              padding: 12,
              borderRadius: 4,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Text category="h6" style={{marginBottom: 8}}>
                Order Information
              </Text>

              <Text category="p1" style={{marginBottom: 8, fontWeight: 'bold'}}>
                {loading ? 'Loading...' : order?.delivery_address}
              </Text>
              <Text category="p2" style={{marginBottom: 8}}>
                Landmark: {loading ? 'Loading...' : order?.land_mark}
              </Text>
              <Text category="p2" style={{marginBottom: 8}}>
                Contact Number: {loading ? 'Loading...' : order?.contact_number}
              </Text>
              <Text category="p2" style={{marginBottom: 8}}>
                Ordered at:{' '}
                {loading ? 'Loading...' : formatDate(order?.created_at)}
              </Text>
              <Text category="p2" style={{marginBottom: 8}}>
                Notes: {loading ? 'Loading...' : order?.note}
              </Text>
            </View>
            <Text category="p2" style={{marginBottom: 8}}>
              {loading ? 'Loading...' : <StatusTag>{order?.status}</StatusTag>}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 12,
              borderRadius: 4,
              flexDirection: 'row',
              marginTop: 12,
            }}>
            <View style={{flex: 1}}>
              <Text category="h6" style={{marginBottom: 8}}>
                Items
              </Text>

              {(order?.order_items || []).map(item => (
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
                      borderRadius: 50,
                      marginRight: 20,
                    }}
                  />
                  <View style={{flex: 1}}>
                    <Text
                      style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                      {item.product.name}
                    </Text>
                    <Text style={{}} numberOfLines={2}>
                      {item.product.description}
                    </Text>
                    <Text
                      style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                      Quantity: {item.quantity}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 120,
                      alignItems: 'flex-end',
                      paddingRight: 20,
                    }}>
                    <Text
                      style={{color: 'red', fontWeight: 'bold', fontSize: 16}}
                      numberOfLines={2}>
                      {formatCurrency(item.quantity * item.price)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 12,
              borderRadius: 4,
              flexDirection: 'row',
              marginTop: 12,
            }}>
            <View style={{flex: 1}}>
              <Text category="h6" style={{marginBottom: 8}}>
                Summary
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}>
                <Text>Sub Total: </Text>
                <Text style={{}}>
                  {loading ? 'Loading...' : formatCurrency(totalPrice())}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}>
                <Text>Other Charges: </Text>
                <Text style={{}}>
                  {loading ? 'Loading...' : formatCurrency(0)}
                </Text>
              </View>
              <Divider />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 8,
                }}>
                <Text>Total: </Text>
                <Text style={{fontWeight: 'bold'}}>
                  {loading ? 'Loading...' : formatCurrency(totalPrice())}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </MainContainer>
  );
}
