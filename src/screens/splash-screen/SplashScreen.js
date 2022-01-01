import React, {useContext, useEffect} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Auth from '../../api/Auth';
import {UserContext} from '../../context/UserContext';
const {width, height} = Dimensions.get('window');

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
    <View style={{width, height}}>
      <Image
        source={require('../../assets/images/bg-image.jpg')}
        resizeMode="cover"
        style={{width, height}}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.3)',
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="cover"
          style={{width: 100, height: 100}}
        />
        <Text style={{color: '#19303E', fontWeight: 'bold', fontSize: 26}}>
          Tour Guide App
        </Text>
      </View>
    </View>
  );
}
