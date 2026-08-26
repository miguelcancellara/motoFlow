# 🏍️ MotoFlow — Gestão Inteligente de Entregadores

<div align="center">

![Logo MotoFlow](public/images/logo1.png)

**Transformando o controle manual em pranchetas em uma operação digital rápida, organizada e sem atrito.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-24-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[Visão Geral](#-visão-geral) •
[Funcionalidades](#-principais-funcionalidades) •
[Arquitetura](#-estrutura-do-projeto) •
[Documentação](#-documentação-completa) •
[Como Rodar](#-como-rodar-o-projeto)

</div>

---

## 📌 Visão Geral

O **MotoFlow** é um sistema web full-stack desenvolvido para otimizar o gerenciamento de motoboys próprios em restaurantes e pizzarias.

Nascido da observação direta da operação da **Babbo Giovanni**, o sistema substitui o controle físico em papel e prancheta por uma plataforma digital em tempo real, reduzindo o tempo de fechamento de caixa diário de 45 minutos para menos de 3 minutos.

---

## ✨ Principais Funcionalidades

* 👥 **Fila de Saída Inteligente (FIFO):** Ordenação automática de motoboys por ordem de chegada com destaque visual do próximo a sair.
* 📦 **Lançamento Rápido de Entregas:** Despacho de pedidos e registro de quilometragem (KM) em até 2 cliques.
* ⚡ **Status em Tempo Real:** Acompanhamento visual de motoboys `Disponível na Fila`, `Em Rota` ou `Turno Encerrado`.
* 💰 **Fechamento Automático de Turno:** Cálculo automático de diárias fixas, taxas de entrega e valor por KM sem erros manuais.
* 📊 **Dashboard Operacional:** Indicadores instantâneos de corridas ativas, motoboys em campo e totalizadores do dia.
* 📜 **Histórico & Auditoria:** Consulta rápida de turnos e extratos de pagamentos anteriores.

---

## 🛠️ Tecnologias Utilizadas

* **Frontend & Backend:** [Next.js](https://nextjs.org/) (React com App Router)
* **Lógica & Servidor:** [Node.js](https://nodejs.org/) & JavaScript (ES6+)
* **Estilização:** CSS Modular / Vanilla CSS de Alto Contraste
* **Ícones:** Lucide React
* **Versionamento & Governança:** Git & GitHub com [Conventional Commits](docs/desenvolvimento/CONVENTIONAL_COMMITS.md)

---

## 📂 Estrutura do Projeto

```text
motoFlow/
├── app/                  # Rotas e páginas da aplicação (Next.js App Router)
│   ├── dashboard/        # Painel principal com métricas em tempo real
│   ├── entregas/         # Lançamento e acompanhamento de entregas/KM
│   ├── fechamento/       # Cálculo e fechamento de caixa do turno
│   ├── fila/             # Gestão visual da fila de motoboys
│   ├── historico/        # Consultas de dias e corridas anteriores
│   ├── login/            # Tela de autenticação dos operadores
│   ├── globals.css       # Estilos globais e tokens de cores
│   ├── layout.js         # Layout estrutural comum (Sidebar/Navbar)
│   └── page.js           # Página inicial de redirecionamento
├── components/           # Componentes visuais reutilizáveis
│   ├── dashboard/        # Cards e gráficos específicos do dashboard
│   ├── layout/           # Sidebar, Navbar e Header
│   └── ui/               # Botões, Modais, Inputs e Badges genéricos
├── docs/                 # Documentação de Engenharia de Software
│   ├── desenvolvimento/  # Modelagem de banco, Casos de Teste e Guias
│   └── produto/          # Requisitos, Regras de Negócio e Wireframes
├── lib/                  # Utilitários, formatadores e clientes de API
├── public/               # Arquivos estáticos (Logotipo, imagens, ícones)
├── services/             # Lógica de negócio e comunicação com o banco
└── tests/                # Testes automatizados unitários e de integração
```

---

## 📚 Documentação Completa

Toda a engenharia de requisitos e planejamento técnico está documentada na pasta [`docs/`](docs/):

* [Visão do Projeto](docs/produto/01%20-%20Vis%C3%A3o%20do%20Projeto.md)
* [Levantamento de Requisitos (RF & RNF)](docs/produto/02%20%E2%80%93%20Levantamento%20de%20Requisitos.md)
* [Regras de Negócio](docs/produto/03%20%E2%80%93%20Regras%20de%20Neg%C3%B3cio.md)
* [Fluxo da Operação (Mermaid)](docs/produto/04%20%E2%80%93%20Fluxo%20da%20Opera%C3%A7%C3%A3o.md)
* [Wireframes & Telas](docs/produto/05%20%E2%80%93%20Wireframes.md)
* [Modelagem do Banco de Dados (ERD)](docs/desenvolvimento/06%20%E2%80%93%20Modelagem%20do%20Banco.md)
* [Casos de Teste](docs/desenvolvimento/08%20%E2%80%93%20Casos%20de%20Teste.md)
* [Roadmap de Sprints](docs/produto/07%20%E2%80%93%20Roadmap.md)
* [Apresentação Comercial](docs/produto/09%20%E2%80%93%20Apresenta%C3%A7%C3%A3o%20Comercial.md)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* **Node.js** (versão 18.x ou superior recomendada)
* **Git** instalado

### Passo a Passo:

1. **Clone o repositório:**
```bash
git clone https://github.com/miguelcancellara/motoFlow.git
cd motoFlow
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação em execução.

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
Desenvolvido com 💙 por <b>Miguel Cancellara</b>
</div>
