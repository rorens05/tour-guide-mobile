import React, {useContext} from 'react';

import {StyleSheet, View} from 'react-native';
import {Divider, Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules
import {UserContext} from '../../context/UserContext';

export default function Settings({navigation}) {
  const userContext = useContext(UserContext);
  const {user} = userContext.data;
  console.log({user});

  const logout = async () => {
    await AsyncStorage.clear();
    RNRestart.Restart();
  };

  return (
    <MainContainer title="Profile" backIcon={false}>
      <View style={{padding: 12}}>
        <View style={{flexDirection: 'row', padding: 8}}>
          <Text>Name</Text>
          <Text
            style={{
              fontWeight: 'bold',
              flex: 1,
              textAlign: 'right',
            }}>{`${user?.first_name} ${user?.last_name}`}</Text>
        </View>
        <Divider />
        <View style={{flexDirection: 'row', padding: 8}}>
          <Text>Email</Text>
          <Text
            style={{
              fontWeight: 'bold',
              flex: 1,
              textAlign: 'right',
            }}>{`${user?.email}`}</Text>
        </View>
        <Divider />

        <View style={{flexDirection: 'row', padding: 8}}>
          <Text>Contact Number</Text>
          <Text
            style={{
              fontWeight: 'bold',
              flex: 1,
              textAlign: 'right',
            }}>{`${user?.contact_number}`}</Text>
        </View>
        <Divider />
        <TouchableOpacity onPress={logout}>
          <Text category="h6" style={{textAlign: 'center', marginTop: 24}}>
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
