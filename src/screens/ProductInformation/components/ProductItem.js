import React from 'react';
import {Image, Text, View} from 'react-native';
import {formatAPIImage, formatCurrency} from '../../../utils/formatter';

export default function ProductItem({product}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        paddingVertical: 16,
      }}>
      <View style={{flex: 1}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
          {product.name}
        </Text>
        <Text style={{fontSize: 12, marginTop: 4, marginBottom: 16}}>
          {product.description}
        </Text>
        <Text style={{color: 'black'}}>{formatCurrency(product.price)}</Text>
      </View>
      <Image
        defaultSource={require('../../../assets/images/logo.png')}
        source={formatAPIImage(product.image_path)}
        style={{width: 80, height: 80}}
      />
    </View>
  );
}
