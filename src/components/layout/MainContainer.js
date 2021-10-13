import {NavigationContext} from '@react-navigation/core';
import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

export default function MainContainer({children, backIcon = true, title}) {
  const navigation = useContext(NavigationContext);
  const navigateBack = () => {
    navigation.goBack();
  };

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
          title={title}
          alignment="center"
          accessoryLeft={BackAction}
        />
      )}
      <Layout>{children}</Layout>
    </SafeAreaView>
  );
}
