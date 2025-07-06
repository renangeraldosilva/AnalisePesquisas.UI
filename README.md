# AnálisePesquisa UI

> Sistema de análise de pesquisas com integração ChatGPT para processamento de dados CSV

## 📋 Sobre o Projeto

O **AnálisePesquisa UI** é uma aplicação Angular moderna desenvolvida para facilitar a análise de dados de pesquisas através do upload e processamento de arquivos CSV. A aplicação integra-se com uma API backend e utiliza inteligência artificial (ChatGPT) para fornecer análises detalhadas dos dados carregados.

### ✨ Funcionalidades Principais

- 📁 **Upload de Arquivos CSV**: Interface intuitiva para seleção e upload de arquivos
- 🤖 **Análise com IA**: Processamento automático dos dados usando ChatGPT
- 📊 **Visualização de Resultados**: Exibição formatada das análises geradas
- 🎨 **Interface Moderna**: Design responsivo com tema escuro
- ⚡ **Feedback em Tempo Real**: Indicadores de progresso e status das operações

## 🛠️ Tecnologias Utilizadas

- **Angular 17.3.0** - Framework principal
- **TypeScript 5.4.2** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **RxJS 7.8.0** - Programação reativa
- **Angular CLI 17.3.17** - Ferramentas de desenvolvimento

## 🏗️ Arquitetura

### Estrutura do Projeto

```
src/
├── app/
│   ├── app.component.ts          # Componente principal
│   ├── app.component.html         # Template da aplicação
│   ├── app.component.scss         # Estilos da aplicação
│   ├── pesquisa.service.ts        # Serviço para comunicação com API
│   ├── app.config.ts              # Configurações da aplicação
│   └── app.routes.ts              # Configuração de rotas
├── assets/                        # Recursos estáticos
├── styles.scss                    # Estilos globais
└── main.ts                        # Ponto de entrada da aplicação
```

### Componentes Principais

#### AppComponent
- **Responsabilidade**: Gerenciamento da interface principal e coordenação das operações
- **Funcionalidades**:
  - Seleção e validação de arquivos CSV
  - Upload e processamento de dados
  - Exibição de resultados e feedback
  - Gerenciamento de estados (loading, error, success)

#### PesquisaService
- **Responsabilidade**: Comunicação com a API backend
- **Endpoints**:
  - `GET /api/pesquisas` - Busca pesquisas existentes
  - `POST /api/pesquisas` - Upload e processamento de CSV
- **URL da API**: `https://localhost:7230/api/pesquisas`

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd AnalisePesquisa.UI
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a URL da API**
   
   Edite o arquivo `src/app/pesquisa.service.ts` e ajuste a URL da API conforme necessário:
   ```typescript
   private apiUrl = 'https://localhost:7230/api/pesquisas';
   ```

4. **Execute a aplicação**
   ```bash
   npm start
   # ou
   ng serve
   ```

5. **Acesse a aplicação**
   
   Abra o navegador em `http://localhost:4200`

## 📖 Como Usar

### Upload de Arquivo CSV

1. **Selecione o arquivo**: Clique no campo de upload e escolha um arquivo CSV
2. **Validação**: O sistema verifica se o arquivo é um CSV válido
3. **Processamento**: Clique em "Processar CSV" para enviar o arquivo
4. **Aguarde**: O sistema processa o arquivo e gera a análise
5. **Visualize**: Os resultados da análise aparecem na seção "Análise do ChatGPT"

### Funcionalidades da Interface

- **Limpar**: Remove o arquivo selecionado e limpa todos os resultados
- **Reset Análise**: Limpa apenas os resultados da análise, mantendo o arquivo
- **Indicadores Visuais**: 
  - Verde: Operação bem-sucedida
  - Vermelho: Erro na operação
  - Azul: Processamento em andamento

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm start              # Inicia servidor de desenvolvimento
npm run build          # Build para produção
npm run watch          # Build com watch mode
npm test               # Executa testes unitários

# Angular CLI
ng serve               # Servidor de desenvolvimento
ng build               # Build da aplicação
ng test                # Testes com Karma
ng generate            # Gera novos componentes/serviços
```

## 🎨 Personalização

### Temas e Estilos

A aplicação utiliza um tema escuro personalizado. Para modificar as cores:

1. Edite `src/app/app.component.scss` para estilos específicos do componente
2. Edite `src/styles.scss` para estilos globais

### Principais Variáveis de Cor

```scss
// Cores principais
$primary-bg: #3a3a42;      // Fundo principal
$secondary-bg: #2c2c34;    // Fundo secundário
$border-color: #4a4a52;    // Bordas
$text-primary: #ffffff;    // Texto principal
$text-secondary: #cccccc;  // Texto secundário
$success-color: #28a745;   // Sucesso
$error-color: #dc3545;     // Erro
```

## 🔌 Integração com Backend

### Formato de Resposta Esperado

A API deve retornar as análises em formato de texto simples que será exibido na seção de resultados.

### Headers e Configuração

- **Content-Type**: `multipart/form-data` para upload de arquivos
- **Response-Type**: `text` para receber a análise como string

## 🧪 Testes

### Executar Testes

```bash
# Testes unitários
npm test

# Testes com coverage
ng test --code-coverage
```

### Estrutura de Testes

- Testes unitários com Jasmine e Karma
- Cobertura de código disponível
- Testes de componentes e serviços

## 📦 Build e Deploy

### Build para Produção

```bash
npm run build
```

Os arquivos de build serão gerados na pasta `dist/analise-pesquisa/`.

### Configurações de Build

- **Otimização**: Habilitada em produção
- **Source Maps**: Disponíveis em desenvolvimento
- **Bundle Size Limits**: 
  - Initial: 500kb (warning), 1mb (error)
  - Component Styles: 2kb (warning), 4kb (error)
---

**Desenvolvido com ❤️ usando Angular**
# AnalisePesquisas.UI
