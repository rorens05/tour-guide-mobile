import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export default function SplashScreen({navigation}) {
  const init = async () => {
    navigation.replace('Login');
  };

  useEffect(() => {
    setTimeout(() => {
      init();
    }, 1000);
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
}
