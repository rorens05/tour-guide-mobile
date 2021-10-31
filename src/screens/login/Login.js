import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Divider, Icon, Layout, Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';
import {FormInput} from '../../components/input/FormInput';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../constants/Colors';
import LoadingIndicatorIcon from '../../components/loading-indicators/LoadingIndicatorIcon';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.replace('Dashboard');
    }, 3000);
  };

  return (
    <MainContainer>
      <View style={{padding: 20}}>
        <Text category="h5">Login</Text>
        <Text category="label" style={{color: 'gray', marginTop: 2}}>
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
              style={{color: COLOR.secondaryColor, marginBottom: 16}}>
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
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
