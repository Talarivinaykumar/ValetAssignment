import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
//import API from '../services/api';
import { createProduct } from '../services/productService';

export default function CreateProductScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const submitHandler = async () => {
    if (!name || !price) {
      Alert.alert('Validation Error', 'Name and price are required');
      return;
    }

    try {
      await createProduct({
        name,
        description,
        price,
      });

      Alert.alert('Success', 'Product added');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add product');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f5f5f5' }}>
      <TextInput
        placeholder="Name"
        style={{ backgroundColor: 'white', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#ddd' }}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Description"
        style={{ backgroundColor: 'white', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#ddd' }}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        style={{ backgroundColor: 'white', padding: 12, borderRadius: 8, marginBottom: 20, borderWidth: 1, borderColor: '#ddd' }}
        onChangeText={setPrice}
      />
      <Button title="Submit" onPress={submitHandler} />
    </View>
  );
}
