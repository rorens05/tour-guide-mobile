import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import COLOR from '../../../constants/Colors';
import StarInput from './StarInput';
import StarRating from './StarRating';

export default function AddReview({
  fetchPlaces,
  place,
  reviews,
  updateReview = () => {},
}) {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {}, []);

  const onSubmit = async () => {
    setContent('');
    setContent(0);
    await updateReview(content, rating);
  };

  return (
    <View style={{padding: 12}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 4,
          color: 'black',
        }}>
        Your Review
      </Text>
      <StarInput
        value={rating}
        onChange={value => {
          setRating(value);
        }}
      />
      <TextInput
        multiline
        value={content}
        onChangeText={text => setContent(text)}
        style={{
          marginTop: 12,
          borderWidth: 1,
          borderRadius: 4,
          borderColor: 'gray',
          paddingHorizontal: 12,
        }}
      />
      <TouchableOpacity
        onPress={onSubmit}
        activeOpacity={0.9}
        disabled={content == ''}>
        <Text
          style={{
            backgroundColor: content == '' ? 'gray' : COLOR.primaryColor,
            padding: 12,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: 8,
            borderRadius: 4,
          }}>
          Submit Review
        </Text>
      </TouchableOpacity>
    </View>
  );
}
