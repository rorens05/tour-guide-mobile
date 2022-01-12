import {NavigationContext} from '@react-navigation/core';
import {Icon} from '@ui-kitten/components';
import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Linking,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carts from '../../api/Carts';
import PlacesAPI from '../../api/PlacesAPI';
import Products from '../../api/Products';
import {FormInput} from '../../components/input/FormInput';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';
import {
  formatAPIImage,
  formatCurrency,
  formatDate,
} from '../../utils/formatter';
import {getParams} from '../../utils/navigationHelper';
import ActionButton from './components/ActionButton';
import AddReview from './components/AddReview';
import ProductItem from './components/ProductItem';
import ReviewItem from './components/ReviewItem';
import StarRating from './components/StarRating';
const {width, height} = Dimensions.get('screen');
export default function ProductInformation() {
  const navigation = useContext(NavigationContext);

  const [loading, setLoading] = useState(false);
  const [place, setPlace] = useState(null);
  const {id} = getParams(navigation);

  const fetchPlace = async () => {
    setLoading(true);
    let response = await new PlacesAPI().place(id);
    console.log('response', response);
    console.log({response});
    if (response.ok) {
      setPlace(response.data);
    } else {
      alert('something went wrong while fetching place information');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPlace();
  }, []);

  const updateReview = async (content, rating) => {
    setLoading(true);
    let response = await new PlacesAPI().updateReview(id, {content, rating});
    setLoading(false);
    if (response.ok) {
      await fetchPlace();
      alert('Review has been submitted successfully');
    } else {
      alert('something went wrong while updating review');
    }
  };

  const openLatLongInGoogleMap = () => {
    const scheme =
      Platform.select({
        ios: 'maps:0,0?q=',
        android: 'geo:0,0?q=',
      }) + place.latlong;
    const latLongUrl = Platform.select({
      ios: encodeURI(scheme),
      android: encodeURI(`${scheme}(${place.name})`),
    });
    Linking.openURL(latLongUrl);
  };

  const openPhoneNumber = () => {
    const phoneNumber = place.contact_number;
    const phoneNumberUrl = Platform.select({
      ios: `telprompt:${phoneNumber}`,
      android: `tel:${phoneNumber}`,
    });
    Linking.openURL(phoneNumberUrl);
  };

  const openWebsite = () => {
    const website = place.website;
    const websiteUrl = Platform.select({
      ios: `${website}`,
      android: `${website}`,
    });
    Linking.openURL(websiteUrl);
  };

  return (
    <MainContainer title={place?.name || 'Place Information'}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchPlace} />
        }>
        {place && (
          <View style={{backgroundColor: 'white'}}>
            <Image
              source={formatAPIImage(place.image_path)}
              style={{width: '100%', height: 300}}
            />
            <View style={{padding: 12}}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                {place.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>{`${formatDate(place.created_at)} | `}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <StarRating
                    ratings={place.ratings}
                    review_count={place.review_count}
                  />
                  <Text
                    style={{
                      marginTop: 0,
                    }}>{`${place.review_count} reviews`}</Text>
                </View>
              </View>
              <Text style={{marginTop: 12, color: 'black'}}>
                {place.description}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                margin: 12,
                borderTopColor: '#e0e0e0',
                borderBottomColor: '#e0e0e0',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                paddingVertical: 12,
              }}>
              <ActionButton
                icon="globe-outline"
                text="Visit Website"
                onPress={() => openWebsite()}
              />
              <ActionButton
                icon="phone-call-outline"
                text="Call"
                onPress={() => openPhoneNumber()}
              />
              <ActionButton
                icon="map-outline"
                text="View in Map"
                onPress={() => openLatLongInGoogleMap()}
              />
            </View>
            {place.products && place.products.length > 0 && (
              <View style={{margin: 12, marginTop: 32}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                  Menus
                </Text>
                {place.products.map((product, index) => (
                  <ProductItem product={product} key={index} />
                ))}
              </View>
            )}
            <AddReview
              fetchPlace={fetchPlace}
              place={place}
              updateReview={updateReview}
            />
            {place.reviews && (
              <View style={{margin: 12, marginTop: 32}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                  Reviews
                </Text>
                {place.reviews.length == 0 && (
                  <Text>Reviews will appear here...</Text>
                )}
                {place.reviews.map((review, index) => (
                  <ReviewItem review={review} key={index} />
                ))}
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </MainContainer>
  );
}
