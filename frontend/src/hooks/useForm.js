import { useState } from 'react';

export default function useForm() {
  const [formData, setFormData] = useState({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const resetForm = () => {
    setFormData({
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: '',
    });
  };

  return { formData, handleChange, handleSubmit, resetForm };
}
