import {Layout, Text} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import STYLES from '../../../constants/Styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationContext} from '@react-navigation/core';

export default function HomeOptions() {
  const navigation = useContext(NavigationContext);

  return (
    <View>
      <Text category="label" style={{marginHorizontal: 16}}>
        Services
      </Text>
      <Layout
        level="2"
        style={{
          marginTop: 16,
          borderRadius: 8,
          ...STYLES.shadow,
          paddingTop: 28,
          marginBottom: 32,
          marginHorizontal: 16,
        }}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}
              onPress={() => navigation.navigate('Transactions')}>
              <FontAwesomeIcon name="table" style={styles.icons} />
              <Text style={styles.labels}>Transactions</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}
              onPress={() =>
                navigation.navigate('CreateTransaction', {type: 'INCOME'})
              }>
              <FontAwesomeIcon name="plus-square-o" style={styles.icons} />
              <Text style={styles.labels}>Create Income</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}
              onPress={() =>
                navigation.navigate('CreateTransaction', {type: 'EXPENSES'})
              }>
              <FontAwesomeIcon name="minus-square-o" style={styles.icons} />
              <Text style={styles.labels}>Create Expenses</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}
              onPress={() => navigation.navigate('Transfers')}>
              <FontAwesome5Icon
                name="hand-holding-medical"
                style={styles.icons}
              />
              <Text style={styles.labels}>Transfers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}
              onPress={() => navigation.navigate('Accounts')}>
              <FontAwesome5Icon name="coins" style={styles.icons} />
              <Text style={styles.labels}>Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}
              onPress={() => navigation.navigate('Stats')}>
              <FontAwesomeIcon name="bar-chart-o" style={styles.icons} />
              <Text style={styles.labels}>Stats</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}
              onPress={() => navigation.navigate('Categories')}>
              <FontAwesome5Icon name="boxes" style={styles.icons} />
              <Text style={styles.labels}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}
              onPress={() => navigation.navigate('Tags')}>
              <FontAwesome5Icon name="tags" style={styles.icons} />
              <Text style={styles.labels}>Tags</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.column}></TouchableOpacity>
          </View>
        </View>
      </Layout>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-around'},
  column: {alignItems: 'center', width: 90},
  icons: {
    fontSize: 32,
    color: COLOR.secondaryColor,
    textAlign: 'center',
    height: 36,
  },
  rowContainer: {marginBottom: 28},
  labels: {fontSize: 11, textAlign: 'center'},
});
