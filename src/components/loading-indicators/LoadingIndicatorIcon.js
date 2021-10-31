import {Spinner} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';

export default function LoadingIndicatorIcon() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Spinner size="small" />
    </View>
  );
}
