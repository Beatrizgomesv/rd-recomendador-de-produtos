import { useEffect, useState } from 'react';
import getProducts from '../services/product.service';

export default function useProducts() {
  const [preferences, setPreferences] = useState([]);
  const [features, setFeatures] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();

        const allPreferences = [];
        const allFeatures = [];

        products.forEach((product) => {
          allPreferences.push(...product.preferences.slice(0, 2));
          allFeatures.push(...product.features.slice(0, 2));
        });

        setProducts(products);
        setPreferences(allPreferences);
        setFeatures(allFeatures);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchData();
  }, []);

  return { preferences, features, products };
}
