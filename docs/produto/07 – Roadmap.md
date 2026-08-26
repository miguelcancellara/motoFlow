# 🗺️ Roadmap de Desenvolvimento — MotoFlow

> **Objetivo:** Estruturar o cronograma de entrega das funcionalidades do MotoFlow em ciclos ágeis (Sprints), garantindo foco, previsibilidade e organização nos commits do GitHub.

---

## 🚀 Fases do Projeto

```mermaid
gantt
    title Cronograma de Desenvolvimento MotoFlow
    dateFormat  YYYY-MM-DD
    section Fase 1: Fundação & Docs
    Documentação & Planejamento   :done,    des1, 2026-08-20, 2026-08-27
    Setup Git, Node & Estrutura   :done,    des2, 2026-08-26, 2026-08-28
    section Fase 2: Interface & Telas
    Componentes UI & Design System:active,  des3, 2026-08-28, 2026-09-05
    Telas de Fila e Dashboard     :         des4, 2026-09-05, 2026-09-15
    section Fase 3: Backend & Banco
    Modelagem & Banco de Dados    :         des5, 2026-09-15, 2026-09-22
    Regras de Negócio & Fechamento:         des6, 2026-09-22, 2026-09-30
    section Fase 4: Testes & Piloto
    Testes & Validação em Produção:         des7, 2026-10-01, 2026-10-15
```

---

## 📦 Detalhamento das Sprints

| Sprint | Foco Principal | Entregas Principais | Status |
| :---: | :--- | :--- | :---: |
| **Sprint 1** | **Fundação e Documentação** | Requisitos, Regras de Negócio, Modelagem e setup do repositório Git. | `Concluído` |
| **Sprint 2** | **Design System & Layout Base** | `layout.js`, `globals.css`, componentes base (`Button`, `Card`, `Badge`, `Input`, `Navbar`). | `Em Andamento` |
| **Sprint 3** | **Telas de Autenticação & Fila** | Tela de Login e Tela interativa da Fila de Motoboys (adicionar, ordenar, status). | `Planejado` |
| **Sprint 4** | **Lançamento de Entregas & Dashboard** | Lançamento de KM, vinculação de pedidos e métricas em tempo real no Dashboard. | `Planejado` |
| **Sprint 5** | **Fechamento de Caixa & Banco** | Cálculos automáticos de diárias/km, integração com banco de dados e persistência. | `Planejado` |
| **Sprint 6** | **Histórico, Testes & Piloto Real** | Relatórios de dias anteriores, execução dos Casos de Teste e validação na Babbo Giovanni. | `Planejado` |

---

## 🎯 Padrão de Commits Vinculados ao Roadmap
Ao trabalhar nas tarefas do roadmap, use os commits padronizados:
* `feat(fila): implementa ordenacao automatica de chegada`
* `feat(fechamento): adiciona calculo de taxas por km`
* `test(entregas): adiciona testes de validacao de km`
