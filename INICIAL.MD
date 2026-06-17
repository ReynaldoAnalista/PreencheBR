Crie uma extensão para Google Chrome usando Manifest V3 chamada "PreencheBR".

Objetivo:
Criar uma extensão brasileira para preenchimento automático de formulários web. A extensão já deve vir com nomes, CPFs, CNPJs, telefones, e-mails, endereços e dados brasileiros fictícios pré-cadastrados. Ao clicar no botão "Preencher formulário", ela deve identificar automaticamente os campos da página atual e preencher cada campo com o dado correspondente.

Importante:
Todos os dados pré-cadastrados devem ser fictícios e usados apenas para testes, homologação, demonstrações e preenchimento rápido de formulários. Não usar dados reais de pessoas ou empresas.

Nome do produto:
PreencheBR

Descrição:
Preenchimento automático de formulários brasileiros com dados fictícios pré-cadastrados, incluindo CPF, CNPJ, telefone, endereço, cidade, estado e dados empresariais.

Stack:
- Manifest V3
- HTML
- CSS
- JavaScript puro
- Sem frameworks
- Sem bibliotecas externas
- Sem CDN
- Sem backend
- Sem API externa

Estrutura esperada:
- manifest.json
- popup.html
- popup.css
- popup.js
- content.js
- data/
  - perfis.js
- icons/
  - icon16.png
  - icon32.png
  - icon48.png
  - icon128.png
- README.md

Comportamento principal:
1. A extensão deve ter uma base interna de perfis brasileiros fictícios.
2. Ao clicar no botão "Preencher formulário", a extensão deve:
   - localizar todos os inputs, textareas e selects da página atual;
   - analisar o contexto de cada campo;
   - identificar se o campo é nome, CPF, CNPJ, telefone, e-mail, CEP, endereço etc.;
   - buscar o valor correspondente no perfil selecionado;
   - preencher automaticamente o campo correto.
3. A extensão não deve depender do usuário cadastrar dados antes.
4. A extensão deve funcionar assim que instalada.
5. O usuário poderá escolher entre perfis pré-cadastrados no popup.
6. Também deve existir a opção "Perfil aleatório".
7. A extensão deve preencher dados diferentes caso o usuário escolha outro perfil.
8. A extensão deve retornar ao popup a quantidade de campos encontrados e preenchidos.
9. A extensão não deve exibir CPF, CNPJ ou dados sensíveis em logs visíveis.

Interface do popup:
O popup deve conter:
- nome da extensão: PreencheBR;
- seletor de perfil;
- opção "Perfil aleatório";
- botão "Preencher formulário";
- botão "Limpar campos preenchidos", se possível;
- área de status com mensagens.

Textos do popup:
- "Selecione um perfil"
- "Perfil aleatório"
- "Preencher formulário"
- "Limpar preenchimento"
- "Formulário preenchido com sucesso."
- "Nenhum campo compatível foi encontrado nesta página."
- "Não foi possível preencher esta página."
- "Campos preenchidos: X de Y"

Base de dados pré-cadastrada:
Criar um arquivo data/perfis.js contendo pelo menos 10 perfis fictícios brasileiros.

Cada perfil deve conter:

Pessoa física:
- id
- nomeCompleto
- primeiroNome
- sobrenome
- cpf
- rg
- dataNascimento
- genero
- email
- telefone
- celular
- profissao

Endereço:
- cep
- logradouro
- numero
- complemento
- bairro
- cidade
- estado
- uf
- pais

Pessoa jurídica:
- razaoSocial
- nomeFantasia
- cnpj
- inscricaoEstadual
- inscricaoMunicipal
- emailComercial
- telefoneComercial
- site

Outros:
- observacoes

Exemplo de estrutura:

