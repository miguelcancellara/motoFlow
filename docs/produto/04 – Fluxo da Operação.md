# 🔄 Fluxo da Operação — MotoFlow

> **Objetivo:** Comparar o fluxo de trabalho físico/manual tradicional com o fluxo digitalizado pelo MotoFlow, garantindo que o sistema simplifique o processo sem gerar atrito na rotina da equipe.

---

## 1. Fluxo Operacional Tradicional (Manual / Prancheta)

Hoje, a operação na Babbo Giovanni funciona com papel e caneta:

```mermaid
sequenceDiagram
    autonumber
    actor M as Motoboy
    actor OE as Operador Expedição
    actor OI as Equipe Interna / Caixa

    M->>OE: Chega e informa nome
    OE->>OE: Anota na prancheta a ordem de chegada
    Note over OE: Fila controlada visualmente no papel

    OI->>OE: Entrega nota fiscal com endereço
    OE->>M: Chama 1º da fila e entrega nota
    M->>M: Escreve seu nome na nota física
    M->>M: Realiza a entrega no cliente
    M->>OE: Retorna da entrega
    OE->>OE: Anota retorno no fim da prancheta

    Note over OI,M: Fechamento no fim da noite
    OI->>OI: Recolhe todas as notas físicas
    OI->>OI: Soma manualmente a quantidade de entregas e KMs
    OI->>M: Paga o motoboy após cálculos manuais
```

---

## 2. Fluxo Operacional Otimizado (Com MotoFlow)

Com o **MotoFlow**, a prancheta de papel é 100% substituída pelo painel digital:

```mermaid
sequenceDiagram
    autonumber
    actor M as Motoboy
    actor OE as Operador Tablet
    actor OI as Caixa / Gestor

    M->>OE: Chega ao restaurante
    OE->>OE: 1 toque no MotoFlow: "Registrar Chegada"
    Note over OE: Sistema organiza e exibe a fila em tempo real

    OI->>OE: Pedido pronto para entrega
    OE->>M: Chama o 1º do topo da tela e entrega pedido
    OE->>OE: 1 toque no MotoFlow: "Despachar Entrega (KM)"
    Note over OE: Motoboy passa para status "Em Rota"

    M->>M: Realiza a entrega no cliente
    M->>OE: Retorna ao restaurante
    OE->>OE: 1 toque: "Retornar da Rota"
    Note over OE: Motoboy vai automaticamente para o fim da fila

    Note over OI,M: Fechamento instantâneo
    OI->>OI: Acessa tela "Fechamento de Turno"
    Note over OI: O sistema já calculou corridas, KM e valores automaticamente
    OI->>M: Confere extrato e finaliza pagamento em segundos
```

---

## 3. Mapa de Navegação das Telas do Sistema

```mermaid
graph TD
    A[🔒 Tela de Login] --> B[📊 Dashboard Geral]
    B --> C[👥 Fila de Espera]
    B --> D[📦 Lançamento de Entregas]
    B --> E[💰 Fechamento do Turno]
    B --> F[📜 Histórico & Relatórios]
    
    C -->|Chamar Motoboy| D
    D -->|Confirmar Saída| C
    E -->|Encerrar Dia| F
```