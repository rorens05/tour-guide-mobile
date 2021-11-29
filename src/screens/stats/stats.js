import React from 'react';

import {StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';

export default function Stats({navigation}) {
  return (
    <MainContainer>
      <Text style={styles.text} category="h3">
        Orders
      </Text>
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
