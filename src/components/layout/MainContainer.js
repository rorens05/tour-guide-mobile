import {NavigationContext} from '@react-navigation/core';
import {
  Avatar,
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../constants/Colors';

const BackIcon = props => (
  <Icon
    {...props}
    name="arrow-back"
    style={{tintColor: 'white', height: 24, width: 24}}
  />
);
const ProfileIcon = props => (
  <Icon
    {...props}
    name="options-2-outline"
    style={{tintColor: 'white', height: 24, width: 24}}
  />
);
const MenuIcon = props => (
  <Icon
    {...props}
    name="menu-2-outline"
    style={{tintColor: 'white', height: 24, width: 24}}
  />
);

export default function MainContainer({children, backIcon = true, title}) {
  const navigation = useContext(NavigationContext);
  const navigateBack = () => {
    navigation.goBack();
  };

  const MenuTitle = props => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {!backIcon && (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.9}>
          <Avatar
            style={{marginRight: 8}}
            source={require('../../assets/images/logo.png')}
          />
        </TouchableOpacity>
      )}
      <Text
        {...props}
        category="s1"
        style={{color: 'white', fontWeight: 'bold'}}>
        {title}
      </Text>
    </View>
  );

  const BackAction = () => {
    if (backIcon) {
      return <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;
    }
    return null;
  };

  const ProfileAction = () => {
    return (
      <TopNavigationAction
        icon={ProfileIcon}
        onPress={() => navigation.navigate('Settings')}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {title && (
        <TopNavigation
          style={{backgroundColor: COLOR.primaryColor}}
          title={MenuTitle}
          alignment=""
          accessoryLeft={BackAction}
          // accessoryRight={ProfileAction}
        />
      )}
      <Layout level="1" style={{flex: 1, backgroundColor: '#E9E6E1'}}>
        {children}
      </Layout>
    </SafeAreaView>
  );
}
