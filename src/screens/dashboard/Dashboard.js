import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';
import AccountSummary from './components/AccountSummary';
import HomeOptions from './components/HomeOptions';
import CurrentMonthSummary from './components/CurrentMonthSummary';
import PlantItem from './components/PlantItem';

const {width, height} = Dimensions.get('window');

export default function Dashboard() {
  return (
    <MainContainer title="Home" backIcon={false}>
      <ScrollView>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <PlantItem />
            <PlantItem />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <PlantItem />
            <PlantItem />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <PlantItem />
            <PlantItem />
          </View>
        </View>
      </ScrollView>
    </MainContainer>
  );
}
