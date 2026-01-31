import ProductCard from '../components/ProductCard';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { fetchProducts } from '../services/productService';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');


  const loadProducts = async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    try {
      setError('');
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(`Failed: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadProducts(true);
  };

  if (loading && !refreshing) return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#007AFF" /></View>;

  // Show error but allow refresh
  if (error && !products.length) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
      <TouchableOpacity onPress={() => loadProducts()} style={{ padding: 10, backgroundColor: '#ddd', borderRadius: 5 }}>
        <Text>Try Again</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f5f5f5' }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#007AFF']} />
        }
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate('Details', { id: item.id })}
          />
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
