import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash-screen/SplashScreen';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration';
import Dashboard from '../screens/dashboard/Dashboard';

const {Navigator, Screen} = createStackNavigator();

const MainNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="SplashScreen" component={SplashScreen} />
    <Screen name="Login" component={Login} />
    <Screen name="Registration" component={Registration} />
    <Screen name="Dashboard" component={Dashboard} />
  </Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default Routes;
