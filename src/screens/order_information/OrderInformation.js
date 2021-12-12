import {Button, Divider, Icon, Text} from '@ui-kitten/components';
import React, {useContext, useState} from 'react';
import {FormInput} from '../../components/input/FormInput';
import {Image, ScrollView, View} from 'react-native';
import MainContainer from '../../components/layout/MainContainer';
import LoadingIndicatorIcon from '../../components/loading-indicators/LoadingIndicatorIcon';
import {NavigationContext} from '@react-navigation/core';
import {getParams} from '../../utils/navigationHelper';
import {formatAPIImage, formatCurrency} from '../../utils/formatter';
import COLOR from '../../constants/Colors';
import Orders from '../../api/Orders';

export default function OrderInformation() {
  const navigation = useContext(NavigationContext);
  const {carts} = getParams(navigation);

  const [loading, setLoading] = useState(false);
  const [delivery_address, setDelivery_address] = useState('');
  const [land_mark, setLand_mark] = useState('');
  const [note, setNote] = useState('');
  const [contact_number, setContact_number] = useState('');

  const totalPrice = () => {
    return (carts || []).reduce((total, item) => {
      return total + (item.quantity || 0) * (item?.product?.price || 0);
    }, 0);
  };

  const checkout = async () => {
    setLoading(true);
    let response = await new Orders().create({
      order: {
        delivery_address,
        land_mark,
        contact_number,
        note,
        payment_method: 'cash_on_delivery',
      },
    });
    if (response.ok) {
      alert('Order successfully created');
      navigation.replace('Dashboard', {
        screen: 'Home',
        params: {screen: 'Orders'},
      });
    } else {
      alert(response?.data?.join('\n'));
      console.log('Error', response);
    }
    setLoading(false);
  };

  return (
    <MainContainer title="Order Summary">
      <View style={{padding: 12, justifyContent: 'space-between', flex: 1}}>
        <ScrollView>
          <View style={{marginTop: 0}}>
            <Text category="h5" style={{marginBottom: 8}}>
              Delivery Information
            </Text>
            <FormInput
              label="Delivery Address"
              placeholder="Delivery Address"
              value={delivery_address}
              onChangeText={text => setDelivery_address(text)}
              icon="home-outline"
            />
            <FormInput
              label="Land Mark"
              placeholder="Land Mark"
              value={land_mark}
              onChangeText={text => setLand_mark(text)}
              icon="bookmark-outline"
            />
            <FormInput
              label="Contact number"
              placeholder="Contact number"
              value={contact_number}
              onChangeText={text => setContact_number(text)}
              icon="phone-call-outline"
            />
            <Divider />
            <Text category="h5" style={{marginVertical: 8}}>
              Items
            </Text>

            {(carts || []).map(item => (
              <View
                key={item.id}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingVertical: 30,
                  paddingVertical: 10,
                }}>
                <Image
                  source={formatAPIImage(item.product.image_path)}
                  style={{
                    width: 60,
                    height: 60,
                    marginLeft: 20,
                    borderRadius: 50,
                    marginRight: 20,
                  }}
                />
                <View style={{flex: 1}}>
                  <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                    {item.product.name}
                  </Text>
                  <Text style={{}} numberOfLines={2}>
                    {item.product.description}
                  </Text>
                  <Text style={{fontWeight: 'bold', color: COLOR.primaryColor}}>
                    Quantity: {item.quantity}
                  </Text>
                </View>
                <View
                  style={{
                    width: 120,
                    alignItems: 'flex-end',
                    paddingRight: 20,
                  }}>
                  <Text
                    style={{color: 'red', fontWeight: 'bold', fontSize: 16}}
                    numberOfLines={2}>
                    {formatCurrency(item.quantity * item.product.price)}
                  </Text>
                </View>
              </View>
            ))}

            <Divider />
            <Text category="h5" style={{marginVertical: 8}}>
              Note
            </Text>
            <FormInput
              placeholder="Note"
              value={note}
              textStyle={{minHeight: 64}}
              multiline={true}
              onChangeText={text => setNote(text)}
            />
          </View>
        </ScrollView>
        <Button
          onPress={checkout}
          disabled={loading}
          style={{}}
          appearance={loading ? 'outline' : 'filled'}
          accessoryLeft={loading ? LoadingIndicatorIcon : null}
          accessoryRight={props => (
            <Icon {...props} name="arrow-forward-outline" />
          )}>
          {`CHECKOUT PHP ${totalPrice().toFixed(2)}`}
        </Button>
      </View>
    </MainContainer>
  );
}
