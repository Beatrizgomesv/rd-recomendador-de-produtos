🧠 Recomendador de Produtos RD Station

Aplicação frontend desenvolvida como desafio técnico, com o objetivo de recomendar produtos da RD Station com base nas preferências e funcionalidades selecionadas pelo usuário.

O foco principal do projeto está na lógica de recomendação, organização de código, testabilidade e clareza arquitetural, conforme especificado no desafio.

🚀 Funcionalidades

Seleção de preferências e funcionalidades via formulário

Cálculo de recomendações com base em score

Dois modos de recomendação:

SingleProduct: retorna apenas um produto

MultipleProducts: retorna uma lista de produtos

Regra de desempate: em caso de empate, o último produto válido é retornado

Possibilidade de limpar as seleções

Interface responsiva com tema claro e escuro

Animação sutil na entrada da aplicação para melhorar a percepção de carregamento

🧩 Arquitetura e Organização

O projeto foi estruturado com separação de responsabilidades:

src/
├─ components/ # Componentes de UI
├─ hooks/ # Hooks customizados
├─ services/ # Regras de negócio e acesso a dados
├─ mocks/ # Dados mockados para testes
├─ **tests**/ # Testes unitários e de integração

🔹 Destaques

Regra de negócio isolada no recommendation.service

Serviços independentes de React, facilitando testes

Componentes focados em UI, evitando lógica desnecessária

Hooks utilizados para organização do estado e efeitos colaterais

🧪 Testes

O projeto conta com:

✅ Testes Unitários

Fornecidos no desafio, focados no recommendation.service, validando:

Modo SingleProduct

Modo MultipleProducts

Critério de desempate

Diferentes combinações de preferências e funcionalidades

✅ Teste de Integração (extra)

Foi adicionado um teste de integração para validar o fluxo principal do usuário:

Seleção de preferências

Submissão do formulário

Exibição das recomendações

Nesse teste, o hook de dados (useProducts) é mockado para isolar dependências externas.

Para executar os testes:

yarn test

🛠️ Tecnologias Utilizadas

React

JavaScript (ES6+)

Hooks (useState, useEffect)

Tailwind CSS

Jest

React Testing Library

Axios

🎨 UI / UX

Layout limpo e responsivo

Tema claro e escuro

Cores inspiradas na identidade visual da RD Station

Header com efeito sutil de transparência

Componentização focada em legibilidade e manutenção

▶️ Como executar o projeto

Instale as dependências:

yarn install

Inicie a aplicação:

yarn start

Execute os testes:

yarn test

📌 Considerações Finais

O desenvolvimento priorizou:

Clareza de código

Foco na regra de negócio central

Organização e extensibilidade

Boa experiência do usuário sem overengineering

Melhorias adicionais poderiam incluir novos cenários de teste ou refinamentos visuais, caso houvesse mais tempo, mantendo a solução alinhada aos critérios do desafio.

👩‍💻 Autora

Feito com ❤️ por Beatriz Gomes
2025
