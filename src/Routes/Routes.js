import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash-screen/SplashScreen';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration';
import Dashboard from '../screens/dashboard/Dashboard';
import SideMenu from '../components/sidemenu/SideMenu';

const {Navigator, Screen} = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen name="Home" component={Dashboard} />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="SplashScreen" component={SplashScreen} />
    <Screen name="Login" component={Login} />
    <Screen name="Registration" component={Registration} />
    <Screen name="Dashboard" component={HomeDrawer} />
  </Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default Routes;
