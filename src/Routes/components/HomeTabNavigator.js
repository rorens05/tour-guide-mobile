import React from 'react';
import Dashboard from '../../screens/dashboard/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Transactions from '../../screens/transactions/Transactions';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../constants/Colors';
import Stats from '../../screens/stats/stats';
import Settings from '../../screens/settings/Settings';

const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Cart':
              iconName = 'shopping-cart';
              break;
            case 'Orders':
              iconName = 'archive';
              break;
            case 'Profile':
              iconName = 'user-circle';
              break;
            default:
              break;
          }

          return <FontAwesomeIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLOR.primaryColor,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Dashboard} />
      {/* <Tab.Screen name="Cart" component={Transactions} />
      <Tab.Screen name="Orders" component={Stats} /> */}
      <Tab.Screen name="Profile" component={Settings} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
