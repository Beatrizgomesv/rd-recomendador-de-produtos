🧠 Recomendador de Produtos — RD Station

Aplicação frontend desenvolvida como desafio técnico, com o objetivo de recomendar produtos da RD Station com base nas preferências e funcionalidades selecionadas pelo usuário.

O projeto tem como foco principal a lógica de recomendação, organização de código, testabilidade e clareza arquitetural, conforme os critérios definidos no desafio.

🚀 Funcionalidades

Seleção de preferências e funcionalidades por meio de formulário

Cálculo de recomendações baseado em score

Dois modos de recomendação:

SingleProduct: retorna apenas um produto

MultipleProducts: retorna uma lista de produtos

Regra de desempate: em caso de empate, o último produto válido é retornado

Opção para limpar todas as seleções

Interface responsiva com tema claro e escuro

Animação sutil de entrada para melhorar a percepção de carregamento da aplicação

🧩 Arquitetura e Organização

O projeto foi estruturado com foco em separação de responsabilidades:

src/
├─ components/      # Componentes de UI
├─ hooks/           # Hooks customizados
├─ services/        # Regras de negócio e acesso a dados
├─ mocks/           # Dados mockados para testes
├─ __tests__/       # Testes unitários e de integração

🔹 Destaques da Arquitetura

Regra de negócio isolada no recommendation.service

Serviços independentes do React, facilitando testes unitários

Componentes focados exclusivamente em UI, evitando lógica desnecessária

Uso de hooks para melhor organização de estado e efeitos colaterais

🧪 Testes

O projeto conta com:

✅ Testes Unitários

Fornecidos no desafio, focados no recommendation.service, validando:

Modo SingleProduct

Modo MultipleProducts

Regra de desempate

Diferentes combinações de preferências e funcionalidades

✅ Teste de Integração (extra)

Adicionado para validar o fluxo principal do usuário:

Seleção de preferências

Submissão do formulário

Exibição das recomendações

Neste teste, o hook de dados (useProducts) é mockado para isolar dependências externas.

▶️ Executar os testes
yarn test

🛠️ Tecnologias Utilizadas

React

JavaScript (ES6+)

React Hooks (useState, useEffect)

Tailwind CSS

Jest

React Testing Library

Axios

🎨 UI / UX

Layout limpo e totalmente responsivo

Suporte a tema claro e escuro

Paleta de cores inspirada na identidade visual da RD Station

Header com efeito sutil de transparência

Componentização focada em legibilidade, manutenção e escala

▶️ Como Executar o Projeto
Instalar dependências
yarn install

Iniciar a aplicação
yarn start

Executar os testes
yarn test

📌 Considerações Finais

O desenvolvimento priorizou:

Clareza e legibilidade do código

Foco na regra de negócio principal

Boa organização do projeto e facilidade de extensão

Experiência do usuário sem overengineering

Como melhorias futuras, poderiam ser adicionados novos cenários de teste ou refinamentos visuais, mantendo a solução alinhada aos objetivos do desafio.

👩‍💻 Autora

Feito com ❤️ por Beatriz Gomes
2025
