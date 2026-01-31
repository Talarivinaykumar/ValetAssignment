import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
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
  const response = await axios.get(`${API_URL}/${id}`);
  const product = response.data;
  return {
    ...product,
    name: product.title
  };
};

export const createProduct = async (product) => {
  const response = await axios.post(`${API_URL}/add`, product);
  return response.data;
};