const PERFIS_BRASILEIROS = [
  {
    id: "perfil_joao_silva",
    label: "João da Silva - Pessoa Física",
    tipo: "pf",
    pessoaFisica: {
      nomeCompleto: "João Carlos da Silva",
      primeiroNome: "João",
      sobrenome: "Silva",
      cpf: "123.456.789-09",
      rg: "12.345.678-9",
      dataNascimento: "1988-04-15",
      genero: "Masculino",
      email: "joao.silva.teste@example.com",
      telefone: "(21) 3333-4444",
      celular: "(21) 99999-8888",
      profissao: "Desenvolvedor"
    },
    endereco: {
      cep: "24020-125",
      logradouro: "Rua Exemplo",
      numero: "123",
      complemento: "Apto 301",
      bairro: "Icaraí",
      cidade: "Niterói",
      estado: "Rio de Janeiro",
      uf: "RJ",
      pais: "Brasil"
    },
    pessoaJuridica: {
      razaoSocial: "",
      nomeFantasia: "",
      cnpj: "",
      inscricaoEstadual: "",
      inscricaoMunicipal: "",
      emailComercial: "",
      telefoneComercial: "",
      site: ""
    },
    outros: {
      observacoes: "Dados fictícios para teste de formulário."
    }
  }
];

Atenção:
Gerar CPFs e CNPJs fictícios válidos matematicamente para testes, mas deixar claro no README que são dados fictícios. Não usar CPFs ou CNPJs reais.

Tipos de perfis obrigatórios:
1. Pessoa física masculina.
2. Pessoa física feminina.
3. Pessoa física com endereço no RJ.
4. Pessoa física com endereço em SP.
5. Pessoa física com endereço em MG.
6. Empresa LTDA.
7. MEI.
8. Empresa de tecnologia.
9. Empresa de comércio.
10. Perfil completo com dados de pessoa física e pessoa jurídica.

Detecção de campos:
Criar uma função detectFieldType(element) que identifique o tipo do campo analisando:
- name
- id
- placeholder
- aria-label
- title
- autocomplete
- label associado
- texto próximo ao campo
- classe CSS, quando útil

Criar uma função getFieldContext(element) que retorne uma string com todo o contexto possível do campo.

Criar uma função normalizeText(text) que:
- converta para minúsculo;
- remova acentos;
- remova caracteres especiais desnecessários;
- normalize espaços;
- facilite comparação de termos brasileiros.

Mapeamento de campos brasileiros:

Nome completo:
- nome
- nome completo
- seu nome
- nome do cliente
- cliente
- responsável
- responsavel
- contato
- solicitante
- requerente
- titular

Primeiro nome:
- primeiro nome
- firstname
- first_name
- nome inicial

Sobrenome:
- sobrenome
- último nome
- ultimo nome
- lastname
- last_name

CPF:
- cpf
- cadastro de pessoa física
- cadastro de pessoa fisica
- documento cpf
- cpf do responsável
- cpf do responsavel
- cpf cliente
- cpf titular

CNPJ:
- cnpj
- cadastro nacional da pessoa jurídica
- cadastro nacional da pessoa juridica
- documento empresa
- cnpj empresa
- cnpj da empresa
- cnpj do fornecedor

Documento genérico:
- documento
- número do documento
- numero do documento
- doc
- identificação
- identificacao

Regra para documento genérico:
- Se o formulário parecer de pessoa física, preencher CPF.
- Se o formulário parecer de empresa, preencher CNPJ.
- Se houver campos como razão social, nome fantasia ou inscrição estadual, priorizar CNPJ.
- Se houver campos como nome completo, nascimento ou RG, priorizar CPF.

RG:
- rg
- identidade
- registro geral

Data de nascimento:
- nascimento
- data de nascimento
- dt nascimento
- aniversário
- aniversario
- birthdate
- date of birth

Gênero:
- gênero
- genero
- sexo
- gender

E-mail:
- email
- e-mail
- mail
- correio eletrônico
- correio eletronico

Telefone:
- telefone
- tel
- telefone fixo
- fone
- phone

Celular:
- celular
- whatsapp
- whats
- telefone celular
- mobile
- smartphone

CEP:
- cep
- código postal
- codigo postal
- postal code
- zip

