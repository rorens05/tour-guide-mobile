import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Divider, Layout, Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';

export default function Login({navigation}) {
  const navigateToDashboard = () => {
    navigation.replace('Dashboard');
  };

  return (
    <MainContainer>
      <Text style={styles.text} category="h3">
        Hello
      </Text>
      <Button onPress={navigateToDashboard}>LOGIN</Button>
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
