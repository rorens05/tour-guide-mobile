import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Button, Linking, Text} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SideMenuItem from './components/SideMenuItem';

export default function SideMenu(props) {
  const {navigation} = props;
  return (
    <DrawerContentScrollView {...props}>
      <SideMenuItem
        title={'Home'}
        icon={'user-circle-o'}
        onPress={() => {
          navigation.navigate('Home');
          navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}
