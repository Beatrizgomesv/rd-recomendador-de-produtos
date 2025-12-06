import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";
import mockProducts from "../../mocks/mockProducts";

//Mock
jest.mock("../../hooks/useProducts", () => ({
  __esModule: true,
  default: () => {
    const preferences = mockProducts.flatMap((p) => p.preferences);
    const features = mockProducts.flatMap((p) => p.features);

    return {
      products: mockProducts,
      preferences,
      features,
    };
  },
}));

test("Usuário recebe recomendação após preencher o formulário", async () => {
  render(<App />);

  expect(await screen.findByText("Automação de marketing")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Automação de marketing"));

  fireEvent.click(screen.getByRole("button", { name: /obter recomendação/i }));

  expect(await screen.findByText("RD Station Marketing")).toBeInTheDocument();
});
