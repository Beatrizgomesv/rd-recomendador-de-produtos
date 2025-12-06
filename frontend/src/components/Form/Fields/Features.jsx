import React from "react";
import Checkbox from "../../shared/Checkbox";

function Features({ features = [], selectedFeatures = [], onFeatureChange }) {
  const handleChange = (feature) => {
    const updated = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];

    onFeatureChange(updated);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              type="checkbox"
              checked={selectedFeatures.includes(feature)}
              onChange={() => handleChange(feature)}
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
