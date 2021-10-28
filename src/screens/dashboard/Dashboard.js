import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';
import AccountSummary from './components/AccountSummary';
import HomeOptions from './components/HomeOptions';
import CurrentMonthSummary from './components/CurrentMonthSummary';

export default function Dashboard() {
  return (
    <MainContainer title="Dashboard" backIcon={false}>
      <ScrollView>
        <AccountSummary />
        <CurrentMonthSummary />
        <HomeOptions />
      </ScrollView>
    </MainContainer>
  );
}
