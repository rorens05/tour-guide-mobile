import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules

export default function Settings({navigation}) {
  const logout = async () => {
    await AsyncStorage.clear();
    RNRestart.Restart();
  };

  return (
    <MainContainer>
      <Text style={styles.text} category="h3">
        Settings
      </Text>
      <View>
        <TouchableOpacity onPress={logout}>
          <Text category="h6" style={{}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
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
