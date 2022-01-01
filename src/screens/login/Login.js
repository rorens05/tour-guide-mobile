import React, {useContext, useState, useEffect} from 'react';

import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Divider, Icon, Layout, Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';
import {FormInput} from '../../components/input/FormInput';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../constants/Colors';
import LoadingIndicatorIcon from '../../components/loading-indicators/LoadingIndicatorIcon';
import Auth from '../../api/Auth';
import {UserContext} from '../../context/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import {BlurView} from '@react-native-community/blur';
const {width, height} = Dimensions.get('window');

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);
  const {user, setUser} = userContext.data;
  const login = async () => {
    if (loading) return;
    setLoading(true);
    let response = await new Auth().login({email, password});
    if (response.ok) {
      AsyncStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid email or password!');
    }
    setLoading(false);
  };

  useEffect(() => {}, []);

  return (
    <MainContainer>
      <Image
        source={require('../../assets/images/bg-image.jpg')}
        style={{width, height, position: 'absolute'}}
        resizeMode="cover"
      />

      <ScrollView>
        <View
          style={{
            padding: 30,
            flex: 1,
            marginTop: 100,
            marginHorizontal: 30,
            marginBottom: 50,
            borderRadius: 30,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <BlurView
            blurType="light"
            style={{
              position: 'absolute',
              width,
              height,
            }}
          />
          <View
            style={{
              position: 'absolute',
              width,
              height,
              backgroundColor: 'white',
              opacity: 0.1,
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
              marginBottom: 60,
            }}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <View style={{marginTop: 20}}>
              <FormInput
                // label="Email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                icon="email-outline"
              />
              <FormInput
                // label="Password"
                type="password"
                placeholder="Password"
                value={password}
                icon="lock-outline"
                onChangeText={setPassword}
              />
            </View>
            <Button
              onPress={login}
              appearance="outline"
              status="basic"
              style={styles.button}
              accessoryLeft={loading ? LoadingIndicatorIcon : null}
              accessoryRight={props => (
                <Icon {...props} name="arrow-forward-outline" />
              )}>
              {loading ? 'LOADING' : 'Sign In'}
            </Button>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 50,
              }}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Registration')}>
                <Text
                  category="label"
                  style={{color: 'gray', fontSize: 20, marginLeft: 4}}>
                  Create an Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 100,
    backgroundColor: '#E9E6E1',
    marginTop: 10,
  },
});
