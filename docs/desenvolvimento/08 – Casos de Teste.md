# 🧪 Casos de Teste (Plano de Testes) — MotoFlow

> **Objetivo:** Garantir a qualidade e a ausência de falhas no MotoFlow antes da implantação no restaurante piloto, cobrindo fluxos felizes e cenários de exceção.

---

## 📊 Matriz Geral de Casos de Teste

| ID | Módulo | Cenário de Teste | Pré-condição | Ação / Entrada | Resultado Esperado | Prioridade |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **CT-01** | `Autenticação` | Login com credenciais válidas | Usuário cadastrado | Digitar e-mail e senha corretos e clicar em "Entrar" | Redirecionar para o Dashboard com sessão ativa | `Alta` |
| **CT-02** | `Autenticação` | Login com senha inválida | Usuário cadastrado | Digitar senha incorreta | Exibir mensagem de erro clara e manter na tela de login | `Alta` |
| **CT-03** | `Entrada` | Registrar chegada de motoboy | Turno aberto | Clicar em "Nova Chegada", selecionar "Carlos" e confirmar | "Carlos" aparece na fila com status `Disponível` e hora registrada | `Alta` |
| **CT-04** | `Fila` | Manter ordem de chegada (FIFO) | 3 motoboys na fila | Chegada de A, depois B, depois C | A fila exibe A (#1), B (#2) e C (#3) rigorosamente | `Alta` |
| **CT-05** | `Entregas` | Despachar entrega para 1º da fila | Motoboy A no topo da fila | Informar KM: `12.5` e clicar em "Despachar" | Motoboy A passa para status `Em Rota` e Motoboy B assume o topo (#1) | `Alta` |
| **CT-06** | `Entregas` | Retorno do motoboy da rota | Motoboy A `Em Rota` | Clicar em "Confirmar Retorno" de Motoboy A | Motoboy A volta para a fila na última posição e status `Disponível` | `Alta` |
| **CT-07** | `Fechamento` | Cálculo de pagamento por KM e taxa | Motoboy com 4 entregas e 30 KM | Acessar tela de Fechamento de Turno | Total exibido bate exatamente com a fórmula matemática | `Alta` |
| **CT-08** | `Fechamento` | Motoboy presente sem nenhuma entrega | Motoboy registrado no turno sem corridas | Acessar fechamento | Exibir 0 entregas, 0 KM e valor igual à diária base fixa | `Média` |
| **CT-09** | `Resiliência` | Atualizar página no meio do turno (F5) | Turno ativo com fila em andamento | Pressionar `F5` / recarregar navegador | Todos os dados, status e fila continuam intactos | `Alta` |
| **CT-10** | `Validação` | Lançar entrega com KM negativo ou zero | Motoboy na fila | Digitar KM `-5` ou `0` | Sistema bloqueia o envio e solicita valor válido | `Média` |

---

## 🛠️ Checklist de Execução dos Testes

- [ ] 1. Testes de Autenticação (Login e Logout)
- [ ] 2. Testes de Entrada e Ordenação da Fila
- [ ] 3. Testes de Despacho e Retorno de Entregas
- [ ] 4. Testes de Cálculo Matemático do Fechamento
- [ ] 5. Teste de Responsividade em Tablet e Celular
- [ ] 6. Teste de Auditoria de Histórico
