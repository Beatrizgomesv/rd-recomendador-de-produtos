import React from "react";
import Checkbox from "../../shared/Checkbox";

function Preferences({ preferences = [], selectedPreferences = [], onPreferenceChange }) {
  const handleChange = (pref) => {
    const updated = selectedPreferences.includes(pref)
      ? selectedPreferences.filter((p) => p !== pref)
      : [...selectedPreferences, pref];

    onPreferenceChange(updated);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Preferências:</h2>
      <ul>
        {preferences.map((pref, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              type="checkbox"
              checked={selectedPreferences.includes(pref)}
              onChange={() => handleChange(pref)}
            >
              {pref}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
