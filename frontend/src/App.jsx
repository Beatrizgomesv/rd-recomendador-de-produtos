import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import RecommendationList from "./components/RecommendationList/RecommendationList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`
        min-h-screen
        bg-rd-light-gradient dark:bg-rd-dark-gradient
        transition-colors
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        transition-all duration-700 ease-out
      `}
    >
      <Header />

      <main className="flex flex-col justify-center items-center flex-1 px-4 pt-20">
        <div
          className="
            bg-rd-bgLight
            dark:bg-rd-bgDark
            text-rd-text dark:text-rd-textDark
            p-8 rounded-lg shadow-md
            w-full md:w-3/4 lg:w-1/2
            grid grid-cols-1 md:grid-cols-2 gap-8
            transition-colors
          "
        >
          <div className="col-span-2 mb-4 flex justify-center">
            <p className="text-lg text-rd-textSecondary dark:text-rd-textDarkSecondary">
              Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
              encontrar uma variedade de produtos da RD Station, cada um
              projetado para atender às necessidades específicas do seu negócio.
              De CRM a Marketing, de Conversas a Inteligência Artificial, temos
              uma solução para ajudar você a alcançar seus objetivos. Use o
              formulário abaixo para selecionar suas preferências e
              funcionalidades desejadas e receba recomendações personalizadas de
              produtos que melhor atendam às suas necessidades.
            </p>
          </div>

          <Form setRecommendations={setRecommendations} />
          <RecommendationList recommendations={recommendations} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
