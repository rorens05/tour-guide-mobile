import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import STYLES from '../../../constants/Styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function HomeOptions() {
  return (
    <View>
      <Text category="label" style={{marginHorizontal: 16}}>
        Services
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 16,
          borderRadius: 8,
          ...STYLES.shadow,
          paddingTop: 28,
          marginBottom: 32,
          marginHorizontal: 16,
        }}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <TouchableOpacity activeOpacity={0.9} style={styles.column}>
              <FontAwesomeIcon name="table" style={styles.icons} />
              <Text style={styles.labels}>Transactions</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={styles.column}>
              <FontAwesomeIcon name="plus-square-o" style={styles.icons} />
              <Text style={styles.labels}>Create Income</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={styles.column}>
              <FontAwesomeIcon name="minus-square-o" style={styles.icons} />
              <Text style={styles.labels}>Create Expenses</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <TouchableOpacity activeOpacity={0.9} style={styles.column}>
              <FontAwesome5Icon
                name="hand-holding-medical"
                style={styles.icons}
              />
              <Text style={styles.labels}>Transfers</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={styles.column}>
              <FontAwesome5Icon name="coins" style={styles.icons} />
              <Text style={styles.labels}>Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={styles.column}>
              <FontAwesomeIcon name="bar-chart-o" style={styles.icons} />
              <Text style={styles.labels}>Stats</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
