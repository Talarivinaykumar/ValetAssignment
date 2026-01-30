import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CreateProductScreen from '../screens/CreateProductScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductListScreen} />
      <Stack.Screen name="Details" component={ProductDetailScreen} />
      <Stack.Screen name="Create" component={CreateProductScreen} />
    </Stack.Navigator>
  );
}
