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

const BackIcon = props => <Icon {...props} name="arrow-back" />;
const MenuIcon = props => <Icon {...props} name="menu-2-outline" />;

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
            source={require('../assets/images/icon.png')}
          />
        </TouchableOpacity>
      )}
      <Text {...props} category="s1">
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

  return (
    <SafeAreaView style={{flex: 1}}>
      {title && (
        <TopNavigation
          title={MenuTitle}
          alignment=""
          accessoryLeft={BackAction}
          accessoryRight={BackAction}
        />
      )}
      <Divider />
      <Layout level="1" style={{flex: 1, paddingVertical: 16}}>
        {children}
      </Layout>
    </SafeAreaView>
  );
}
