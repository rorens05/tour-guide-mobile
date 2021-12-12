import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash-screen/SplashScreen';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration';
import SideMenu from '../components/sidemenu/SideMenu';
import HomeTabNavigator from './components/HomeTabNavigator';
import CreateTransactions from '../screens/create_transaction/CreateTransaction';
import Accounts from '../screens/accounts/Accounts';
import Transfers from '../screens/transfers/Transfers';
import Categories from '../screens/categories/Categories';
import Tags from '../screens/tags/Tags';
import Settings from '../screens/settings/Settings';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import ProductInformation from '../screens/ProductInformation/ProductInformation';
import OrderInformation from '../screens/order_information/OrderInformation';
import OrderHistoryInformation from '../screens/order_history_information/OrderHistoryInformation';

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
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
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
    <Screen name="CreateTransaction" component={CreateTransactions} />
    <Screen name="Accounts" component={Accounts} />
    <Screen name="OrderInformation" component={OrderInformation} />
    <Screen name="Transfers" component={Transfers} />
    <Screen name="Categories" component={Categories} />
    <Screen name="Tags" component={Tags} />
    <Screen name="Settings" component={Settings} />
    <Screen name="ProductInformation" component={ProductInformation} />
    <Screen
      name="OrderHistoryInformation"
      component={OrderHistoryInformation}
    />
  </Navigator>
);

const Routes = () => (
  <NavigationContainer theme={DefaultTheme}>
    <MainNavigator />
  </NavigationContainer>
);

export default Routes;
