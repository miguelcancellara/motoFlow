# 📋 Levantamento de Requisitos — MotoFlow

> **Versão:** 1.0 (MVP)  
> **Cliente Piloto:** Babbo Giovanni  
> **Status:** Base de Desenvolvimento  

---

## 1. Requisitos Funcionais (RF)

Os Requisitos Funcionais descrevem o que o sistema **deve fazer**:

### 🚪 Módulo 1: Controle de Entrada e Presença
| Código | Requisito | Prioridade | Descrição Detalhada |
| :---: | :--- | :---: | :--- |
| **RF-01** | **Registrar Chegada do Motoboy** | `Alta` | O operador registra o motoboy que acabou de chegar para o turno de trabalho. |
| **RF-02** | **Timestamp Automático de Entrada** | `Alta` | O sistema registra automaticamente a hora e data exata da chegada. |
| **RF-03** | **Posicionamento Inicial na Fila** | `Alta` | O motoboy entra automaticamente no final da fila de espera, respeitando a ordem de chegada. |

---

### 🏍️ Módulo 2: Gerenciamento da Fila de Saída
| Código | Requisito | Prioridade | Descrição Detalhada |
| :---: | :--- | :---: | :--- |
| **RF-04** | **Exibição do Próximo Motoboy** | `Alta` | Destacar visualmente no topo quem é o primeiro da fila pronto para sair. |
| **RF-05** | **Atualização Automática da Fila** | `Alta` | Ao despachar uma entrega, o motoboy é removido do topo da fila e passa para o status *"Em Rota"*. |
| **RF-06** | **Status do Motoboy** | `Alta` | Indicar se o motoboy está: `Disponível na Fila`, `Em Rota` ou `Turno Finalizado`. |
| **RF-07** | **Retorno de Rota** | `Alta` | Ao retornar da entrega, o motoboy volta automaticamente para o final da fila de espera. |

---

### 📦 Módulo 3: Controle e Registro de Entregas
| Código | Requisito | Prioridade | Descrição Detalhada |
| :---: | :--- | :---: | :--- |
| **RF-08** | **Lançar Nova Entrega** | `Alta` | Vincular o pedido/nota fiscal ao motoboy que está realizando a entrega. |
| **RF-09** | **Registro de Quilometragem (KM)** | `Alta` | Campo obrigatório para informar a quilometragem da corrida daquela entrega. |
| **RF-10** | **Identificador da Nota / Pedido** | `Média` | Número do pedido ou comanda para fácil conferência com o sistema do restaurante. |

---

### 💰 Módulo 4: Fechamento de Turno e Cálculos
| Código | Requisito | Prioridade | Descrição Detalhada |
| :---: | :--- | :---: | :--- |
| **RF-11** | **Contagem Automática de Corridas** | `Alta` | O sistema calcula automaticamente o total de entregas feitas por cada motoboy no turno. |
| **RF-12** | **Soma Total de KM** | `Alta` | O sistema totaliza a quilometragem percorrida por motoboy no turno. |
| **RF-13** | **Cálculo de Pagamento / Diária** | `Alta` | Multiplicação automática do valor por entrega/km + taxa diária fixa para compor o valor final a pagar. |
| **RF-14** | **Relatório de Fechamento do Dia** | `Alta` | Resumo completo para conferência do operador e assinatura do motoboy. |

---

### 📊 Módulo 5: Histórico e Consultas
| Código | Requisito | Prioridade | Descrição Detalhada |
| :---: | :--- | :---: | :--- |
| **RF-15** | **Consulta por Período / Data** | `Média` | Visualizar turnos e fechamentos de dias anteriores. |
| **RF-16** | **Histórico por Motoboy** | `Média` | Filtrar histórico de corridas e valores recebidos por um motoboy específico. |

---

## 2. Requisitos Não Funcionais (RNF)

Os Requisitos Não Funcionais definem os atributos de qualidade, desempenho e usabilidade:

| Código | Requisito | Especificação Técnica / Operacional |
| :---: | :--- | :--- |
| **RNF-01** | **Responsividade Total** | A interface deve funcionar perfeitamente em tablets, celulares e computadores desktop. |
| **RNF-02** | **Otimizado para Tablets** | Componentes com botões grandes, facilitando o uso por toque (*touch screen*) na bancada de expedição. |
| **RNF-03** | **Operação em Poucos Toques** | Fluxos otimizados para registrar entradas e saídas em no máximo 2 cliques. |
| **RNF-04** | **Velocidade de Resposta** | Tempo de resposta inferior a 1 segundo nas operações do dia a dia. |
| **RNF-05** | **Persistência de Dados Segura** | Nenhuma alteração pode ser perdida caso o operador recarregue a página ou caia a conexão. |
| **RNF-06** | **Autenticação Segura** | Acesso protegido por login e senha para operadores e gerentes. |
