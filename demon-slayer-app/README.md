# Desafio D1 - Zetta Lab 2025: Demon Slayer App

Este projeto é uma aplicação web responsiva desenvolvida como parte do **Desafio D1 - Desenvolvimento de Software da Zetta Lab**.

A aplicação consome a API pública [Demon Slayer API](https://www.demonslayer-api.com/) para exibir informações sobre os personagens da série, avaliando a organização do código, boas práticas de desenvolvimento e criatividade na interface.

## 🚀 Link do Deploy (Sugestão)

(Adicione aqui o link do seu projeto publicado na Vercel ou Netlify)

---

## ⚙️ Especificações Técnicas Atendidas

O projeto foi construído seguindo rigorosamente as especificações técnicas obrigatórias:

* **API Pública:** Consumo da [Demon Slayer API](https://www.demonslayer-api.com/), com retorno em JSON.
* **Framework/Biblioteca:** **React**.
* **Estilização:** **Bootstrap 5+** para layout e **SASS/SCSS** para customização.
* **Linguagem:** **TypeScript**.
* **Código Autoral:** Todos os componentes visuais (Navbar, Footer, Card) são de autoria própria, sem plugins de terceiros.
* **Controle de Versão:** Uso de **Git** com commits semânticos (Conventional Commits).

## 💡 Requisitos da Aplicação Implementados

* **Mínimo de 3 Rotas (usando a API)**:
    * `/`: **Home**, com apresentação do projeto e 3 personagens em destaque.
    * `/personagens`: **Lista de Personagens**, com busca e exibição dos 20 primeiros personagens da API.
    * `/detalhes/:id`: **Página de Detalhes**, que exibe informações completas de um personagem selecionado.
* **Componentização:** `Navbar` (menu) e `Footer` (rodapé) foram componentizados e são reutilizados em todas as páginas.
* **Layout Responsivo (Bootstrap 5+)**: O grid de personagens se adapta aos breakpoints definidos:
    * **X-Small (<576px):** 1 coluna.
    * **Medium (≥768px):** 2 colunas.
    * **Large (≥992px):** 3 colunas (usando `col-lg-4`).

## 🛠️ Desafios Técnicos e Soluções

* **Erro de CORS:** A `demonslayer-api.com` bloqueia requisições do `localhost`. A solução foi implementar o **Proxy de Desenvolvimento** do Create React App, configurando o `package.json` e ajustando o serviço da API para usar caminhos relativos.
* **Estrutura da Resposta da API:** A API não retorna um array diretamente, mas sim um objeto `{ pagination: ..., content: [...] }`. O serviço da API foi ajustado para extrair corretamente o array da chave `content`.

## 🚀 Como Rodar Localmente

Siga os passos abaixo para executar o projeto em sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_PUBLICO]
    cd demon-slayer-app
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

4.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador.