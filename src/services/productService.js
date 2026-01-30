import apiClient from './apiClient';

export const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await apiClient.post('/products', product);
  return response.data;
};
