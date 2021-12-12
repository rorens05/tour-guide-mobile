import {NavigationContext} from '@react-navigation/core';
import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carts from '../../api/Carts';
import Products from '../../api/Products';
import {FormInput} from '../../components/input/FormInput';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';
import {formatAPIImage, formatCurrency} from '../../utils/formatter';
import {getParams} from '../../utils/navigationHelper';
const {width, height} = Dimensions.get('screen');
export default function ProductInformation() {
  const navigation = useContext(NavigationContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const {id} = getParams(navigation);

  const fetchProduct = async () => {
    setLoading(true);
    let response = await new Products().show(id);
    setLoading(false);
    if (response.ok) {
      setProduct(response.data);
    } else {
      alert('Something went wrong while fetching product information');
    }
    setLoading(false);
  };

  const addToCart = async () => {
    setLoading(true);
    let response = await new Carts().create({
      product_id: id,
      quantity,
    });
    setLoading(false);
    if (response.ok) {
      navigation.navigate('Dashboard', {
        screen: 'Home',
        params: {screen: 'Cart'},
      });
    } else {
      alert(response.data.join('\n'));
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <MainContainer title={product?.name || 'Product Information'}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchProduct} />
        }>
        <View style={{alignItems: 'center'}}>
          <Image
            source={formatAPIImage(product?.image_path)}
            style={{width: '80%', height: 400}}
          />
        </View>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 12,
            }}>
            {product?.name || 'Loading'}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', marginBottom: 8}}>
            {formatCurrency(product?.price)}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', marginBottom: 20}}>
            {product?.description || 'Loading'}
          </Text>
          <FormInput
            label="Quantiy"
            placeholder="Quantity"
            value={quantity.toString()}
            keyboardType="number-pad"
            onChangeText={text => setQuantity(text)}
            icon="copy-outline"
          />
        </View>
      </ScrollView>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity disabled={loading} onPress={addToCart}>
          <Text
            style={{
              backgroundColor: loading ? 'gray' : COLOR.primaryColor,
              width: width,
              color: 'white',
              // borderRadius: 20,
              paddingHorizontal: 40,
              paddingVertical: 16,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
}
