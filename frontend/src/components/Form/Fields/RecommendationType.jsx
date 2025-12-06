import React from "react";
import Checkbox from "../../shared/Checkbox";

function RecommendationType({ selected, onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>

      <div className="flex gap-6">
        <Checkbox
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          checked={selected === "SingleProduct"}
          onChange={() => onRecommendationTypeChange("SingleProduct")}
        >
          Produto Único
        </Checkbox>

        <Checkbox
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          checked={selected === "MultipleProducts"}
          onChange={() => onRecommendationTypeChange("MultipleProducts")}
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </div>
  );
}

export default RecommendationType;
