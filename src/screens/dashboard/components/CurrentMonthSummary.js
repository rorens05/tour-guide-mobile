import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import COLOR from '../../../constants/Colors';
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
        <Layout level="2" style={styles.card}>
          <View style={styles.summaryValue}>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: COLOR.primaryColor},
              ]}>
              <FontAwesomeIcon
                name="money"
                style={[styles.icons, {color: 'white'}]}
              />
            </View>
            <Text style={{color: COLOR.primaryColor}} category="label">
              PHP 342,028.81
            </Text>
          </View>
          <Text style={{fontSize: 11, textAlign: 'right'}}>Total income</Text>
        </Layout>
        <Layout level="2" style={styles.card}>
          <View style={styles.summaryValue}>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: COLOR.secondaryColor},
              ]}>
              <FontAwesomeIcon
                name="shopping-bag"
                style={[styles.icons, {color: 'white'}]}
              />
            </View>
            <Text style={{color: COLOR.secondaryColor}} category="label">
              PHP 34,121.94
            </Text>
          </View>
          <Text style={{fontSize: 11, textAlign: 'right'}}>Total expenses</Text>
        </Layout>
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
  },
  icons: {
    fontSize: 16,
    color: 'blue',
  },
  iconContainer: {
    borderRadius: 100,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
