import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { fetchProductById } from '../services/productService';

export default function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View>
      <Text>Name: {product.name}</Text>
      <Text>Description: {product.description}</Text>
      <Text>Price: ₹{product.price}</Text>
    </View>
  );
}
