# PreencheBR

Extensão para Google Chrome (Manifest V3) para preenchimento automático de formulários web com dados brasileiros fictícios pré-cadastrados.

## Para que serve

- Testes e homologação de formulários
- Demonstrações e apresentações
- Preenchimento rápido durante desenvolvimento
- QA e validação de campos

> **Aviso:** Todos os dados são completamente fictícios. CPFs, CNPJs e demais documentos são matematicamente válidos, mas não pertencem a nenhuma pessoa ou empresa real. Jamais utilize para fins fraudulentos.

## Instalação no Chrome

1. Abra `chrome://extensions` no Chrome
2. Ative o **Modo do desenvolvedor** (canto superior direito)
3. Clique em **Carregar sem compactação**
4. Selecione a pasta raiz do projeto (`PreencheBR/`)
5. A extensão aparecerá na barra do Chrome

## Como usar

1. Abra uma página com formulário
2. Clique no ícone da extensão na barra do Chrome
3. Escolha um perfil no seletor ou marque **Usar perfil aleatório**
4. Clique em **Preencher formulário**
5. Os campos compatíveis serão preenchidos automaticamente
6. Para desfazer, clique em **Limpar preenchimento**

## Testar localmente

Abra o arquivo `teste-formulario.html` no Chrome (via `File > Open File` ou arrastando para o browser) e use a extensão normalmente.

## Perfis disponíveis

| ID | Descrição |
|----|-----------|
| perfil_joao_silva | João da Silva — PF masculino, RJ |
| perfil_ana_costa | Ana Costa — PF feminina, SP |
| perfil_carlos_mg | Carlos Mendes — PF masculino, MG |
| perfil_mariana_rs | Mariana Oliveira — PF feminina, RS |
| perfil_roberto_ba | Roberto Lima — PF masculino, BA |
| perfil_empresa_ltda | Comercial Fictícia Ltda — SP |
| perfil_mei | Beatriz Santos MEI — RJ |
| perfil_tech | TechSolve Sistemas — SP |
| perfil_comercio | Mercado Bom Preço — MG |
| perfil_completo | Rodrigo Monteiro — PF + PJ completo, SC |

## Como adicionar novos perfis

Edite `data/perfis.js` e adicione um novo objeto ao array `PERFIS_BRASILEIROS` seguindo a estrutura existente:

```js
{
  id: "perfil_meu_novo",
  label: "Descrição exibida no seletor",
  tipo: "pf", // pf | pj | completo
  pessoaFisica: { /* ... */ },
  endereco: { /* ... */ },
  pessoaJuridica: { /* ... */ },
  outros: { observacoes: "..." }
}
```

## Como adicionar novos sinônimos de campos

No arquivo `content.js`, localize a função `detectFieldType`. Adicione novos termos nas chamadas `contains(ctx, [...])` existentes ou crie novos blocos `if`.

Os termos são normalizados (sem acentos, minúsculos) antes da comparação — escreva os termos sem acentos.

## Campos que NÃO são preenchidos

Por segurança, a extensão ignora:

- Senhas e campos de autenticação
- Campos de cartão de crédito (número, CVV, validade)
- Tokens e 2FA
- CAPTCHA
- Campos `disabled` ou `readonly`
- Uploads de arquivo
- Campos ocultos (`type="hidden"`)

## Limitações conhecidas

- Formulários com campos sem `name`, `id`, `placeholder` ou `label` podem não ser detectados
- Campos com máscara JavaScript (ex.: Vue Mask, IMask) podem precisar de disparo de evento adicional
- iframes de terceiros não são acessíveis por restrição do Chrome
- Formulários em Single Page Apps que re-renderizam o DOM após o preenchimento podem limpar os valores

## Privacidade

- Nenhum dado é enviado para servidor externo
- Nenhuma API externa é consultada
- Nenhum analytics ou rastreamento
- Os dados ficam 100% locais no navegador
- Apenas a preferência de perfil é salva via `chrome.storage.local`

## Publicar na Chrome Web Store

1. Crie uma conta de desenvolvedor em [https://chrome.google.com/webstore/devconsole](https://chrome.google.com/webstore/devconsole) (taxa única de U$5)
2. Gere os ícones em PNG: 16×16, 32×32, 48×48, 128×128 (pasta `icons/`)
3. Compacte a pasta do projeto em `.zip` (sem incluir arquivos de desenvolvimento)
4. Faça o upload do `.zip` no Developer Dashboard
5. Preencha nome, descrição, screenshots e política de privacidade
6. Submeta para revisão

## Gerar ícones finais

Crie uma imagem quadrada com o logo do PreencheBR e exporte nos tamanhos:
- `icons/icon16.png` — 16×16 px
- `icons/icon32.png` — 32×32 px
- `icons/icon48.png` — 48×48 px
- `icons/icon128.png` — 128×128 px

Ferramentas: Figma, GIMP, Inkscape ou qualquer editor de imagem.
