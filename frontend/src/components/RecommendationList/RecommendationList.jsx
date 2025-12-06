import React from "react";

export default function RecommendationList({ recommendations = [] }) {
  const hasItems = recommendations.length > 0;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-black dark:text-white">
        Recomendações
      </h2>

      {!hasItems && (
        <p className="text-gray-600 dark:text-gray-300 italic">
          Nenhuma recomendação encontrada.
        </p>
      )}

      <ul className="space-y-3">
        {recommendations.map((rec, index) => (
          <li
            key={index}
            className="
              bg-white 
              dark:bg-gray-800 
              border 
              border-gray-200 
              dark:border-gray-700 
              p-4 
              rounded-lg 
              shadow-sm 
              hover:shadow-md 
              transition-all 
              cursor-pointer 
              hover:border-blue-400
              dark:hover:border-blue-300
            "
          >
            <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {rec.name ?? rec}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