Logradouro:
- endereço
- endereco
- logradouro
- rua
- avenida
- av
- endereço completo
- endereco completo
- address

Número:
- número
- numero
- nº
- n°
- nro
- num
- número do endereço
- numero do endereco

Complemento:
- complemento
- apto
- apartamento
- bloco
- sala
- casa
- complemento do endereço
- complemento do endereco

Bairro:
- bairro
- distrito
- neighborhood

Cidade:
- cidade
- município
- municipio
- localidade
- city

Estado:
- estado
- uf
- unidade federativa
- state

País:
- país
- pais
- country

Razão social:
- razão social
- razao social
- nome empresarial
- empresa
- company
- corporate name

Nome fantasia:
- nome fantasia
- fantasia
- nome comercial
- trade name

Inscrição estadual:
- inscrição estadual
- inscricao estadual
- ie

Inscrição municipal:
- inscrição municipal
- inscricao municipal
- im

Site:
- site
- website
- url
- página
- pagina

Profissão:
- profissão
- profissao
- ocupação
- ocupacao
- cargo
- função
- funcao

Observações:
- observações
- observacoes
- mensagem
- descrição
- descricao
- comentários
- comentarios
- detalhes

Campos que NÃO devem ser preenchidos:
- password
- senha
- new-password
- current-password
- hidden
- file
- upload
- cartão
- cartao
- credit card
- card number
- cvv
- cvc
- código de segurança
- codigo de seguranca
- token
- 2fa
- autenticação
- autenticacao
- captcha
- recaptcha
- checkbox
- radio
- submit
- button
- reset
- campos disabled
- campos readonly

Regras de preenchimento:
1. Inputs de texto devem receber o valor correspondente.
2. Textareas devem receber observações ou descrição, quando detectadas.
3. Selects devem tentar selecionar a opção mais compatível.
4. Para select de estado, tentar selecionar:
   - UF, exemplo: RJ;
   - nome completo, exemplo: Rio de Janeiro.
5. Para select de país, selecionar Brasil quando existir.
6. Para gênero, tentar selecionar Masculino, Feminino ou opção equivalente.
7. Para campos de data, usar formato compatível com o input:
   - se type="date", usar YYYY-MM-DD;
   - se campo texto, usar DD/MM/YYYY.
8. Para CPF, CNPJ, CEP e telefone, respeitar o formato do campo:
   - se o campo parecer esperar máscara, usar com máscara;
   - se o campo parecer numérico, usar somente números.
9. Após preencher cada campo, disparar eventos:
   - input
   - change
   - blur
10. Isso deve melhorar compatibilidade com React, Vue, Angular e formulários com máscara.

Funções obrigatórias no content.js:
- normalizeText(text)
- getFieldContext(element)
- detectFieldType(element)
- isUnsafeField(element)
- getValueByFieldType(fieldType, perfil)
- fillField(element, value)
- fillSelect(element, value)
- formatCPF(cpf, withMask)
- formatCNPJ(cnpj, withMask)
- formatCEP(cep, withMask)
- formatTelefone(telefone, withMask)
- dispatchFieldEvents(element)
- preencherFormulario(perfil)

Comunicação:
1. popup.js deve obter o perfil selecionado.
2. popup.js deve enviar mensagem para content.js com a ação:
   - action: "PREENCHER_FORMULARIO"
   - profileId ou perfil completo.
3. content.js deve executar o preenchimento.
4. content.js deve retornar:
   - success: true/false
   - totalFields
   - filledFields
   - detectedTypes
   - message
5. Não retornar os valores preenchidos ao popup.

Armazenamento:
1. A extensão deve salvar apenas a preferência do usuário:
   - último perfil selecionado;
   - preferência de usar perfil aleatório ou não.
2. Os dados dos perfis devem vir pré-cadastrados no arquivo data/perfis.js.
3. Não criar tela obrigatória para o usuário cadastrar dados.
4. Configurações avançadas podem existir apenas para preferências.
5. Não armazenar dados reais inicialmente.

