import {Icon, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {chunk} from 'lodash';
import {
  Dimensions,
  Image,
  RefreshControl,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {formatAPIImage} from '../../utils/formatter';
import MainContainer from '../../components/layout/MainContainer';
import COLOR from '../../constants/Colors';
import AccountSummary from './components/AccountSummary';
import HomeOptions from './components/HomeOptions';
import CurrentMonthSummary from './components/CurrentMonthSummary';
import Products from '../../api/Products';
import PlacesAPI from '../../api/PlacesAPI';

const {width, height} = Dimensions.get('window');

export default function Dashboard({navigation}) {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const getPlaceCategories = async () => {
    setLoading(true);
    let response = await new PlacesAPI().index();
    if (response.ok) {
      setCategories(response.data);
      if (response.data.length > 0) {
        setSelectedCategory(response.data[0]);
      }
    } else {
      alert('Something went wrong while fetching place categories');
    }
    console.log({response});
    setLoading(false);
  };

  useEffect(() => {
    getPlaceCategories();
  }, []);

  return (
    <MainContainer title="Tour Guide App" backIcon={false}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getPlaceCategories} />
        }>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: width,
              backgroundColor: COLOR.primaryColor,
              borderTopWidth: 4,
              borderTopColor: '#0022c9',
            }}>
            {categories.map((category, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedCategory(category)}
                  key={index}>
                  <Text
                    style={{
                      padding: 8,
                      backgroundColor: COLOR.primaryColor,
                      color: 'white',
                      fontWeight: 'bold',
                      paddingHorizontal: 15,
                      borderBottomWidth: 4,
                      borderBottomColor:
                        selectedCategory === category
                          ? '#f542f2'
                          : COLOR.primaryColor,
                    }}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View>
          {selectedCategory && selectedCategory.places.length == 0 && (
            <Text
              style={{fontWeight: 'bold', marginTop: 12, textAlign: 'center'}}>
              No Places Found
            </Text>
          )}
          {selectedCategory &&
            selectedCategory.places.map((place, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate('ProductInformation', {id: place.id})
                  }>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderBottomColor: 'gray',
                      borderBottomWidth: 1,
                      padding: 10,
                    }}>
                    <Image
                      source={formatAPIImage(place.image_path)}
                      style={{width: 100, height: 100}}
                    />
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingHorizontal: 12,
                      }}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        {place.name}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </MainContainer>
  );
}
