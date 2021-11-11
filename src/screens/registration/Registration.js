import React, {useContext, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Divider, Icon, Layout, Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';
import {FormInput} from '../../components/input/FormInput';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../constants/Colors';
import LoadingIndicatorIcon from '../../components/loading-indicators/LoadingIndicatorIcon';
import Auth from '../../api/Auth';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../context/UserContext';

export default function Registration({navigation}) {
  const userContext = useContext(UserContext);
  const {setUser} = userContext.data;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (loading) return;
    setLoading(true);
    let response = await new Auth().registerUser({
      user: {
        email,
        contact_number: phone,
        first_name: firstName,
        last_name: lastName,
        password,
        password_confirmation: passwordConfirmation,
      },
    });
    if (response.ok) {
      AsyncStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigation.navigate('Dashboard');
    } else {
      console.log('SIGN UP ERROR', response);
      if (response?.data?.length > 0) {
        alert(response.data.join('\n'));
      }
    }
    setLoading(false);
  };

  return (
    <MainContainer>
      <KeyboardAvoidingView
        behavior={'height'}
        style={{padding: 20, flex: 1, justifyContent: 'space-between'}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View>
            <TouchableOpacity
              style={{width: 50, marginBottom: 16}}
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}>
              <Icon
                style={{width: 32, height: 32}}
                fill="white"
                name="arrow-back-outline"
              />
            </TouchableOpacity>
            <Text category="h5">Create an account</Text>
            <View style={{marginTop: 20}}>
              <FormInput
                label="First name"
                placeholder="First name"
                value={firstName}
                onChangeText={setFirstName}
                icon="person-outline"
              />
              <FormInput
                label="Last name"
                placeholder="Last name"
                value={lastName}
                onChangeText={setLastName}
                icon="person-outline"
              />
              <FormInput
                label="Contact number"
                placeholder="+639XXXXXXXXXX"
                value={phone}
                onChangeText={setPhone}
                icon="phone-call-outline"
              />
              <FormInput
                label="Email"
                placeholder="your@email.com"
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
              <FormInput
                label="Password Confirmation"
                type="password"
                placeholder="Password Confirmation"
                value={passwordConfirmation}
                icon="lock-outline"
                onChangeText={setPasswordConfirmation}
              />
            </View>
            <Button
              onPress={register}
              style={styles.button}
              appearance={loading ? 'outline' : 'filled'}
              accessoryLeft={loading ? LoadingIndicatorIcon : null}
              accessoryRight={props => (
                <Icon {...props} name="arrow-forward-outline" />
              )}>
              {loading ? 'LOADING' : 'SIGN UP'}
            </Button>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text category="label">{'Already have an account?'}</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Login')}>
              <Text
                category="label"
                style={{color: COLOR.secondaryColor, marginLeft: 4}}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
