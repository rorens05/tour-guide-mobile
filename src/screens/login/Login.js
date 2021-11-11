import React, {useContext, useState, useEffect} from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Divider, Icon, Layout, Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';
import {FormInput} from '../../components/input/FormInput';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../constants/Colors';
import LoadingIndicatorIcon from '../../components/loading-indicators/LoadingIndicatorIcon';
import Auth from '../../api/Auth';
import {UserContext} from '../../context/UserContext';
import AsyncStorage from '@react-native-community/async-storage';

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
      <View style={{padding: 20, flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text category="h5">Login</Text>
          <Text category="label" style={{marginTop: 2, marginBottom: 12}}>
            Please sign in to continue
          </Text>
          <View style={{marginTop: 20}}>
            <FormInput
              label="Email"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              icon="email-outline"
            />
            <FormInput
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              icon="lock-outline"
              onChangeText={setPassword}
            />
            <TouchableOpacity activeOpacity={0.9}>
              <Text
                category="label"
                style={{
                  color: COLOR.secondaryColor,
                  marginBottom: 16,
                  textAlign: 'right',
                }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            onPress={login}
            style={styles.button}
            appearance={loading ? 'outline' : 'filled'}
            accessoryLeft={loading ? LoadingIndicatorIcon : null}
            accessoryRight={props => (
              <Icon {...props} name="arrow-forward-outline" />
            )}>
            {loading ? 'LOADING' : 'LOGIN'}
          </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text category="label">{"Don't have an account?"}</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Registration')}>
            <Text
              category="label"
              style={{color: COLOR.secondaryColor, marginLeft: 4}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
