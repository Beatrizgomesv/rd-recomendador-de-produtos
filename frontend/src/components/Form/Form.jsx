// Form.jsx
import React from "react";
import { Preferences, Features, RecommendationType } from "./Fields";
import { SubmitButton } from "./SubmitButton";

import useProducts from "../../hooks/useProducts";
import useForm from "../../hooks/useForm";
import useRecommendations from "../../hooks/useRecommendations";
import ClearButton from "./ClearButton/ClearButton";

export default function Form({ setRecommendations }) {
  const { preferences = [], features = [], products = [] } = useProducts();
  const { formData, handleChange, handleSubmit, resetForm } = useForm();

  // Hook que calcula recomendações com base em products + formData
  const { recommendations = [] } = useRecommendations(products, formData);

  function onSubmit() {
    setRecommendations(recommendations);
  }

  function onReset() {
    resetForm();
    setRecommendations([]);
  }

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white dark:bg-rd-surfaceDark rounded-lg shadow-md"
      onSubmit={(e) => handleSubmit(e, onSubmit)}
    >
      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange("selectedPreferences", selected)
        }
      />

      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(value) =>
          handleChange("selectedPreferences", value)
        }
      />

      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
        onFeatureChange={(value) => handleChange("selectedFeatures", value)}
      />

      <div className="grid grid-cols-2 gap-4 mt-6">
        <ClearButton
          text={
            recommendations?.length > 0 ? "Limpar seleções" : "Limpar seleção"
          }
          onClick={onReset}
        />

        <SubmitButton text="Obter recomendação" />
      </div>
    </form>
  );
}
