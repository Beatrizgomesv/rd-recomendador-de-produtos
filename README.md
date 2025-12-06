# 🧠 Recomendador de Produtos — RD Station

Aplicação frontend desenvolvida como desafio técnico, com o objetivo de recomendar produtos da RD Station com base nas preferências e funcionalidades selecionadas pelo usuário.

O projeto tem como foco principal a lógica de recomendação, organização de código, testabilidade e clareza arquitetural, conforme os critérios definidos no desafio.

---

## 🚀 Funcionalidades

- Seleção de preferências e funcionalidades por meio de formulário
- Cálculo de recomendações baseado em score
- Dois modos de recomendação:
  - SingleProduct: retorna apenas um produto
  - MultipleProducts: retorna uma lista de produtos
- Regra de desempate: em caso de empate, o último produto válido é retornado
- Opção para limpar todas as seleções
- Interface responsiva com tema claro e escuro
- Animação sutil de entrada para melhorar a percepção de carregamento da aplicação

---

## 🧩 Arquitetura e Organização

Estrutura do projeto com separação de responsabilidades:

```txt
src/
├─ components/      # Componentes de UI
├─ hooks/           # Hooks customizados
├─ services/        # Regras de negócio e acesso a dados
├─ mocks/           # Dados mockados para testes
├─ __tests__/       # Testes unitários e de integração
```

### Destaques da Arquitetura

- Regra de negócio isolada no recommendation.service
- Serviços independentes do React, facilitando testes unitários
- Componentes focados exclusivamente em UI
- Hooks utilizados para organização de estado e efeitos colaterais

---

## 🧪 Testes

### Testes Unitários

Focados no recommendation.service, validando:

- Modo SingleProduct
- Modo MultipleProducts
- Regra de desempate
- Diferentes combinações de preferências e funcionalidades

### Teste de Integração (Extra)

Teste adicionado para validar o fluxo principal do usuário:

- Seleção de preferências
- Submissão do formulário
- Exibição das recomendações

O hook de dados (useProducts) é mockado para isolar dependências externas.

### Executar os testes

```bash
yarn test
```

---

## 🛠️ Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- React Hooks (useState, useEffect)
- Tailwind CSS
- Jest
- React Testing Library
- Axios

---

## 🎨 UI / UX

- Layout limpo e responsivo
- Tema claro e escuro
- Cores inspiradas na identidade visual da RD Station
- Header com efeito sutil de transparência
- Componentização focada em legibilidade e manutenção

---

## ▶️ Como Executar o Projeto

### Instalar dependências

```bash
yarn install
```

### Iniciar a aplicação

```bash
yarn start
```

### Executar os testes

```bash
yarn test
```

---

## 📌 Considerações Finais

O desenvolvimento priorizou:

- Clareza de código
- Foco na regra de negócio central
- Organização e extensibilidade
- Boa experiência do usuário sem overengineering

Como melhorias futuras, poderiam ser incluídos novos cenários de teste ou refinamentos visuais.

---

## 👩‍💻 Feito com ❤️ por Beatriz Gomes  


