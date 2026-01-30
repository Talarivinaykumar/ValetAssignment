import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchProducts } from '../services/productService';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);


  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Text style={{ marginTop: 20 }}>+ Add Product</Text>
      </TouchableOpacity>
    </View>
  );
}
