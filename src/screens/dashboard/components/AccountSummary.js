import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../../constants/Colors';
import STYLES from '../../../constants/Styles';

export default function AccountSummary() {
  return (
    <View style={{marginHorizontal: 16, marginBottom: 28}}>
      <Text category="label">Account</Text>
      <TouchableOpacity
        style={STYLES.shadow}
        activeOpacity={0.9}
        onPress={() => alert('View all accounts')}>
        <View style={[styles.accountContainer]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Text category="label" style={[styles.accountText]}>
                Laurence Bautista
              </Text>
              <Text category="c1" style={[styles.accountText]}>
                All accounts
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon
                style={styles.icon}
                fill="white"
                name="arrow-forward-outline"
              />
            </View>
          </View>
          <View style={[styles.availableBalance]}>
            <Text category="c1" style={[styles.accountText]}>
              Available Balance
            </Text>
            <Text category="s1" style={[styles.accountText]}>
              PHP 1,378.31
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  accountContainer: {
    backgroundColor: COLOR.primaryColor,
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  accountText: {
    color: 'white',
  },
  availableBalance: {
    marginTop: 16,
    alignItems: 'flex-end',
  },
  icon: {
    width: 32,
    height: 32,
  },
  iconContainer: {},
});
