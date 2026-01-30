import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import API from '../services/api';

export default function CreateProductScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const submitHandler = () => {
    if (!name || !price) {
      Alert.alert('Validation', 'Name and price required');
      return;
    }

    API.post('/products', {
      name,
      description,
      price,
    })
      .then(() => {
        Alert.alert('Success', 'Product added');
        navigation.goBack();
      })
      .catch(() => Alert.alert('Error', 'Failed to add product'));
  };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Description" onChangeText={setDescription} />
      <TextInput placeholder="Price" keyboardType="numeric" onChangeText={setPrice} />
      <Button title="Submit" onPress={submitHandler} />
    </View>
  );
}
