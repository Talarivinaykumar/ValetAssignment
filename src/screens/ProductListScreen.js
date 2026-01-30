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
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f5f5f5' }}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 16,
              marginBottom: 12,
              borderRadius: 8,
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
            }}
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{item.name}</Text>
            <Text style={{ color: '#666' }}>{item.description}</Text>
            <Text style={{ marginTop: 8, fontWeight: '600', color: '#2ecc71' }}>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#007AFF',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 10
        }}
        onPress={() => navigation.navigate('Create')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>+ Add Product</Text>
      </TouchableOpacity>
    </View>
  );
}
