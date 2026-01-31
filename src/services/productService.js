import apiClient from './apiClient';

export const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  // Map 'title' to 'name' to match our app structure
  return response.data.products.map(product => ({
    ...product,
    name: product.title,
    // Ensure price is a number and description exists
    price: product.price,
    description: product.description || ''
  }));
};

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  const product = response.data;
  return {
    ...product,
    name: product.title
  };
};

export const createProduct = async (product) => {
  const response = await apiClient.post('/products/add', product);
  return response.data;
};
