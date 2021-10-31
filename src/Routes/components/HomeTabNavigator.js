import React from 'react';
import Dashboard from '../../screens/dashboard/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Transactions from '../../screens/transactions/Transactions';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../constants/Colors';
import Stats from '../../screens/stats/stats';

const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Dashboard':
              iconName = 'forumbee';
              break;
            case 'Transactions':
              iconName = 'list-alt';
              break;
            case 'Stats':
              iconName = 'chart-pie';
              break;
            default:
              break;
          }

          return <FontAwesomeIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLOR.primaryColor,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name="Stats" component={Stats} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
