/**
 * Calcula o score de um produto com base nas preferências do formulário.
 * Cada preferência ou funcionalidade correspondente soma +1 ponto.
 */
function calculateScore(product, formData) {
  let score = 0;

  const preferences = formData.selectedPreferences || [];
  const features = formData.selectedFeatures || [];

  preferences.forEach((pref) => {
    if (
      Array.isArray(product.preferences) &&
      product.preferences.includes(pref)
    ) {
      score += 1;
    }
  });

  features.forEach((feature) => {
    if (Array.isArray(product.features) && product.features.includes(feature)) {
      score += 1;
    }
  });

  return score;
}

/**
 * Retorna recomendações de produtos baseadas no formulário.
 *
 * Regras:
 * - SingleProduct → retorna apenas um produto
 * - MultipleProducts → retorna lista ordenada
 * - Empate → último produto válido vence
 */
function getRecommendations(formData, products = []) {
  if (!formData || !Array.isArray(products) || products.length === 0) {
    return [];
  }

  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType,
  } = formData;

  // Se não houver nenhuma seleção, não recomenda nada
  if (!selectedPreferences.length && !selectedFeatures.length) {
    return [];
  }

  // Calcula score de cada produto e mantém índice original
  const scoredProducts = products
    .map((product, index) => ({
      product,
      score: calculateScore(product, formData),
      index, // usado para resolver empates
    }))
    .filter((item) => item.score > 0);

  if (scoredProducts.length === 0) {
    return [];
  }

  // Ordena por score desc.
  // Em empate, o produto com MAIOR índice (último válido) vence
  scoredProducts.sort((a, b) => {
    if (a.score === b.score) {
      return b.index - a.index;
    }
    return b.score - a.score;
  });

  // Modo SingleProduct → retorna apenas o melhor produto
  if (selectedRecommendationType === 'SingleProduct') {
    return [scoredProducts[0].product];
  }

  // Modo MultipleProducts → retorna todos os produtos ordenados
  return scoredProducts.map((item) => item.product);
}

const recommendationService = {
  getRecommendations,
};

export default recommendationService;
