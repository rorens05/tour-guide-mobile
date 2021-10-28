import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import STYLES from '../../../constants/Styles';

export default function CurrentMonthSummary() {
  return (
    <View
      style={{
        marginBottom: 32,
      }}>
      <Text category="label" style={{marginHorizontal: 16}}>
        Current Month Summary
      </Text>
      <View
        style={{
          marginTop: 12,
          marginHorizontal: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.card}>
          <View style={styles.summaryValue}>
            <FontAwesomeIcon
              name="money"
              style={[styles.icons, {color: 'blue'}]}
            />
            <Text style={{color: 'blue'}} category="label">
              PHP 342,028.81
            </Text>
          </View>
          <Text style={{fontSize: 11, textAlign: 'right'}}>Total income</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.summaryValue}>
            <FontAwesomeIcon
              name="shopping-bag"
              style={[styles.icons, {color: 'red'}]}
            />
            <Text style={{color: 'red'}} category="label">
              PHP 34,121.94
            </Text>
          </View>
          <Text style={{fontSize: 11, textAlign: 'right'}}>Total expenses</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    width: '48%',
    borderRadius: 4,
    ...STYLES.shadow,
    backgroundColor: 'white',
  },
  icons: {
    fontSize: 20,
    color: 'blue',
  },
  summaryValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
