import React, {useContext, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import Auth from '../../api/Auth';
import {UserContext} from '../../context/UserContext';

export default function SplashScreen({navigation}) {
  const userContext = useContext(UserContext);
  const {setUser} = userContext.data;

  const getProfile = async () => {
    let response = await new Auth().getProfile();
    if (response.ok) {
      setUser(response.data);
      navigation.replace('Dashboard');
    } else {
      navigation.replace('Login');
    }
  };

  const init = async () => {
    getProfile();
  };

  useEffect(() => {
    setTimeout(() => {
      init();
    }, 1000);
  }, []);

  return (
    <View>
      <Text>Testing</Text>
    </View>
  );
}
