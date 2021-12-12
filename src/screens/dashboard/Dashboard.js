import {Icon, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {chunk} from 'lodash';
import {
  Dimensions,
  Image,
  RefreshControl,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';
import AccountSummary from './components/AccountSummary';
import HomeOptions from './components/HomeOptions';
import CurrentMonthSummary from './components/CurrentMonthSummary';
import PlantItem from './components/PlantItem';
import Products from '../../api/Products';

const {width, height} = Dimensions.get('window');

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    const response = await new Products().index();
    console.log({response});
    if (response.ok) {
      setProducts(response.data);
    } else {
      alert('Something went wrong while fetching all the plants');
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainContainer title="Home" backIcon={false}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getProducts} />
        }>
        <View
          style={{
            backgroundColor: '#668B7A',
            marginHorizontal: 20,
            marginVertical: 12,
            borderRadius: 30,
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
              marginBottom: 4,
            }}>
            Today Tips
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: 20,
            }}>
            Give enough water to maximize plants growth
          </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: width,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: COLOR.primaryColor,
                  fontWeight: 'bold',
                  paddingHorizontal: 15,
                }}>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: COLOR.primaryColor,
                  fontWeight: 'bold',
                  paddingHorizontal: 15,
                }}>
                Popular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: COLOR.primaryColor,
                  fontWeight: 'bold',
                  paddingHorizontal: 15,
                }}>
                New Arrivals
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: COLOR.primaryColor,
                  fontWeight: 'bold',
                  paddingHorizontal: 15,
                }}>
                Best Seller
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{marginBottom: 40}}>
          {chunk(products, 2).map((row, index) => (
            <View
              key={index}
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              {row.map((item, index) => {
                return <PlantItem key={index} item={item} />;
              })}
              {row.length == 1 && (
                <View style={{width: width * 0.4, marginTop: 20}} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </MainContainer>
  );
}
