import { useEffect, useState } from 'react';
import recommendationService from '../services/recommendation.service';

export default function useRecommendations(products, formData) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!products.length) return;

    const result = recommendationService.getRecommendations(formData, products);

    setRecommendations(result || []);
  }, [formData, products]);

  return { recommendations };
}