Popup:
Criar popup com visual limpo e brasileiro.

Elementos:
- Logo/nome PreencheBR
- Subtítulo: "Preenchimento automático de formulários brasileiros"
- Select com os perfis
- Checkbox: "Usar perfil aleatório"
- Botão principal: "Preencher formulário"
- Botão secundário: "Limpar campos preenchidos"
- Área de status

Exemplo de layout:
PreencheBR
Preenchimento automático de formulários brasileiros

Perfil:
[ João da Silva - Pessoa Física v ]

[ ] Usar perfil aleatório

[ Preencher formulário ]

Status:
Aguardando ação.

Limpeza de campos:
Implementar, se possível, uma função para limpar apenas os campos que a extensão preencheu na execução atual. Não limpar campos que já tinham valor antes do preenchimento.

Para isso:
- Antes de preencher, salvar os campos alterados em memória no content script.
- A função limpar deve restaurar valores anteriores quando possível.
- Se não for possível fazer com segurança, o botão pode mostrar a mensagem:
  "Limpeza automática não disponível nesta página."

Privacidade e segurança:
1. Não usar servidor externo.
2. Não fazer fetch para nenhuma API.
3. Não usar analytics.
4. Não coletar dados digitados pelo usuário.
5. Não salvar dados da página.
6. Não ler valores já existentes além do necessário para evitar sobrescrever indevidamente.
7. Não preencher campos sensíveis.
8. Explicar no README que os dados são fictícios e locais.

Manifest:
Criar manifest.json com:
- manifest_version: 3
- name: PreencheBR
- version: 1.0.0
- description: Preenchimento automático de formulários brasileiros com dados fictícios pré-cadastrados.
- action com default_popup
- icons
- permissions mínimas:
  - storage
  - activeTab
- content_scripts com matches para <all_urls>, se necessário
- host_permissions somente se for realmente necessário

Atenção:
Evitar permissões excessivas. A extensão deve ser simples e segura.

README:
Criar README.md explicando:
1. O que é o PreencheBR.
2. Que a extensão vem com perfis brasileiros fictícios pré-cadastrados.
3. Que ela serve para testes, homologação, demonstrações e produtividade.
4. Como instalar no Chrome:
   - abrir chrome://extensions
   - ativar modo desenvolvedor
   - clicar em "Carregar sem compactação"
   - selecionar a pasta do projeto
5. Como usar:
   - abrir uma página com formulário
   - escolher um perfil
   - clicar em "Preencher formulário"
6. Como adicionar novos perfis no arquivo data/perfis.js.
7. Como adicionar novos sinônimos de campos brasileiros.
8. Quais campos não são preenchidos por segurança.
9. Limitações conhecidas.
10. Cuidados de privacidade.
11. Como publicar futuramente na Chrome Web Store.

Criar também uma página HTML simples de teste chamada teste-formulario.html com:
- nome completo
- CPF
- CNPJ
- e-mail
- telefone
- celular
- CEP
- endereço
- número
- complemento
- bairro
- cidade
- estado
- país
- razão social
- nome fantasia
- observações

Critérios de aceite:
1. A extensão deve carregar sem erro no Chrome.
2. O popup deve abrir corretamente.
3. O usuário deve conseguir escolher um perfil pré-cadastrado.
4. Ao clicar em "Preencher formulário", os campos compatíveis devem ser preenchidos automaticamente.
5. A extensão deve funcionar mesmo sem o usuário cadastrar nada.
6. Deve haver pelo menos 10 perfis brasileiros fictícios.
7. CPF, CNPJ, CEP e telefone devem ser preenchidos no formato correto.
8. Campos sensíveis não devem ser preenchidos.
9. Nenhum dado deve ser enviado para servidor externo.
10. O README deve explicar como instalar, testar e evoluir.

Depois de gerar os arquivos, explique:
- como instalar a extensão;
- como testar usando teste-formulario.html;
- como adicionar mais perfis brasileiros;
- como melhorar a detecção de campos;
- como gerar os ícones finais da extensão.