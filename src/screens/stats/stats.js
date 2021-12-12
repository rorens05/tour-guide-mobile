import React, {useEffect, useState} from 'react';

import {
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';
import Orders from '../../api/Orders';
import {useIsFocused} from '@react-navigation/core';
import COLOR from '../../constants/Colors';
import {formatDate} from '../../utils/formatter';
import StatusTag from '../../components/status_tag/StatusTag';

export default function Stats({navigation}) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  const getOrders = async () => {
    setLoading(true);
    let response = await new Orders().index();
    setLoading(false);
    if (response.ok) {
      setOrders(response.data);
    } else {
      alert('Something went wrong while fetching the items');
    }
  };

  useEffect(() => {
    getOrders();
  }, [isFocused]);

  return (
    <MainContainer title="Order History" backIcon={false}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={getOrders} refreshing={loading} />
        }>
        {orders.length == 0 && !loading && (
          <Text
            style={{
              margin: 20,
              textAlign: 'center',
              fontWeight: 'bold',
              color: COLOR.primaryColor,
            }}>
            Your orders will appear here...
          </Text>
        )}
        {orders.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('OrderHistoryInformation', {id: item.id})
              }
              activeOpacity={0.9}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  paddingHorizontal: 12,
                  backgroundColor: 'white',
                  borderBottomColor: 'gray',
                  borderBottomWidth: index < orders.length - 1 ? 1 : 0,
                }}>
                <View style={{flex: 1}}>
                  <Text style={{fontWeight: 'bold'}}>
                    #{item.reference_number}
                  </Text>
                  <Text>Date Ordered: {formatDate(item.created_at)}</Text>
                </View>
                <StatusTag>{item.status}</StatusTag>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 2,
  },
});
