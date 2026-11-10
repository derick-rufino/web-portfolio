# Plano — portfólio (Figma → HTML/CSS)

Atividade avaliativa de Desenvolvimento Web I (Fatec): entrega em .ZIP pelo Teams até
**19/11/2026 às 10h**. Requisitos: HTML semântico, CSS externo, responsivo, JS só se
necessário, sem frameworks/bibliotecas. O professor provavelmente abre do disco (`file://`).

Figma do portfólio: `uERXJkMzH7kf8B2XIATOdC` · Kit de ícones: `lmI7RjpLG8hpNQ2hYea303` (nó `22:835`)
Branch: `feat/secoes-figma`

## Arquitetura (atual)

- **4 páginas, zero JavaScript:** `index.html` (bento), `sobre.html`, `stack.html`, `projetos.html`.
- `global.css` — tokens do Figma; tema claro via `@media (prefers-color-scheme: light)`.
- `icons.css` — ícones como data URI de máscara (gerado por `scripts/gerar-icones.js` a partir
  de `assets/icons/*.svg`). Data URI porque `mask-image: url(arquivo.svg)` é bloqueado em `file://`.
- `style.css` — layout. Faixas: `< 768px` mobile (Figma 390), `768–1179px` tablet fluido,
  `≥ 1180px` desktop (Figma 1440, medidas fixas).
- **Sem transições entre páginas:** View Transitions foram removidas a pedido do Derick; navegação é troca de página simples.

## Nós úteis no Figma

| Tela / item                  | nodeId    |
| ---------------------------- | --------- |
| Desktop — Início (bento)     | `13:260`  |
| Desktop — Sobre mim (painel) | `46:282`  |
| Desktop — Stack (painel)     | `46:344`  |
| Desktop — Projetos (painel)  | `46:453`  |
| Mobile — 390px (seção)       | `69:540`  |
| Mobile — Navegação           | `69:671`  |

## Ícones (kit do Derick, estilo preenchido)

Traço 2px + preenchimento 20% (duotone na cor do tema). Mapeamento:
voltar = Navegacao/Seta_esquerda · user = Sistema/Usuario · mail = Atendimento/Email ·
out = Navegacao/Link_externo · settings = Gestao/Ajustes · plug = Rede/Conexao ·
database = Rede/Servidor · gift = Financeiro/Presente · bot = Sistema/Chat ·
layers = Acoes/Pasta · car = Gestao/Localizacao · **code = desenhado no estilo do kit**
(não existe no kit; vale levar para o Figma).

## Conteúdo

Fonte: LinkedIn (10/11/2026). Título "Desenvolvedor Full-stack". GitHub
`github.com/derick-rufino` confirmado. Telefone **não** publicar. Sobre mim tem card de
Certificados (não existe no Figma; segue o estilo do card Formação).

## Etapas

- [x] Seções desktop (Sobre, Stack, Projetos) + início bento + Voltar
- [x] Páginas separadas, sem JS; tema por CSS
- [x] Responsivo mobile (Figma 390) e tablet
- [x] Transições removidas (pedido do Derick)
- [x] Ícones do kit; scrollbars discretas (só thumb)
- [x] Foto: `assets/img/foto.webp` (720², tile) e `avatar.webp` (112², nav mobile), recortadas da selfie de 06/04/2025
- [ ] Revisar no navegador real e gerar o .ZIP de entrega.

## Como verificar

Screenshots com largura exata: Edge headless via DevTools Protocol
(`Emulation.setDeviceMetricsOverride`) — ver `~/.claude/DESAFIOS.md`. Larguras checadas:
1440, 1280×720, 900, 390, 360 (sem overflow horizontal), tema claro e escuro.
