// PreencheBR — dados fictícios para testes. Não representam pessoas ou empresas reais.
const PERFIS_BRASILEIROS = [
  {
    "id": "perfil_extra_001_heitor_dias",
    "label": "Heitor Felipe Dias Silva — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Heitor Felipe Dias Silva",
      "primeiroNome": "Heitor",
      "sobrenome": "Dias",
      "cpf": "312.525.049-85",
      "rg": "86.788.283-0",
      "dataNascimento": "1994-03-27",
      "genero": "Masculino",
      "email": "heitor.felipe.dias.silva.teste@example.com",
      "telefone": "(21) 3396-8470",
      "celular": "(21) 95335-1264",
      "profissao": "Contador"
    },
    "endereco": {
      "cep": "20040-020",
      "logradouro": "Rua da Assembleia",
      "numero": "2333",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Ferreira Digital Ltda.",
      "nomeFantasia": "Comercial Ferreira Digital",
      "cnpj": "38.914.410/0001-10",
      "inscricaoEstadual": "121.281.303.817",
      "inscricaoMunicipal": "5.711.150-9",
      "emailComercial": "contato@comercialferreiradigital.com.br",
      "telefoneComercial": "(21) 3929-8753",
      "site": "https://www.comercialferreiradigital.com.br"
    },
    "veiculo": {
      "placa": "RIO2A34",
      "renavam": "95831274360",
      "chassi": "9BWZZZ377VT004251",
      "marca": "Volkswagen",
      "modelo": "Gol 1.0",
      "ano": 2019,
      "cor": "Prata",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_002_heloisa_dias",
    "label": "Heloísa Helena Dias Azevedo — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Heloísa Helena Dias Azevedo",
      "primeiroNome": "Heloísa",
      "sobrenome": "Dias",
      "cpf": "261.782.620-19",
      "rg": "65.475.637-5",
      "dataNascimento": "1991-04-18",
      "genero": "Feminino",
      "email": "heloisa.helena.dias.azevedo.teste@example.com",
      "telefone": "(21) 3553-2403",
      "celular": "(21) 97204-6276",
      "profissao": "Administradora"
    },
    "endereco": {
      "cep": "24020-125",
      "logradouro": "Rua das Flores",
      "numero": "2354",
      "complemento": "Casa",
      "bairro": "Icaraí",
      "cidade": "Niterói",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Nascimento Modelo Ltda.",
      "nomeFantasia": "Serviços Nascimento Modelo",
      "cnpj": "34.055.211/0001-43",
      "inscricaoEstadual": "939.144.151.622",
      "inscricaoMunicipal": "9.852.582-1",
      "emailComercial": "contato@servicosnascimentomodelo.com.br",
      "telefoneComercial": "(21) 3763-8690",
      "site": "https://www.servicosnascimentomodelo.com.br"
    },
    "veiculo": {
      "placa": "NIT3B21",
      "renavam": "84719362051",
      "chassi": "9BWAA05U07P028451",
      "marca": "Fiat",
      "modelo": "Strada 1.3",
      "ano": 2021,
      "cor": "Branca",
      "combustivel": "Flex",
      "categoria": "Comercial Leve"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_003_samuel_rodrigues",
    "label": "Samuel Luiza Rodrigues Carvalho — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Samuel Luiza Rodrigues Carvalho",
      "primeiroNome": "Samuel",
      "sobrenome": "Rodrigues",
      "cpf": "491.538.943-08",
      "rg": "22.618.131-3",
      "dataNascimento": "1981-12-23",
      "genero": "Masculino",
      "email": "samuel.luiza.rodrigues.carvalho.teste@example.com",
      "telefone": "(11) 3769-3636",
      "celular": "(11) 93217-9231",
      "profissao": "Arquiteto"
    },
    "endereco": {
      "cep": "01310-100",
      "logradouro": "Avenida Paulista",
      "numero": "1872",
      "complemento": "Apto 202",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Ribeiro Sul Ltda.",
      "nomeFantasia": "Tech Ribeiro Sul",
      "cnpj": "18.937.841/0001-95",
      "inscricaoEstadual": "685.607.853.177",
      "inscricaoMunicipal": "8.360.731-2",
      "emailComercial": "contato@techribeirosul.com.br",
      "telefoneComercial": "(11) 3570-5633",
      "site": "https://www.techribeirosul.com.br"
    },
    "veiculo": {
      "placa": "SPA4C15",
      "renavam": "73608251940",
      "chassi": "9BGRD19F08G112233",
      "marca": "Chevrolet",
      "modelo": "Onix 1.0 Turbo",
      "ano": 2022,
      "cor": "Preta",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_004_patricia_monteiro",
    "label": "Patrícia Enzo Monteiro Nascimento — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Patrícia Enzo Monteiro Nascimento",
      "primeiroNome": "Patrícia",
      "sobrenome": "Monteiro",
      "cpf": "054.592.938-55",
      "rg": "97.988.732-4",
      "dataNascimento": "1999-08-17",
      "genero": "Feminino",
      "email": "patricia.enzo.monteiro.nascimento.teste@example.com",
      "telefone": "(19) 3096-8042",
      "celular": "(19) 93423-3434",
      "profissao": "Consultora Comercial"
    },
    "endereco": {
      "cep": "13010-111",
      "logradouro": "Rua Barão de Jaguara",
      "numero": "2190",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Campinas",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Souza Central Ltda.",
      "nomeFantasia": "Consultoria Souza Central",
      "cnpj": "17.752.099/0001-80",
      "inscricaoEstadual": "994.849.907.392",
      "inscricaoMunicipal": "8.901.884-4",
      "emailComercial": "contato@consultoriasouzacentral.com.br",
      "telefoneComercial": "(19) 4020-3968",
      "site": "https://www.consultoriasouzacentral.com.br"
    },
    "veiculo": {
      "placa": "CPM4D27",
      "renavam": "61827394052",
      "chassi": "9BWZZZ377VT012345",
      "marca": "Toyota",
      "modelo": "Corolla 2.0",
      "ano": 2020,
      "cor": "Prata",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_005_daniel_carvalho",
    "label": "Daniel Matheus Carvalho Pereira — PF + PJ (MG)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Daniel Matheus Carvalho Pereira",
      "primeiroNome": "Daniel",
      "sobrenome": "Carvalho",
      "cpf": "757.531.898-49",
      "rg": "71.394.510-6",
      "dataNascimento": "1986-10-08",
      "genero": "Masculino",
      "email": "daniel.matheus.carvalho.pereira.teste@example.com",
      "telefone": "(31) 3918-4472",
      "celular": "(31) 98696-6927",
      "profissao": "Administrador"
    },
    "endereco": {
      "cep": "30112-010",
      "logradouro": "Rua dos Carijós",
      "numero": "2171",
      "complemento": "Conjunto 45",
      "bairro": "Centro",
      "cidade": "Belo Horizonte",
      "estado": "Minas Gerais",
      "uf": "MG",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Cardoso Digital Ltda.",
      "nomeFantasia": "Alimentos Cardoso Digital",
      "cnpj": "09.405.016/0001-59",
      "inscricaoEstadual": "612.493.147.891",
      "inscricaoMunicipal": "2.682.844-4",
      "emailComercial": "contato@alimentoscardosodigital.com.br",
      "telefoneComercial": "(31) 4945-9684",
      "site": "https://www.alimentoscardosodigital.com.br"
    },
    "veiculo": {
      "placa": "BHZ3F56",
      "renavam": "50916273841",
      "chassi": "9BGJK19U03B054321",
      "marca": "Fiat",
      "modelo": "Argo 1.3",
      "ano": 2019,
      "cor": "Vermelha",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — MG. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_006_camila_vieira",
    "label": "Camila Luiza Vieira Campos — PF + PJ (PR)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Camila Luiza Vieira Campos",
      "primeiroNome": "Camila",
      "sobrenome": "Vieira",
      "cpf": "051.250.029-09",
      "rg": "41.776.800-1",
      "dataNascimento": "1996-11-22",
      "genero": "Feminino",
      "email": "camila.luiza.vieira.campos.teste@example.com",
      "telefone": "(41) 3904-5643",
      "celular": "(41) 92962-1012",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "80010-000",
      "logradouro": "Rua XV de Novembro",
      "numero": "854",
      "complemento": "Sala 101",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "Paraná",
      "uf": "PR",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Soares Modelo Ltda.",
      "nomeFantasia": "Logística Soares Modelo",
      "cnpj": "03.153.979/0001-26",
      "inscricaoEstadual": "106.695.211.132",
      "inscricaoMunicipal": "8.651.343-6",
      "emailComercial": "contato@logisticasoaresmodelo.com.br",
      "telefoneComercial": "(41) 3925-3468",
      "site": "https://www.logisticasoaresmodelo.com.br"
    },
    "veiculo": {
      "placa": "CWB5G18",
      "renavam": "72038461950",
      "chassi": "9BFZZZ437VB078901",
      "marca": "Ford",
      "modelo": "Ranger XLS 2.2 Diesel",
      "ano": 2021,
      "cor": "Preta",
      "combustivel": "Diesel",
      "categoria": "Caminhonete"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — PR. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_007_eduardo_lopes",
    "label": "Eduardo Felipe Lopes Moura — PF + PJ (RS)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Eduardo Felipe Lopes Moura",
      "primeiroNome": "Eduardo",
      "sobrenome": "Lopes",
      "cpf": "552.749.658-22",
      "rg": "87.476.325-7",
      "dataNascimento": "1974-03-14",
      "genero": "Masculino",
      "email": "eduardo.felipe.lopes.moura.teste@example.com",
      "telefone": "(51) 3540-9288",
      "celular": "(51) 99420-7199",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "90010-150",
      "logradouro": "Rua dos Andradas",
      "numero": "576",
      "complemento": "",
      "bairro": "Centro Histórico",
      "cidade": "Porto Alegre",
      "estado": "Rio Grande do Sul",
      "uf": "RS",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Monteiro Nacional Ltda.",
      "nomeFantasia": "Construtora Monteiro Nacional",
      "cnpj": "60.126.204/0001-03",
      "inscricaoEstadual": "190.818.456.524",
      "inscricaoMunicipal": "2.980.864-0",
      "emailComercial": "contato@construtoramonteironacional.com.br",
      "telefoneComercial": "(51) 4391-7732",
      "site": "https://www.construtoramonteironacional.com.br"
    },
    "veiculo": {
      "placa": "POA6H39",
      "renavam": "83147052961",
      "chassi": "9BGJJ34S08B134567",
      "marca": "Chevrolet",
      "modelo": "S10 LT 2.8 Diesel",
      "ano": 2018,
      "cor": "Cinza",
      "combustivel": "Diesel",
      "categoria": "Caminhonete"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — RS. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_008_alice_nascimento",
    "label": "Alice Lucas Nascimento Alves — PF + PJ (SC)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Alice Lucas Nascimento Alves",
      "primeiroNome": "Alice",
      "sobrenome": "Nascimento",
      "cpf": "363.220.770-40",
      "rg": "92.773.402-6",
      "dataNascimento": "1980-06-28",
      "genero": "Feminino",
      "email": "alice.lucas.nascimento.alves.teste@example.com",
      "telefone": "(48) 3182-6624",
      "celular": "(48) 94082-6410",
      "profissao": "Contadora"
    },
    "endereco": {
      "cep": "88010-560",
      "logradouro": "Rua Felipe Schmidt",
      "numero": "1539",
      "complemento": "Casa",
      "bairro": "Centro",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "uf": "SC",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Vieira Urbana Ltda.",
      "nomeFantasia": "Educação Vieira Urbana",
      "cnpj": "28.224.391/0001-47",
      "inscricaoEstadual": "117.346.565.868",
      "inscricaoMunicipal": "6.813.765-7",
      "emailComercial": "contato@educacaovieiraurbana.com.br",
      "telefoneComercial": "(48) 4779-2135",
      "site": "https://www.educacaovieiraurbana.com.br"
    },
    "veiculo": {
      "placa": "FNS7J40",
      "renavam": "94258163072",
      "chassi": "9BRHH2AS1CP210987",
      "marca": "Honda",
      "modelo": "HR-V EX 1.8",
      "ano": 2022,
      "cor": "Branca",
      "combustivel": "Flex",
      "categoria": "SUV"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — SC. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_009_lucas_pereira",
    "label": "Lucas Miguel Pereira Silva — PF + PJ (BA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lucas Miguel Pereira Silva",
      "primeiroNome": "Lucas",
      "sobrenome": "Pereira",
      "cpf": "290.257.443-62",
      "rg": "17.324.234-0",
      "dataNascimento": "1975-05-14",
      "genero": "Masculino",
      "email": "lucas.miguel.pereira.silva.teste@example.com",
      "telefone": "(71) 3865-8849",
      "celular": "(71) 97855-7220",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "40020-010",
      "logradouro": "Rua da Ajuda",
      "numero": "1586",
      "complemento": "Loja 3",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "Bahia",
      "uf": "BA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Oliveira Nacional Ltda.",
      "nomeFantasia": "Marketing Oliveira Nacional",
      "cnpj": "69.608.906/0001-90",
      "inscricaoEstadual": "817.410.757.491",
      "inscricaoMunicipal": "3.373.649-2",
      "emailComercial": "contato@marketingoliveiranacional.com.br",
      "telefoneComercial": "(71) 3767-7074",
      "site": "https://www.marketingoliveiranacional.com.br"
    },
    "veiculo": {
      "placa": "SSA8K52",
      "renavam": "15369274083",
      "chassi": "9BFZZZ437VC198765",
      "marca": "Hyundai",
      "modelo": "HB20 1.0 Turbo",
      "ano": 2023,
      "cor": "Azul",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — BA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_010_alice_lima",
    "label": "Alice Gustavo Lima Vieira — PF + PJ (PE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Alice Gustavo Lima Vieira",
      "primeiroNome": "Alice",
      "sobrenome": "Lima",
      "cpf": "224.241.053-91",
      "rg": "86.426.302-7",
      "dataNascimento": "1990-08-22",
      "genero": "Feminino",
      "email": "alice.gustavo.lima.vieira.teste@example.com",
      "telefone": "(81) 3187-8087",
      "celular": "(81) 98868-2595",
      "profissao": "Administradora"
    },
    "endereco": {
      "cep": "50030-230",
      "logradouro": "Rua do Bom Jesus",
      "numero": "2167",
      "complemento": "Loja 3",
      "bairro": "Recife Antigo",
      "cidade": "Recife",
      "estado": "Pernambuco",
      "uf": "PE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Lima Nacional Ltda.",
      "nomeFantasia": "Saúde Lima Nacional",
      "cnpj": "97.534.525/0001-49",
      "inscricaoEstadual": "289.731.421.436",
      "inscricaoMunicipal": "3.545.423-9",
      "emailComercial": "contato@saudelimanacional.com.br",
      "telefoneComercial": "(81) 3271-5347",
      "site": "https://www.saudelimanacional.com.br"
    },
    "veiculo": {
      "placa": "REC9L63",
      "renavam": "26470385194",
      "chassi": "9BWHE21JX9T334521",
      "marca": "Renault",
      "modelo": "Kwid Zen 1.0",
      "ano": 2020,
      "cor": "Bege",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — PE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_011_lorenzo_teixeira",
    "label": "Lorenzo Maria Teixeira Ferreira — PF + PJ (CE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lorenzo Maria Teixeira Ferreira",
      "primeiroNome": "Lorenzo",
      "sobrenome": "Teixeira",
      "cpf": "649.324.043-36",
      "rg": "88.586.700-5",
      "dataNascimento": "1970-09-22",
      "genero": "Masculino",
      "email": "lorenzo.maria.teixeira.ferreira.teste@example.com",
      "telefone": "(85) 3067-5744",
      "celular": "(85) 92928-6318",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "60025-060",
      "logradouro": "Rua Floriano Peixoto",
      "numero": "1809",
      "complemento": "Loja 3",
      "bairro": "Centro",
      "cidade": "Fortaleza",
      "estado": "Ceará",
      "uf": "CE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Silva Urbana Ltda.",
      "nomeFantasia": "Comercial Silva Urbana",
      "cnpj": "93.411.898/0001-71",
      "inscricaoEstadual": "471.464.805.404",
      "inscricaoMunicipal": "2.342.788-4",
      "emailComercial": "contato@comercialsilvaurbana.com.br",
      "telefoneComercial": "(85) 4238-4338",
      "site": "https://www.comercialsilvaurbana.com.br"
    },
    "veiculo": {
      "placa": "FOR1M74",
      "renavam": "37581496205",
      "chassi": "9BGRD19F09G223344",
      "marca": "Chevrolet",
      "modelo": "Onix Plus Premier 1.0 Turbo",
      "ano": 2021,
      "cor": "Prata",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — CE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_012_aline_nascimento",
    "label": "Aline Laura Nascimento Gomes — PF + PJ (GO)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Aline Laura Nascimento Gomes",
      "primeiroNome": "Aline",
      "sobrenome": "Nascimento",
      "cpf": "092.128.314-86",
      "rg": "42.680.184-3",
      "dataNascimento": "1995-05-22",
      "genero": "Feminino",
      "email": "aline.laura.nascimento.gomes.teste@example.com",
      "telefone": "(62) 3682-2584",
      "celular": "(62) 98060-9097",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "74015-010",
      "logradouro": "Avenida Goiás",
      "numero": "2188",
      "complemento": "Casa",
      "bairro": "Setor Central",
      "cidade": "Goiânia",
      "estado": "Goiás",
      "uf": "GO",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Santos Digital Ltda.",
      "nomeFantasia": "Serviços Santos Digital",
      "cnpj": "68.059.305/0001-02",
      "inscricaoEstadual": "663.479.596.376",
      "inscricaoMunicipal": "2.737.332-8",
      "emailComercial": "contato@servicossantosdigital.com.br",
      "telefoneComercial": "(62) 4564-8189",
      "site": "https://www.servicossantosdigital.com.br"
    },
    "veiculo": {
      "placa": "GOI2N85",
      "renavam": "48692507316",
      "chassi": "9BRHB2BT3EP445566",
      "marca": "Toyota",
      "modelo": "Hilux SR 2.8 Diesel",
      "ano": 2023,
      "cor": "Branca",
      "combustivel": "Diesel",
      "categoria": "Caminhonete"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — GO. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_013_matheus_ribeiro",
    "label": "Matheus Bruno Ribeiro Campos — PF + PJ (DF)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Matheus Bruno Ribeiro Campos",
      "primeiroNome": "Matheus",
      "sobrenome": "Ribeiro",
      "cpf": "219.685.468-98",
      "rg": "20.867.414-7",
      "dataNascimento": "1983-01-23",
      "genero": "Masculino",
      "email": "matheus.bruno.ribeiro.campos.teste@example.com",
      "telefone": "(61) 3146-3595",
      "celular": "(61) 91295-3437",
      "profissao": "Analista de Sistemas"
    },
    "endereco": {
      "cep": "70040-010",
      "logradouro": "SCS Quadra 2",
      "numero": "2392",
      "complemento": "Casa",
      "bairro": "Asa Sul",
      "cidade": "Brasília",
      "estado": "Distrito Federal",
      "uf": "DF",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Martins Prime Ltda.",
      "nomeFantasia": "Tech Martins Prime",
      "cnpj": "75.302.540/0001-29",
      "inscricaoEstadual": "719.553.502.845",
      "inscricaoMunicipal": "6.539.164-4",
      "emailComercial": "contato@techmartinsprime.com.br",
      "telefoneComercial": "(61) 3141-8818",
      "site": "https://www.techmartinsprime.com.br"
    },
    "veiculo": {
      "placa": "BSB3O96",
      "renavam": "59703618427",
      "chassi": "9BFZZZ437VD556677",
      "marca": "Jeep",
      "modelo": "Compass Longitude 1.3 Turbo",
      "ano": 2022,
      "cor": "Cinza",
      "combustivel": "Flex",
      "categoria": "SUV"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — DF. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_014_manuela_lopes",
    "label": "Manuela Lorenzo Lopes Carvalho — PF + PJ (AM)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Manuela Lorenzo Lopes Carvalho",
      "primeiroNome": "Manuela",
      "sobrenome": "Lopes",
      "cpf": "705.959.282-26",
      "rg": "60.351.776-1",
      "dataNascimento": "1979-07-12",
      "genero": "Feminino",
      "email": "manuela.lorenzo.lopes.carvalho.teste@example.com",
      "telefone": "(92) 3811-8544",
      "celular": "(92) 93836-1660",
      "profissao": "Técnica em Informática"
    },
    "endereco": {
      "cep": "69005-070",
      "logradouro": "Avenida Eduardo Ribeiro",
      "numero": "326",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Manaus",
      "estado": "Amazonas",
      "uf": "AM",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Ferreira Central Ltda.",
      "nomeFantasia": "Consultoria Ferreira Central",
      "cnpj": "36.016.962/0001-86",
      "inscricaoEstadual": "188.799.908.239",
      "inscricaoMunicipal": "1.469.143-0",
      "emailComercial": "contato@consultoriaferreiracentral.com.br",
      "telefoneComercial": "(92) 4764-6667",
      "site": "https://www.consultoriaferreiracentral.com.br"
    },
    "veiculo": {
      "placa": "MAO4P07",
      "renavam": "60814729538",
      "chassi": "9BGJK19U04C667788",
      "marca": "Volkswagen",
      "modelo": "Polo 1.0 TSI",
      "ano": 2021,
      "cor": "Preta",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — AM. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_015_heitor_carvalho",
    "label": "Heitor Renata Carvalho Santos — PF + PJ (PA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Heitor Renata Carvalho Santos",
      "primeiroNome": "Heitor",
      "sobrenome": "Carvalho",
      "cpf": "249.505.963-57",
      "rg": "52.873.883-3",
      "dataNascimento": "1977-06-24",
      "genero": "Masculino",
      "email": "heitor.renata.carvalho.santos.teste@example.com",
      "telefone": "(91) 3117-9693",
      "celular": "(91) 92965-3920",
      "profissao": "Administrador"
    },
    "endereco": {
      "cep": "66010-000",
      "logradouro": "Avenida Presidente Vargas",
      "numero": "562",
      "complemento": "Conjunto 45",
      "bairro": "Campina",
      "cidade": "Belém",
      "estado": "Pará",
      "uf": "PA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Azevedo Brasil Ltda.",
      "nomeFantasia": "Alimentos Azevedo Brasil",
      "cnpj": "50.161.128/0001-05",
      "inscricaoEstadual": "909.487.236.364",
      "inscricaoMunicipal": "6.948.260-2",
      "emailComercial": "contato@alimentosazevedobrasil.com.br",
      "telefoneComercial": "(91) 4258-6542",
      "site": "https://www.alimentosazevedobrasil.com.br"
    },
    "veiculo": {
      "placa": "BEL5Q18",
      "renavam": "71925830649",
      "chassi": "9BGHH21S05D778899",
      "marca": "Fiat",
      "modelo": "Toro Freedom 1.8",
      "ano": 2019,
      "cor": "Verde",
      "combustivel": "Flex",
      "categoria": "Caminhonete"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — PA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_016_camila_vieira",
    "label": "Camila Sophia Vieira Dias — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Camila Sophia Vieira Dias",
      "primeiroNome": "Camila",
      "sobrenome": "Vieira",
      "cpf": "775.609.808-05",
      "rg": "68.836.902-0",
      "dataNascimento": "1986-03-23",
      "genero": "Feminino",
      "email": "camila.sophia.vieira.dias.teste@example.com",
      "telefone": "(21) 3693-4659",
      "celular": "(21) 95936-4740",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "20040-020",
      "logradouro": "Rua da Assembleia",
      "numero": "2019",
      "complemento": "Sala 101",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Dias Urbana Ltda.",
      "nomeFantasia": "Logística Dias Urbana",
      "cnpj": "20.789.305/0001-31",
      "inscricaoEstadual": "524.209.156.229",
      "inscricaoMunicipal": "1.374.936-2",
      "emailComercial": "contato@logisticadiasurbana.com.br",
      "telefoneComercial": "(21) 4788-7908",
      "site": "https://www.logisticadiasurbana.com.br"
    },
    "veiculo": {
      "placa": "RJO6R29",
      "renavam": "82036941750",
      "chassi": "9BFZZZ437VE889900",
      "marca": "Ford",
      "modelo": "Transit Custom 2.2 Diesel",
      "ano": 2018,
      "cor": "Branca",
      "combustivel": "Diesel",
      "categoria": "Comercial Leve"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_017_enzo_lima",
    "label": "Enzo Gustavo Lima Lopes — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Enzo Gustavo Lima Lopes",
      "primeiroNome": "Enzo",
      "sobrenome": "Lima",
      "cpf": "760.830.530-48",
      "rg": "80.686.266-5",
      "dataNascimento": "2001-08-19",
      "genero": "Masculino",
      "email": "enzo.gustavo.lima.lopes.teste@example.com",
      "telefone": "(21) 3322-2827",
      "celular": "(21) 99422-8562",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "24020-125",
      "logradouro": "Rua das Flores",
      "numero": "2482",
      "complemento": "Sala 101",
      "bairro": "Icaraí",
      "cidade": "Niterói",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Barbosa Central Ltda.",
      "nomeFantasia": "Construtora Barbosa Central",
      "cnpj": "57.731.256/0001-96",
      "inscricaoEstadual": "276.100.909.594",
      "inscricaoMunicipal": "4.956.808-6",
      "emailComercial": "contato@construtorabarbosacentral.com.br",
      "telefoneComercial": "(21) 3104-8841",
      "site": "https://www.construtorabarbosacentral.com.br"
    },
    "veiculo": {
      "placa": "NIT7S30",
      "renavam": "93147052861",
      "chassi": "9BWZZZ377VF990011",
      "marca": "Volkswagen",
      "modelo": "Amarok Highline 3.0 V6 Diesel",
      "ano": 2020,
      "cor": "Prata",
      "combustivel": "Diesel",
      "categoria": "Caminhonete"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_018_valentina_rodrigues",
    "label": "Valentina Camila Rodrigues Monteiro — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Valentina Camila Rodrigues Monteiro",
      "primeiroNome": "Valentina",
      "sobrenome": "Rodrigues",
      "cpf": "160.023.786-00",
      "rg": "40.137.797-8",
      "dataNascimento": "1983-08-27",
      "genero": "Feminino",
      "email": "valentina.camila.rodrigues.monteiro.teste@example.com",
      "telefone": "(11) 3486-9201",
      "celular": "(11) 99812-3186",
      "profissao": "Analista de Sistemas"
    },
    "endereco": {
      "cep": "01310-100",
      "logradouro": "Avenida Paulista",
      "numero": "2394",
      "complemento": "Conjunto 45",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Alves Rio Ltda.",
      "nomeFantasia": "Educação Alves Rio",
      "cnpj": "11.401.984/0001-39",
      "inscricaoEstadual": "452.192.528.950",
      "inscricaoMunicipal": "7.553.179-1",
      "emailComercial": "contato@educacaoalvesrio.com.br",
      "telefoneComercial": "(11) 4990-8529",
      "site": "https://www.educacaoalvesrio.com.br"
    },
    "veiculo": {
      "placa": "SPC8T41",
      "renavam": "14258369470",
      "chassi": "9BRHB2BT4FP101122",
      "marca": "Honda",
      "modelo": "Civic EXL 1.5 Turbo",
      "ano": 2022,
      "cor": "Azul",
      "combustivel": "Gasolina",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_019_matheus_cardoso",
    "label": "Matheus Maria Cardoso Lopes — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Matheus Maria Cardoso Lopes",
      "primeiroNome": "Matheus",
      "sobrenome": "Cardoso",
      "cpf": "468.040.555-43",
      "rg": "13.294.857-4",
      "dataNascimento": "1996-07-04",
      "genero": "Masculino",
      "email": "matheus.maria.cardoso.lopes.teste@example.com",
      "telefone": "(19) 3954-7686",
      "celular": "(19) 94006-3347",
      "profissao": "Professor"
    },
    "endereco": {
      "cep": "13010-111",
      "logradouro": "Rua Barão de Jaguara",
      "numero": "1250",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Campinas",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Lima Central Ltda.",
      "nomeFantasia": "Marketing Lima Central",
      "cnpj": "38.844.177/0001-47",
      "inscricaoEstadual": "327.498.837.745",
      "inscricaoMunicipal": "4.547.684-1",
      "emailComercial": "contato@marketinglimacentral.com.br",
      "telefoneComercial": "(19) 3791-4205",
      "site": "https://www.marketinglimacentral.com.br"
    },
    "veiculo": {
      "placa": "CPM9U52",
      "renavam": "25369480571",
      "chassi": "9BFZZZ437VG212233",
      "marca": "Nissan",
      "modelo": "Kicks Advance 1.6",
      "ano": 2021,
      "cor": "Vermelha",
      "combustivel": "Flex",
      "categoria": "SUV"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_020_maria_oliveira",
    "label": "Maria Helena Oliveira Ribeiro — PF + PJ (MG)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Maria Helena Oliveira Ribeiro",
      "primeiroNome": "Maria",
      "sobrenome": "Oliveira",
      "cpf": "920.149.558-75",
      "rg": "30.215.671-4",
      "dataNascimento": "1991-11-21",
      "genero": "Feminino",
      "email": "maria.helena.oliveira.ribeiro.teste@example.com",
      "telefone": "(31) 3043-9063",
      "celular": "(31) 92110-5829",
      "profissao": "Técnica em Informática"
    },
    "endereco": {
      "cep": "30112-010",
      "logradouro": "Rua dos Carijós",
      "numero": "2251",
      "complemento": "Bloco B",
      "bairro": "Centro",
      "cidade": "Belo Horizonte",
      "estado": "Minas Gerais",
      "uf": "MG",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Nascimento Urbana Ltda.",
      "nomeFantasia": "Saúde Nascimento Urbana",
      "cnpj": "14.191.942/0001-09",
      "inscricaoEstadual": "323.868.268.678",
      "inscricaoMunicipal": "3.390.954-1",
      "emailComercial": "contato@saudenascimentourbana.com.br",
      "telefoneComercial": "(31) 4046-6261",
      "site": "https://www.saudenascimentourbana.com.br"
    },
    "veiculo": {
      "placa": "BHZ1V63",
      "renavam": "36470591682",
      "chassi": "9BWHE21JX9T323344",
      "marca": "Hyundai",
      "modelo": "Creta Prestige 2.0",
      "ano": 2020,
      "cor": "Marrom",
      "combustivel": "Flex",
      "categoria": "SUV"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — MG. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_021_leonardo_cardoso",
    "label": "Leonardo Felipe Cardoso Silva — PF + PJ (PR)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Leonardo Felipe Cardoso Silva",
      "primeiroNome": "Leonardo",
      "sobrenome": "Cardoso",
      "cpf": "649.688.071-98",
      "rg": "14.567.672-1",
      "dataNascimento": "1995-09-07",
      "genero": "Masculino",
      "email": "leonardo.felipe.cardoso.silva.teste@example.com",
      "telefone": "(41) 3170-8351",
      "celular": "(41) 97918-8448",
      "profissao": "Técnico em Informática"
    },
    "endereco": {
      "cep": "80010-000",
      "logradouro": "Rua XV de Novembro",
      "numero": "587",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "Paraná",
      "uf": "PR",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Correia Urbana Ltda.",
      "nomeFantasia": "Comercial Correia Urbana",
      "cnpj": "85.064.905/0001-88",
      "inscricaoEstadual": "827.566.844.478",
      "inscricaoMunicipal": "2.709.942-8",
      "emailComercial": "contato@comercialcorreiaurbana.com.br",
      "telefoneComercial": "(41) 3803-1377",
      "site": "https://www.comercialcorreiaurbana.com.br"
    },
    "veiculo": {
      "placa": "CWB2W74",
      "renavam": "47581602793",
      "chassi": "9BGJK19U06E434455",
      "marca": "Renault",
      "modelo": "Duster Iconic 1.6",
      "ano": 2019,
      "cor": "Preta",
      "combustivel": "Flex",
      "categoria": "SUV"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — PR. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_022_helena_azevedo",
    "label": "Helena Henrique Azevedo Soares — PF + PJ (RS)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Helena Henrique Azevedo Soares",
      "primeiroNome": "Helena",
      "sobrenome": "Azevedo",
      "cpf": "645.362.472-97",
      "rg": "77.801.513-6",
      "dataNascimento": "1973-06-25",
      "genero": "Feminino",
      "email": "helena.henrique.azevedo.soares.teste@example.com",
      "telefone": "(51) 3973-9644",
      "celular": "(51) 96271-2583",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "90010-150",
      "logradouro": "Rua dos Andradas",
      "numero": "403",
      "complemento": "Bloco B",
      "bairro": "Centro Histórico",
      "cidade": "Porto Alegre",
      "estado": "Rio Grande do Sul",
      "uf": "RS",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Carvalho Prime Ltda.",
      "nomeFantasia": "Serviços Carvalho Prime",
      "cnpj": "30.466.161/0001-36",
      "inscricaoEstadual": "768.453.776.153",
      "inscricaoMunicipal": "1.702.439-8",
      "emailComercial": "contato@servicoscarvalhoprime.com.br",
      "telefoneComercial": "(51) 4635-7615",
      "site": "https://www.servicoscarvalhoprime.com.br"
    },
    "veiculo": {
      "placa": "POA3X85",
      "renavam": "58692713804",
      "chassi": "9BFZZZ437VH545566",
      "marca": "Volkswagen",
      "modelo": "Virtus GTS 1.0 TSI",
      "ano": 2023,
      "cor": "Branca",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — RS. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_023_lorenzo_almeida",
    "label": "Lorenzo Gabriel Almeida Cardoso — PF + PJ (SC)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lorenzo Gabriel Almeida Cardoso",
      "primeiroNome": "Lorenzo",
      "sobrenome": "Almeida",
      "cpf": "769.966.369-14",
      "rg": "41.606.201-3",
      "dataNascimento": "1979-08-27",
      "genero": "Masculino",
      "email": "lorenzo.gabriel.almeida.cardoso.teste@example.com",
      "telefone": "(48) 3058-8759",
      "celular": "(48) 94996-8913",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "88010-560",
      "logradouro": "Rua Felipe Schmidt",
      "numero": "120",
      "complemento": "Sala 101",
      "bairro": "Centro",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "uf": "SC",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Silva Central Ltda.",
      "nomeFantasia": "Tech Silva Central",
      "cnpj": "40.031.117/0001-57",
      "inscricaoEstadual": "352.604.431.107",
      "inscricaoMunicipal": "9.704.462-4",
      "emailComercial": "contato@techsilvacentral.com.br",
      "telefoneComercial": "(48) 3359-9762",
      "site": "https://www.techsilvacentral.com.br"
    },
    "veiculo": {
      "placa": "FNS4Y96",
      "renavam": "69703824915",
      "chassi": "9BRHB2BT5GQ656677",
      "marca": "Toyota",
      "modelo": "Yaris XLS 1.5",
      "ano": 2024,
      "cor": "Prata",
      "combustivel": "Flex",
      "categoria": "Passeio"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — SC. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_024_heloisa_fernandes",
    "label": "Heloísa Manuela Fernandes Soares — PF + PJ (BA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Heloísa Manuela Fernandes Soares",
      "primeiroNome": "Heloísa",
      "sobrenome": "Fernandes",
      "cpf": "586.822.680-19",
      "rg": "92.401.323-9",
      "dataNascimento": "1974-09-16",
      "genero": "Feminino",
      "email": "heloisa.manuela.fernandes.soares.teste@example.com",
      "telefone": "(71) 3206-4953",
      "celular": "(71) 99306-4166",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "40020-010",
      "logradouro": "Rua da Ajuda",
      "numero": "2257",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "Bahia",
      "uf": "BA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Almeida Nova Ltda.",
      "nomeFantasia": "Consultoria Almeida Nova",
      "cnpj": "91.863.711/0001-45",
      "inscricaoEstadual": "223.807.649.247",
      "inscricaoMunicipal": "1.972.900-2",
      "emailComercial": "contato@consultoriaalmeidanova.com.br",
      "telefoneComercial": "(71) 4892-4126",
      "site": "https://www.consultoriaalmeidanova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — BA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_025_bruno_barbosa",
    "label": "Bruno Camila Barbosa Nascimento — PF + PJ (PE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Bruno Camila Barbosa Nascimento",
      "primeiroNome": "Bruno",
      "sobrenome": "Barbosa",
      "cpf": "740.004.171-18",
      "rg": "21.498.129-9",
      "dataNascimento": "1975-04-09",
      "genero": "Masculino",
      "email": "bruno.camila.barbosa.nascimento.teste@example.com",
      "telefone": "(81) 3517-7254",
      "celular": "(81) 95316-3065",
      "profissao": "Administrador"
    },
    "endereco": {
      "cep": "50030-230",
      "logradouro": "Rua do Bom Jesus",
      "numero": "2565",
      "complemento": "Sala 101",
      "bairro": "Recife Antigo",
      "cidade": "Recife",
      "estado": "Pernambuco",
      "uf": "PE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Ribeiro Nova Ltda.",
      "nomeFantasia": "Alimentos Ribeiro Nova",
      "cnpj": "30.788.750/0001-30",
      "inscricaoEstadual": "159.941.852.758",
      "inscricaoMunicipal": "4.565.986-4",
      "emailComercial": "contato@alimentosribeironova.com.br",
      "telefoneComercial": "(81) 3653-3986",
      "site": "https://www.alimentosribeironova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — PE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_026_giovanna_nascimento",
    "label": "Giovanna Nicolas Nascimento Barbosa — PF + PJ (CE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Giovanna Nicolas Nascimento Barbosa",
      "primeiroNome": "Giovanna",
      "sobrenome": "Nascimento",
      "cpf": "661.713.436-25",
      "rg": "76.740.367-1",
      "dataNascimento": "1980-01-12",
      "genero": "Feminino",
      "email": "giovanna.nicolas.nascimento.barbosa.teste@example.com",
      "telefone": "(85) 3158-7741",
      "celular": "(85) 91297-8694",
      "profissao": "Engenheira Civil"
    },
    "endereco": {
      "cep": "60025-060",
      "logradouro": "Rua Floriano Peixoto",
      "numero": "1711",
      "complemento": "Loja 3",
      "bairro": "Centro",
      "cidade": "Fortaleza",
      "estado": "Ceará",
      "uf": "CE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Monteiro Rio Ltda.",
      "nomeFantasia": "Logística Monteiro Rio",
      "cnpj": "14.018.297/0001-27",
      "inscricaoEstadual": "187.881.267.845",
      "inscricaoMunicipal": "4.364.626-2",
      "emailComercial": "contato@logisticamonteirorio.com.br",
      "telefoneComercial": "(85) 4368-1800",
      "site": "https://www.logisticamonteirorio.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — CE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_027_nicolas_dias",
    "label": "Nicolas Nicolas Dias Correia — PF + PJ (GO)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Nicolas Nicolas Dias Correia",
      "primeiroNome": "Nicolas",
      "sobrenome": "Dias",
      "cpf": "585.760.393-54",
      "rg": "19.234.785-1",
      "dataNascimento": "1977-03-18",
      "genero": "Masculino",
      "email": "nicolas.nicolas.dias.correia.teste@example.com",
      "telefone": "(62) 3759-9824",
      "celular": "(62) 95539-8722",
      "profissao": "Analista de Sistemas"
    },
    "endereco": {
      "cep": "74015-010",
      "logradouro": "Avenida Goiás",
      "numero": "2221",
      "complemento": "Bloco B",
      "bairro": "Setor Central",
      "cidade": "Goiânia",
      "estado": "Goiás",
      "uf": "GO",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Martins Brasil Ltda.",
      "nomeFantasia": "Construtora Martins Brasil",
      "cnpj": "19.678.073/0001-65",
      "inscricaoEstadual": "611.257.147.704",
      "inscricaoMunicipal": "5.327.379-4",
      "emailComercial": "contato@construtoramartinsbrasil.com.br",
      "telefoneComercial": "(62) 3390-9885",
      "site": "https://www.construtoramartinsbrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — GO. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_028_carolina_fernandes",
    "label": "Carolina Débora Fernandes Almeida — PF + PJ (DF)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Carolina Débora Fernandes Almeida",
      "primeiroNome": "Carolina",
      "sobrenome": "Fernandes",
      "cpf": "736.498.735-59",
      "rg": "21.106.804-1",
      "dataNascimento": "1978-06-18",
      "genero": "Feminino",
      "email": "carolina.debora.fernandes.almeida.teste@example.com",
      "telefone": "(61) 3703-6356",
      "celular": "(61) 99759-4415",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "70040-010",
      "logradouro": "SCS Quadra 2",
      "numero": "1661",
      "complemento": "",
      "bairro": "Asa Sul",
      "cidade": "Brasília",
      "estado": "Distrito Federal",
      "uf": "DF",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Ribeiro Brasil Ltda.",
      "nomeFantasia": "Educação Ribeiro Brasil",
      "cnpj": "92.061.746/0001-23",
      "inscricaoEstadual": "245.454.669.856",
      "inscricaoMunicipal": "8.333.908-4",
      "emailComercial": "contato@educacaoribeirobrasil.com.br",
      "telefoneComercial": "(61) 3839-8638",
      "site": "https://www.educacaoribeirobrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — DF. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_029_arthur_monteiro",
    "label": "Arthur Samuel Monteiro Lopes — PF + PJ (AM)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Arthur Samuel Monteiro Lopes",
      "primeiroNome": "Arthur",
      "sobrenome": "Monteiro",
      "cpf": "059.739.324-94",
      "rg": "14.581.195-3",
      "dataNascimento": "1993-12-05",
      "genero": "Masculino",
      "email": "arthur.samuel.monteiro.lopes.teste@example.com",
      "telefone": "(92) 3749-2710",
      "celular": "(92) 92661-5346",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "69005-070",
      "logradouro": "Avenida Eduardo Ribeiro",
      "numero": "1515",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Manaus",
      "estado": "Amazonas",
      "uf": "AM",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Lima Brasil Ltda.",
      "nomeFantasia": "Marketing Lima Brasil",
      "cnpj": "94.450.065/0001-82",
      "inscricaoEstadual": "925.811.741.918",
      "inscricaoMunicipal": "5.552.161-7",
      "emailComercial": "contato@marketinglimabrasil.com.br",
      "telefoneComercial": "(92) 4503-3716",
      "site": "https://www.marketinglimabrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — AM. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_030_heloisa_ribeiro",
    "label": "Heloísa Giovanna Ribeiro Santos — PF + PJ (PA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Heloísa Giovanna Ribeiro Santos",
      "primeiroNome": "Heloísa",
      "sobrenome": "Ribeiro",
      "cpf": "980.335.476-00",
      "rg": "18.232.509-1",
      "dataNascimento": "1989-06-13",
      "genero": "Feminino",
      "email": "heloisa.giovanna.ribeiro.santos.teste@example.com",
      "telefone": "(91) 3273-5549",
      "celular": "(91) 95688-1360",
      "profissao": "Técnica em Informática"
    },
    "endereco": {
      "cep": "66010-000",
      "logradouro": "Avenida Presidente Vargas",
      "numero": "1752",
      "complemento": "Conjunto 45",
      "bairro": "Campina",
      "cidade": "Belém",
      "estado": "Pará",
      "uf": "PA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Oliveira Rio Ltda.",
      "nomeFantasia": "Saúde Oliveira Rio",
      "cnpj": "16.999.124/0001-62",
      "inscricaoEstadual": "630.571.997.709",
      "inscricaoMunicipal": "4.483.633-8",
      "emailComercial": "contato@saudeoliveirario.com.br",
      "telefoneComercial": "(91) 3675-5383",
      "site": "https://www.saudeoliveirario.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — PA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_031_lorenzo_martins",
    "label": "Lorenzo Sophia Martins Almeida — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lorenzo Sophia Martins Almeida",
      "primeiroNome": "Lorenzo",
      "sobrenome": "Martins",
      "cpf": "611.487.854-00",
      "rg": "23.150.774-4",
      "dataNascimento": "1974-04-04",
      "genero": "Masculino",
      "email": "lorenzo.sophia.martins.almeida.teste@example.com",
      "telefone": "(21) 3648-7388",
      "celular": "(21) 99679-3777",
      "profissao": "Professor"
    },
    "endereco": {
      "cep": "20040-020",
      "logradouro": "Rua da Assembleia",
      "numero": "646",
      "complemento": "Conjunto 45",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Silva Modelo Ltda.",
      "nomeFantasia": "Comercial Silva Modelo",
      "cnpj": "70.191.556/0001-98",
      "inscricaoEstadual": "741.155.297.403",
      "inscricaoMunicipal": "2.550.503-2",
      "emailComercial": "contato@comercialsilvamodelo.com.br",
      "telefoneComercial": "(21) 3841-2337",
      "site": "https://www.comercialsilvamodelo.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_032_renata_vieira",
    "label": "Renata Carolina Vieira Barbosa — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Renata Carolina Vieira Barbosa",
      "primeiroNome": "Renata",
      "sobrenome": "Vieira",
      "cpf": "555.769.731-43",
      "rg": "90.353.168-5",
      "dataNascimento": "1982-06-20",
      "genero": "Feminino",
      "email": "renata.carolina.vieira.barbosa.teste@example.com",
      "telefone": "(21) 3496-6633",
      "celular": "(21) 95309-9578",
      "profissao": "Arquiteta"
    },
    "endereco": {
      "cep": "24020-125",
      "logradouro": "Rua das Flores",
      "numero": "2322",
      "complemento": "Loja 3",
      "bairro": "Icaraí",
      "cidade": "Niterói",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Carvalho Nacional Ltda.",
      "nomeFantasia": "Serviços Carvalho Nacional",
      "cnpj": "95.628.984/0001-66",
      "inscricaoEstadual": "320.934.956.727",
      "inscricaoMunicipal": "9.982.662-1",
      "emailComercial": "contato@servicoscarvalhonacional.com.br",
      "telefoneComercial": "(21) 4990-6097",
      "site": "https://www.servicoscarvalhonacional.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_033_lorenzo_oliveira",
    "label": "Lorenzo Renata Oliveira Lopes — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lorenzo Renata Oliveira Lopes",
      "primeiroNome": "Lorenzo",
      "sobrenome": "Oliveira",
      "cpf": "766.649.955-81",
      "rg": "79.108.525-6",
      "dataNascimento": "1971-07-01",
      "genero": "Masculino",
      "email": "lorenzo.renata.oliveira.lopes.teste@example.com",
      "telefone": "(11) 3281-6061",
      "celular": "(11) 99346-6910",
      "profissao": "Professor"
    },
    "endereco": {
      "cep": "01310-100",
      "logradouro": "Avenida Paulista",
      "numero": "1656",
      "complemento": "Apto 202",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Cardoso Central Ltda.",
      "nomeFantasia": "Tech Cardoso Central",
      "cnpj": "58.552.560/0001-39",
      "inscricaoEstadual": "309.333.271.128",
      "inscricaoMunicipal": "2.105.405-7",
      "emailComercial": "contato@techcardosocentral.com.br",
      "telefoneComercial": "(11) 4760-4874",
      "site": "https://www.techcardosocentral.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_034_debora_carvalho",
    "label": "Débora Maria Carvalho Oliveira — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Débora Maria Carvalho Oliveira",
      "primeiroNome": "Débora",
      "sobrenome": "Carvalho",
      "cpf": "290.524.852-16",
      "rg": "30.898.772-0",
      "dataNascimento": "1993-03-17",
      "genero": "Feminino",
      "email": "debora.maria.carvalho.oliveira.teste@example.com",
      "telefone": "(19) 3456-8588",
      "celular": "(19) 93128-7851",
      "profissao": "Professora"
    },
    "endereco": {
      "cep": "13010-111",
      "logradouro": "Rua Barão de Jaguara",
      "numero": "1933",
      "complemento": "Conjunto 45",
      "bairro": "Centro",
      "cidade": "Campinas",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Oliveira Modelo Ltda.",
      "nomeFantasia": "Consultoria Oliveira Modelo",
      "cnpj": "96.528.412/0001-78",
      "inscricaoEstadual": "488.128.150.737",
      "inscricaoMunicipal": "2.130.897-9",
      "emailComercial": "contato@consultoriaoliveiramodelo.com.br",
      "telefoneComercial": "(19) 4179-4258",
      "site": "https://www.consultoriaoliveiramodelo.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_035_gustavo_souza",
    "label": "Gustavo Valentina Souza Correia — PF + PJ (MG)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Gustavo Valentina Souza Correia",
      "primeiroNome": "Gustavo",
      "sobrenome": "Souza",
      "cpf": "898.999.515-95",
      "rg": "49.609.797-0",
      "dataNascimento": "1990-11-28",
      "genero": "Masculino",
      "email": "gustavo.valentina.souza.correia.teste@example.com",
      "telefone": "(31) 3260-6312",
      "celular": "(31) 98556-6738",
      "profissao": "Analista de Sistemas"
    },
    "endereco": {
      "cep": "30112-010",
      "logradouro": "Rua dos Carijós",
      "numero": "1065",
      "complemento": "Bloco B",
      "bairro": "Centro",
      "cidade": "Belo Horizonte",
      "estado": "Minas Gerais",
      "uf": "MG",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Ribeiro Nacional Ltda.",
      "nomeFantasia": "Alimentos Ribeiro Nacional",
      "cnpj": "17.421.957/0001-04",
      "inscricaoEstadual": "511.513.982.823",
      "inscricaoMunicipal": "3.878.788-7",
      "emailComercial": "contato@alimentosribeironacional.com.br",
      "telefoneComercial": "(31) 4140-9929",
      "site": "https://www.alimentosribeironacional.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — MG. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_036_giovanna_lima",
    "label": "Giovanna Bruno Lima Moura — PF + PJ (PR)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Giovanna Bruno Lima Moura",
      "primeiroNome": "Giovanna",
      "sobrenome": "Lima",
      "cpf": "972.544.893-69",
      "rg": "69.797.658-4",
      "dataNascimento": "1997-06-02",
      "genero": "Feminino",
      "email": "giovanna.bruno.lima.moura.teste@example.com",
      "telefone": "(41) 3408-7928",
      "celular": "(41) 95138-5203",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "80010-000",
      "logradouro": "Rua XV de Novembro",
      "numero": "1494",
      "complemento": "Bloco B",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "Paraná",
      "uf": "PR",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Nascimento Central Ltda.",
      "nomeFantasia": "Logística Nascimento Central",
      "cnpj": "40.081.087/0001-93",
      "inscricaoEstadual": "850.711.369.127",
      "inscricaoMunicipal": "1.420.218-5",
      "emailComercial": "contato@logisticanascimentocentral.com.br",
      "telefoneComercial": "(41) 4884-5917",
      "site": "https://www.logisticanascimentocentral.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — PR. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_037_nicolas_vieira",
    "label": "Nicolas Heitor Vieira Rodrigues — PF + PJ (RS)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Nicolas Heitor Vieira Rodrigues",
      "primeiroNome": "Nicolas",
      "sobrenome": "Vieira",
      "cpf": "527.406.232-67",
      "rg": "25.392.620-2",
      "dataNascimento": "1981-06-25",
      "genero": "Masculino",
      "email": "nicolas.heitor.vieira.rodrigues.teste@example.com",
      "telefone": "(51) 3819-6450",
      "celular": "(51) 99358-6264",
      "profissao": "Técnico em Informática"
    },
    "endereco": {
      "cep": "90010-150",
      "logradouro": "Rua dos Andradas",
      "numero": "2375",
      "complemento": "Conjunto 45",
      "bairro": "Centro Histórico",
      "cidade": "Porto Alegre",
      "estado": "Rio Grande do Sul",
      "uf": "RS",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Ribeiro Modelo Ltda.",
      "nomeFantasia": "Construtora Ribeiro Modelo",
      "cnpj": "89.883.022/0001-50",
      "inscricaoEstadual": "945.343.442.336",
      "inscricaoMunicipal": "5.648.839-8",
      "emailComercial": "contato@construtoraribeiromodelo.com.br",
      "telefoneComercial": "(51) 4484-5754",
      "site": "https://www.construtoraribeiromodelo.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — RS. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_038_beatriz_oliveira",
    "label": "Beatriz Júlia Oliveira Campos — PF + PJ (SC)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Beatriz Júlia Oliveira Campos",
      "primeiroNome": "Beatriz",
      "sobrenome": "Oliveira",
      "cpf": "231.306.012-87",
      "rg": "59.341.720-6",
      "dataNascimento": "1991-02-08",
      "genero": "Feminino",
      "email": "beatriz.julia.oliveira.campos.teste@example.com",
      "telefone": "(48) 3590-5689",
      "celular": "(48) 99572-4821",
      "profissao": "Professora"
    },
    "endereco": {
      "cep": "88010-560",
      "logradouro": "Rua Felipe Schmidt",
      "numero": "1114",
      "complemento": "Conjunto 45",
      "bairro": "Centro",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "uf": "SC",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Oliveira Digital Ltda.",
      "nomeFantasia": "Educação Oliveira Digital",
      "cnpj": "43.755.783/0001-26",
      "inscricaoEstadual": "878.537.583.687",
      "inscricaoMunicipal": "6.999.642-8",
      "emailComercial": "contato@educacaooliveiradigital.com.br",
      "telefoneComercial": "(48) 4963-1159",
      "site": "https://www.educacaooliveiradigital.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — SC. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_039_heitor_correia",
    "label": "Heitor Manuela Correia Vieira — PF + PJ (BA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Heitor Manuela Correia Vieira",
      "primeiroNome": "Heitor",
      "sobrenome": "Correia",
      "cpf": "443.908.162-25",
      "rg": "18.574.911-9",
      "dataNascimento": "1972-08-16",
      "genero": "Masculino",
      "email": "heitor.manuela.correia.vieira.teste@example.com",
      "telefone": "(71) 3459-3297",
      "celular": "(71) 98002-3838",
      "profissao": "Professor"
    },
    "endereco": {
      "cep": "40020-010",
      "logradouro": "Rua da Ajuda",
      "numero": "239",
      "complemento": "Sala 101",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "Bahia",
      "uf": "BA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Azevedo Modelo Ltda.",
      "nomeFantasia": "Marketing Azevedo Modelo",
      "cnpj": "11.884.501/0001-02",
      "inscricaoEstadual": "726.123.271.255",
      "inscricaoMunicipal": "7.237.785-5",
      "emailComercial": "contato@marketingazevedomodelo.com.br",
      "telefoneComercial": "(71) 4368-5621",
      "site": "https://www.marketingazevedomodelo.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — BA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_040_giovanna_martins",
    "label": "Giovanna Manuela Martins Teixeira — PF + PJ (PE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Giovanna Manuela Martins Teixeira",
      "primeiroNome": "Giovanna",
      "sobrenome": "Martins",
      "cpf": "965.934.170-92",
      "rg": "24.929.609-4",
      "dataNascimento": "2001-04-17",
      "genero": "Feminino",
      "email": "giovanna.manuela.martins.teixeira.teste@example.com",
      "telefone": "(81) 3971-2947",
      "celular": "(81) 98659-4268",
      "profissao": "Engenheira Civil"
    },
    "endereco": {
      "cep": "50030-230",
      "logradouro": "Rua do Bom Jesus",
      "numero": "1007",
      "complemento": "",
      "bairro": "Recife Antigo",
      "cidade": "Recife",
      "estado": "Pernambuco",
      "uf": "PE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Souza Digital Ltda.",
      "nomeFantasia": "Saúde Souza Digital",
      "cnpj": "49.208.385/0001-76",
      "inscricaoEstadual": "318.902.313.831",
      "inscricaoMunicipal": "4.267.849-6",
      "emailComercial": "contato@saudesouzadigital.com.br",
      "telefoneComercial": "(81) 4547-5544",
      "site": "https://www.saudesouzadigital.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — PE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_041_daniel_alves",
    "label": "Daniel Lucas Alves Lopes — PF + PJ (CE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Daniel Lucas Alves Lopes",
      "primeiroNome": "Daniel",
      "sobrenome": "Alves",
      "cpf": "346.373.560-16",
      "rg": "34.680.242-8",
      "dataNascimento": "1986-05-22",
      "genero": "Masculino",
      "email": "daniel.lucas.alves.lopes.teste@example.com",
      "telefone": "(85) 3689-8073",
      "celular": "(85) 94520-5649",
      "profissao": "Engenheiro Civil"
    },
    "endereco": {
      "cep": "60025-060",
      "logradouro": "Rua Floriano Peixoto",
      "numero": "1037",
      "complemento": "Loja 3",
      "bairro": "Centro",
      "cidade": "Fortaleza",
      "estado": "Ceará",
      "uf": "CE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Carvalho Central Ltda.",
      "nomeFantasia": "Comercial Carvalho Central",
      "cnpj": "18.524.097/0001-05",
      "inscricaoEstadual": "422.555.555.150",
      "inscricaoMunicipal": "6.135.571-6",
      "emailComercial": "contato@comercialcarvalhocentral.com.br",
      "telefoneComercial": "(85) 3715-3932",
      "site": "https://www.comercialcarvalhocentral.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — CE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_042_debora_martins",
    "label": "Débora Felipe Martins Pereira — PF + PJ (GO)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Débora Felipe Martins Pereira",
      "primeiroNome": "Débora",
      "sobrenome": "Martins",
      "cpf": "837.603.434-06",
      "rg": "19.438.682-1",
      "dataNascimento": "1982-12-19",
      "genero": "Feminino",
      "email": "debora.felipe.martins.pereira.teste@example.com",
      "telefone": "(62) 3267-7459",
      "celular": "(62) 95374-4762",
      "profissao": "Consultora Comercial"
    },
    "endereco": {
      "cep": "74015-010",
      "logradouro": "Avenida Goiás",
      "numero": "2585",
      "complemento": "Casa",
      "bairro": "Setor Central",
      "cidade": "Goiânia",
      "estado": "Goiás",
      "uf": "GO",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Nascimento Prime Ltda.",
      "nomeFantasia": "Serviços Nascimento Prime",
      "cnpj": "00.974.721/0001-00",
      "inscricaoEstadual": "641.272.661.288",
      "inscricaoMunicipal": "4.394.228-9",
      "emailComercial": "contato@servicosnascimentoprime.com.br",
      "telefoneComercial": "(62) 3507-6043",
      "site": "https://www.servicosnascimentoprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — GO. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_043_leonardo_correia",
    "label": "Leonardo Thiago Correia Pereira — PF + PJ (DF)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Leonardo Thiago Correia Pereira",
      "primeiroNome": "Leonardo",
      "sobrenome": "Correia",
      "cpf": "390.693.487-05",
      "rg": "74.124.891-3",
      "dataNascimento": "1985-05-02",
      "genero": "Masculino",
      "email": "leonardo.thiago.correia.pereira.teste@example.com",
      "telefone": "(61) 3058-8072",
      "celular": "(61) 94570-1527",
      "profissao": "Consultor Comercial"
    },
    "endereco": {
      "cep": "70040-010",
      "logradouro": "SCS Quadra 2",
      "numero": "1805",
      "complemento": "Apto 202",
      "bairro": "Asa Sul",
      "cidade": "Brasília",
      "estado": "Distrito Federal",
      "uf": "DF",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Fernandes Rio Ltda.",
      "nomeFantasia": "Tech Fernandes Rio",
      "cnpj": "10.216.198/0001-07",
      "inscricaoEstadual": "785.886.114.895",
      "inscricaoMunicipal": "2.434.846-4",
      "emailComercial": "contato@techfernandesrio.com.br",
      "telefoneComercial": "(61) 4488-2448",
      "site": "https://www.techfernandesrio.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — DF. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_044_patricia_soares",
    "label": "Patrícia Isabella Soares Correia — PF + PJ (AM)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Patrícia Isabella Soares Correia",
      "primeiroNome": "Patrícia",
      "sobrenome": "Soares",
      "cpf": "029.659.369-98",
      "rg": "74.367.452-6",
      "dataNascimento": "1973-06-22",
      "genero": "Feminino",
      "email": "patricia.isabella.soares.correia.teste@example.com",
      "telefone": "(92) 3534-4378",
      "celular": "(92) 93541-2452",
      "profissao": "Administradora"
    },
    "endereco": {
      "cep": "69005-070",
      "logradouro": "Avenida Eduardo Ribeiro",
      "numero": "351",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Manaus",
      "estado": "Amazonas",
      "uf": "AM",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Moura Nova Ltda.",
      "nomeFantasia": "Consultoria Moura Nova",
      "cnpj": "53.205.460/0001-12",
      "inscricaoEstadual": "107.717.493.528",
      "inscricaoMunicipal": "1.587.694-0",
      "emailComercial": "contato@consultoriamouranova.com.br",
      "telefoneComercial": "(92) 4957-6121",
      "site": "https://www.consultoriamouranova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — AM. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_045_bernardo_nascimento",
    "label": "Bernardo Alice Nascimento Gomes — PF + PJ (PA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Bernardo Alice Nascimento Gomes",
      "primeiroNome": "Bernardo",
      "sobrenome": "Nascimento",
      "cpf": "609.551.003-13",
      "rg": "75.521.192-8",
      "dataNascimento": "1978-03-24",
      "genero": "Masculino",
      "email": "bernardo.alice.nascimento.gomes.teste@example.com",
      "telefone": "(91) 3543-6333",
      "celular": "(91) 94058-5515",
      "profissao": "Professor"
    },
    "endereco": {
      "cep": "66010-000",
      "logradouro": "Avenida Presidente Vargas",
      "numero": "2613",
      "complemento": "Loja 3",
      "bairro": "Campina",
      "cidade": "Belém",
      "estado": "Pará",
      "uf": "PA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Carvalho Digital Ltda.",
      "nomeFantasia": "Alimentos Carvalho Digital",
      "cnpj": "73.178.766/0001-34",
      "inscricaoEstadual": "913.132.134.915",
      "inscricaoMunicipal": "1.373.300-1",
      "emailComercial": "contato@alimentoscarvalhodigital.com.br",
      "telefoneComercial": "(91) 3589-1659",
      "site": "https://www.alimentoscarvalhodigital.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — PA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_046_livia_souza",
    "label": "Lívia Débora Souza Ribeiro — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lívia Débora Souza Ribeiro",
      "primeiroNome": "Lívia",
      "sobrenome": "Souza",
      "cpf": "204.924.584-05",
      "rg": "57.791.946-0",
      "dataNascimento": "1984-08-17",
      "genero": "Feminino",
      "email": "livia.debora.souza.ribeiro.teste@example.com",
      "telefone": "(21) 3076-2420",
      "celular": "(21) 92076-9855",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "20040-020",
      "logradouro": "Rua da Assembleia",
      "numero": "1021",
      "complemento": "Casa",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Almeida Central Ltda.",
      "nomeFantasia": "Logística Almeida Central",
      "cnpj": "28.703.160/0001-16",
      "inscricaoEstadual": "735.544.212.903",
      "inscricaoMunicipal": "6.963.949-7",
      "emailComercial": "contato@logisticaalmeidacentral.com.br",
      "telefoneComercial": "(21) 3092-5740",
      "site": "https://www.logisticaalmeidacentral.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_047_gustavo_ribeiro",
    "label": "Gustavo Giovanna Ribeiro Lopes — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Gustavo Giovanna Ribeiro Lopes",
      "primeiroNome": "Gustavo",
      "sobrenome": "Ribeiro",
      "cpf": "811.544.646-79",
      "rg": "30.348.657-1",
      "dataNascimento": "1990-10-26",
      "genero": "Masculino",
      "email": "gustavo.giovanna.ribeiro.lopes.teste@example.com",
      "telefone": "(21) 3334-9013",
      "celular": "(21) 92120-7202",
      "profissao": "Arquiteto"
    },
    "endereco": {
      "cep": "24020-125",
      "logradouro": "Rua das Flores",
      "numero": "2446",
      "complemento": "Casa",
      "bairro": "Icaraí",
      "cidade": "Niterói",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Ribeiro Urbana Ltda.",
      "nomeFantasia": "Construtora Ribeiro Urbana",
      "cnpj": "23.905.151/0001-94",
      "inscricaoEstadual": "324.889.296.325",
      "inscricaoMunicipal": "9.578.629-8",
      "emailComercial": "contato@construtoraribeirourbana.com.br",
      "telefoneComercial": "(21) 4370-9748",
      "site": "https://www.construtoraribeirourbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_048_debora_silva",
    "label": "Débora Samuel Silva Azevedo — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Débora Samuel Silva Azevedo",
      "primeiroNome": "Débora",
      "sobrenome": "Silva",
      "cpf": "938.902.053-05",
      "rg": "47.946.925-4",
      "dataNascimento": "1976-12-03",
      "genero": "Feminino",
      "email": "debora.samuel.silva.azevedo.teste@example.com",
      "telefone": "(11) 3043-3958",
      "celular": "(11) 95462-6213",
      "profissao": "Técnica em Informática"
    },
    "endereco": {
      "cep": "01310-100",
      "logradouro": "Avenida Paulista",
      "numero": "116",
      "complemento": "",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Santos Digital Ltda.",
      "nomeFantasia": "Educação Santos Digital",
      "cnpj": "26.701.892/0001-41",
      "inscricaoEstadual": "522.321.343.982",
      "inscricaoMunicipal": "2.722.409-4",
      "emailComercial": "contato@educacaosantosdigital.com.br",
      "telefoneComercial": "(11) 3811-6285",
      "site": "https://www.educacaosantosdigital.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_049_matheus_azevedo",
    "label": "Matheus Luiza Azevedo Alves — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Matheus Luiza Azevedo Alves",
      "primeiroNome": "Matheus",
      "sobrenome": "Azevedo",
      "cpf": "476.868.708-39",
      "rg": "57.120.999-0",
      "dataNascimento": "1981-03-16",
      "genero": "Masculino",
      "email": "matheus.luiza.azevedo.alves.teste@example.com",
      "telefone": "(19) 3259-5457",
      "celular": "(19) 97267-5081",
      "profissao": "Professor"
    },
    "endereco": {
      "cep": "13010-111",
      "logradouro": "Rua Barão de Jaguara",
      "numero": "2089",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Campinas",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Fernandes Sul Ltda.",
      "nomeFantasia": "Marketing Fernandes Sul",
      "cnpj": "79.636.991/0001-53",
      "inscricaoEstadual": "679.390.251.162",
      "inscricaoMunicipal": "2.304.930-6",
      "emailComercial": "contato@marketingfernandessul.com.br",
      "telefoneComercial": "(19) 4354-1272",
      "site": "https://www.marketingfernandessul.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_050_renata_santos",
    "label": "Renata Aline Santos Moura — PF + PJ (MG)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Renata Aline Santos Moura",
      "primeiroNome": "Renata",
      "sobrenome": "Santos",
      "cpf": "606.321.793-25",
      "rg": "78.908.163-9",
      "dataNascimento": "1995-09-28",
      "genero": "Feminino",
      "email": "renata.aline.santos.moura.teste@example.com",
      "telefone": "(31) 3873-2801",
      "celular": "(31) 94336-9628",
      "profissao": "Arquiteta"
    },
    "endereco": {
      "cep": "30112-010",
      "logradouro": "Rua dos Carijós",
      "numero": "2502",
      "complemento": "Casa",
      "bairro": "Centro",
      "cidade": "Belo Horizonte",
      "estado": "Minas Gerais",
      "uf": "MG",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Costa Modelo Ltda.",
      "nomeFantasia": "Saúde Costa Modelo",
      "cnpj": "55.777.362/0001-85",
      "inscricaoEstadual": "671.355.865.703",
      "inscricaoMunicipal": "8.581.123-4",
      "emailComercial": "contato@saudecostamodelo.com.br",
      "telefoneComercial": "(31) 3083-5422",
      "site": "https://www.saudecostamodelo.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — MG. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_051_heitor_souza",
    "label": "Heitor Patrícia Souza Gomes — PF + PJ (PR)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Heitor Patrícia Souza Gomes",
      "primeiroNome": "Heitor",
      "sobrenome": "Souza",
      "cpf": "868.905.108-28",
      "rg": "66.281.160-8",
      "dataNascimento": "1995-03-28",
      "genero": "Masculino",
      "email": "heitor.patricia.souza.gomes.teste@example.com",
      "telefone": "(41) 3048-9115",
      "celular": "(41) 92823-5300",
      "profissao": "Arquiteto"
    },
    "endereco": {
      "cep": "80010-000",
      "logradouro": "Rua XV de Novembro",
      "numero": "2190",
      "complemento": "Loja 3",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "Paraná",
      "uf": "PR",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Costa Central Ltda.",
      "nomeFantasia": "Comercial Costa Central",
      "cnpj": "40.840.818/0001-37",
      "inscricaoEstadual": "728.729.546.504",
      "inscricaoMunicipal": "7.272.624-7",
      "emailComercial": "contato@comercialcostacentral.com.br",
      "telefoneComercial": "(41) 4546-5663",
      "site": "https://www.comercialcostacentral.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — PR. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_052_giovanna_campos",
    "label": "Giovanna Letícia Campos Rodrigues — PF + PJ (RS)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Giovanna Letícia Campos Rodrigues",
      "primeiroNome": "Giovanna",
      "sobrenome": "Campos",
      "cpf": "645.974.456-41",
      "rg": "13.953.916-1",
      "dataNascimento": "1987-06-11",
      "genero": "Feminino",
      "email": "giovanna.leticia.campos.rodrigues.teste@example.com",
      "telefone": "(51) 3767-4031",
      "celular": "(51) 98417-6612",
      "profissao": "Arquiteta"
    },
    "endereco": {
      "cep": "90010-150",
      "logradouro": "Rua dos Andradas",
      "numero": "356",
      "complemento": "Loja 3",
      "bairro": "Centro Histórico",
      "cidade": "Porto Alegre",
      "estado": "Rio Grande do Sul",
      "uf": "RS",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Santos Rio Ltda.",
      "nomeFantasia": "Serviços Santos Rio",
      "cnpj": "60.106.454/0001-73",
      "inscricaoEstadual": "144.264.676.595",
      "inscricaoMunicipal": "1.259.984-3",
      "emailComercial": "contato@servicossantosrio.com.br",
      "telefoneComercial": "(51) 3303-3822",
      "site": "https://www.servicossantosrio.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — RS. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_053_bernardo_rodrigues",
    "label": "Bernardo Manuela Rodrigues Fernandes — PF + PJ (SC)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Bernardo Manuela Rodrigues Fernandes",
      "primeiroNome": "Bernardo",
      "sobrenome": "Rodrigues",
      "cpf": "791.297.252-83",
      "rg": "29.459.621-8",
      "dataNascimento": "1988-03-11",
      "genero": "Masculino",
      "email": "bernardo.manuela.rodrigues.fernandes.teste@example.com",
      "telefone": "(48) 3183-6579",
      "celular": "(48) 97789-8941",
      "profissao": "Consultor Comercial"
    },
    "endereco": {
      "cep": "88010-560",
      "logradouro": "Rua Felipe Schmidt",
      "numero": "2421",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "uf": "SC",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Correia Urbana Ltda.",
      "nomeFantasia": "Tech Correia Urbana",
      "cnpj": "72.882.351/0001-84",
      "inscricaoEstadual": "765.849.669.452",
      "inscricaoMunicipal": "1.766.922-0",
      "emailComercial": "contato@techcorreiaurbana.com.br",
      "telefoneComercial": "(48) 4291-1177",
      "site": "https://www.techcorreiaurbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — SC. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_054_lorena_oliveira",
    "label": "Lorena Camila Oliveira Alves — PF + PJ (BA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lorena Camila Oliveira Alves",
      "primeiroNome": "Lorena",
      "sobrenome": "Oliveira",
      "cpf": "385.793.875-74",
      "rg": "39.127.129-2",
      "dataNascimento": "1992-04-13",
      "genero": "Feminino",
      "email": "lorena.camila.oliveira.alves.teste@example.com",
      "telefone": "(71) 3432-4121",
      "celular": "(71) 91102-1414",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "40020-010",
      "logradouro": "Rua da Ajuda",
      "numero": "1768",
      "complemento": "Bloco B",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "Bahia",
      "uf": "BA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Ferreira Prime Ltda.",
      "nomeFantasia": "Consultoria Ferreira Prime",
      "cnpj": "50.656.214/0001-99",
      "inscricaoEstadual": "948.975.424.432",
      "inscricaoMunicipal": "9.698.619-8",
      "emailComercial": "contato@consultoriaferreiraprime.com.br",
      "telefoneComercial": "(71) 3891-4825",
      "site": "https://www.consultoriaferreiraprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — BA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_055_samuel_gomes",
    "label": "Samuel Lorena Gomes Carvalho — PF + PJ (PE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Samuel Lorena Gomes Carvalho",
      "primeiroNome": "Samuel",
      "sobrenome": "Gomes",
      "cpf": "004.592.087-72",
      "rg": "13.499.549-2",
      "dataNascimento": "1993-08-12",
      "genero": "Masculino",
      "email": "samuel.lorena.gomes.carvalho.teste@example.com",
      "telefone": "(81) 3411-8724",
      "celular": "(81) 99660-2874",
      "profissao": "Engenheiro Civil"
    },
    "endereco": {
      "cep": "50030-230",
      "logradouro": "Rua do Bom Jesus",
      "numero": "2727",
      "complemento": "Conjunto 45",
      "bairro": "Recife Antigo",
      "cidade": "Recife",
      "estado": "Pernambuco",
      "uf": "PE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Souza Brasil Ltda.",
      "nomeFantasia": "Alimentos Souza Brasil",
      "cnpj": "84.252.236/0001-05",
      "inscricaoEstadual": "583.902.847.766",
      "inscricaoMunicipal": "7.523.752-4",
      "emailComercial": "contato@alimentossouzabrasil.com.br",
      "telefoneComercial": "(81) 4781-1547",
      "site": "https://www.alimentossouzabrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — PE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_056_camila_silva",
    "label": "Camila Eduardo Silva Gomes — PF + PJ (CE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Camila Eduardo Silva Gomes",
      "primeiroNome": "Camila",
      "sobrenome": "Silva",
      "cpf": "344.285.722-80",
      "rg": "20.396.954-7",
      "dataNascimento": "2000-12-01",
      "genero": "Feminino",
      "email": "camila.eduardo.silva.gomes.teste@example.com",
      "telefone": "(85) 3620-7137",
      "celular": "(85) 97083-5291",
      "profissao": "Consultora Comercial"
    },
    "endereco": {
      "cep": "60025-060",
      "logradouro": "Rua Floriano Peixoto",
      "numero": "2783",
      "complemento": "Conjunto 45",
      "bairro": "Centro",
      "cidade": "Fortaleza",
      "estado": "Ceará",
      "uf": "CE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Souza Prime Ltda.",
      "nomeFantasia": "Logística Souza Prime",
      "cnpj": "92.626.680/0001-71",
      "inscricaoEstadual": "110.834.898.431",
      "inscricaoMunicipal": "9.773.966-0",
      "emailComercial": "contato@logisticasouzaprime.com.br",
      "telefoneComercial": "(85) 4863-5688",
      "site": "https://www.logisticasouzaprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — CE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_057_felipe_silva",
    "label": "Felipe Letícia Silva Souza — PF + PJ (GO)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Felipe Letícia Silva Souza",
      "primeiroNome": "Felipe",
      "sobrenome": "Silva",
      "cpf": "078.722.728-57",
      "rg": "45.584.146-2",
      "dataNascimento": "1976-09-26",
      "genero": "Masculino",
      "email": "felipe.leticia.silva.souza.teste@example.com",
      "telefone": "(62) 3216-2192",
      "celular": "(62) 96847-8191",
      "profissao": "Arquiteto"
    },
    "endereco": {
      "cep": "74015-010",
      "logradouro": "Avenida Goiás",
      "numero": "261",
      "complemento": "Bloco B",
      "bairro": "Setor Central",
      "cidade": "Goiânia",
      "estado": "Goiás",
      "uf": "GO",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Monteiro Modelo Ltda.",
      "nomeFantasia": "Construtora Monteiro Modelo",
      "cnpj": "14.407.674/0001-10",
      "inscricaoEstadual": "997.581.457.534",
      "inscricaoMunicipal": "4.222.319-3",
      "emailComercial": "contato@construtoramonteiromodelo.com.br",
      "telefoneComercial": "(62) 4363-2039",
      "site": "https://www.construtoramonteiromodelo.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — GO. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_058_giovanna_santos",
    "label": "Giovanna Sophia Santos Costa — PF + PJ (DF)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Giovanna Sophia Santos Costa",
      "primeiroNome": "Giovanna",
      "sobrenome": "Santos",
      "cpf": "652.870.171-70",
      "rg": "76.904.357-0",
      "dataNascimento": "1984-06-17",
      "genero": "Feminino",
      "email": "giovanna.sophia.santos.costa.teste@example.com",
      "telefone": "(61) 3848-8759",
      "celular": "(61) 94126-4361",
      "profissao": "Arquiteta"
    },
    "endereco": {
      "cep": "70040-010",
      "logradouro": "SCS Quadra 2",
      "numero": "288",
      "complemento": "Conjunto 45",
      "bairro": "Asa Sul",
      "cidade": "Brasília",
      "estado": "Distrito Federal",
      "uf": "DF",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Almeida Urbana Ltda.",
      "nomeFantasia": "Educação Almeida Urbana",
      "cnpj": "33.722.223/0001-11",
      "inscricaoEstadual": "414.171.475.929",
      "inscricaoMunicipal": "2.299.921-8",
      "emailComercial": "contato@educacaoalmeidaurbana.com.br",
      "telefoneComercial": "(61) 3739-7168",
      "site": "https://www.educacaoalmeidaurbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — DF. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_059_felipe_silva",
    "label": "Felipe Beatriz Silva Souza — PF + PJ (AM)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Felipe Beatriz Silva Souza",
      "primeiroNome": "Felipe",
      "sobrenome": "Silva",
      "cpf": "714.266.188-75",
      "rg": "91.313.734-2",
      "dataNascimento": "1990-06-22",
      "genero": "Masculino",
      "email": "felipe.beatriz.silva.souza.teste@example.com",
      "telefone": "(92) 3734-5417",
      "celular": "(92) 91778-4462",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "69005-070",
      "logradouro": "Avenida Eduardo Ribeiro",
      "numero": "1794",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Manaus",
      "estado": "Amazonas",
      "uf": "AM",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Ferreira Prime Ltda.",
      "nomeFantasia": "Marketing Ferreira Prime",
      "cnpj": "55.085.276/0001-01",
      "inscricaoEstadual": "662.940.706.858",
      "inscricaoMunicipal": "8.890.880-3",
      "emailComercial": "contato@marketingferreiraprime.com.br",
      "telefoneComercial": "(92) 3723-6012",
      "site": "https://www.marketingferreiraprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — AM. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_060_beatriz_dias",
    "label": "Beatriz Eduardo Dias Ferreira — PF + PJ (PA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Beatriz Eduardo Dias Ferreira",
      "primeiroNome": "Beatriz",
      "sobrenome": "Dias",
      "cpf": "332.169.380-18",
      "rg": "95.928.495-9",
      "dataNascimento": "1979-10-24",
      "genero": "Feminino",
      "email": "beatriz.eduardo.dias.ferreira.teste@example.com",
      "telefone": "(91) 3223-9624",
      "celular": "(91) 91925-3367",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "66010-000",
      "logradouro": "Avenida Presidente Vargas",
      "numero": "90",
      "complemento": "Conjunto 45",
      "bairro": "Campina",
      "cidade": "Belém",
      "estado": "Pará",
      "uf": "PA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Moura Nova Ltda.",
      "nomeFantasia": "Saúde Moura Nova",
      "cnpj": "04.341.772/0001-48",
      "inscricaoEstadual": "896.913.476.772",
      "inscricaoMunicipal": "2.273.825-5",
      "emailComercial": "contato@saudemouranova.com.br",
      "telefoneComercial": "(91) 4652-3257",
      "site": "https://www.saudemouranova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — PA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_061_miguel_gomes",
    "label": "Miguel Bernardo Gomes Moura — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Miguel Bernardo Gomes Moura",
      "primeiroNome": "Miguel",
      "sobrenome": "Gomes",
      "cpf": "975.490.262-38",
      "rg": "73.261.418-8",
      "dataNascimento": "1975-05-11",
      "genero": "Masculino",
      "email": "miguel.bernardo.gomes.moura.teste@example.com",
      "telefone": "(21) 3681-5687",
      "celular": "(21) 98713-1959",
      "profissao": "Técnico em Informática"
    },
    "endereco": {
      "cep": "20040-020",
      "logradouro": "Rua da Assembleia",
      "numero": "121",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Lima Nova Ltda.",
      "nomeFantasia": "Comercial Lima Nova",
      "cnpj": "89.363.823/0001-95",
      "inscricaoEstadual": "452.804.706.805",
      "inscricaoMunicipal": "1.553.872-4",
      "emailComercial": "contato@comerciallimanova.com.br",
      "telefoneComercial": "(21) 3025-6510",
      "site": "https://www.comerciallimanova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_062_mariana_santos",
    "label": "Mariana Carolina Santos Lima — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Mariana Carolina Santos Lima",
      "primeiroNome": "Mariana",
      "sobrenome": "Santos",
      "cpf": "699.813.526-24",
      "rg": "98.186.486-0",
      "dataNascimento": "1989-06-20",
      "genero": "Feminino",
      "email": "mariana.carolina.santos.lima.teste@example.com",
      "telefone": "(21) 3032-7785",
      "celular": "(21) 93465-1948",
      "profissao": "Consultora Comercial"
    },
    "endereco": {
      "cep": "24020-125",
      "logradouro": "Rua das Flores",
      "numero": "2297",
      "complemento": "Casa",
      "bairro": "Icaraí",
      "cidade": "Niterói",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Lima Brasil Ltda.",
      "nomeFantasia": "Serviços Lima Brasil",
      "cnpj": "98.536.694/0001-80",
      "inscricaoEstadual": "699.770.295.785",
      "inscricaoMunicipal": "3.131.868-0",
      "emailComercial": "contato@servicoslimabrasil.com.br",
      "telefoneComercial": "(21) 4143-8251",
      "site": "https://www.servicoslimabrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_063_felipe_costa",
    "label": "Felipe Pedro Costa Soares — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Felipe Pedro Costa Soares",
      "primeiroNome": "Felipe",
      "sobrenome": "Costa",
      "cpf": "712.662.774-20",
      "rg": "71.200.547-0",
      "dataNascimento": "1980-09-13",
      "genero": "Masculino",
      "email": "felipe.pedro.costa.soares.teste@example.com",
      "telefone": "(11) 3800-7216",
      "celular": "(11) 93379-9584",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "01310-100",
      "logradouro": "Avenida Paulista",
      "numero": "1115",
      "complemento": "Apto 202",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Dias Prime Ltda.",
      "nomeFantasia": "Tech Dias Prime",
      "cnpj": "33.004.220/0001-42",
      "inscricaoEstadual": "944.378.444.922",
      "inscricaoMunicipal": "1.711.811-8",
      "emailComercial": "contato@techdiasprime.com.br",
      "telefoneComercial": "(11) 4224-2198",
      "site": "https://www.techdiasprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_064_valentina_alves",
    "label": "Valentina Enzo Alves Almeida — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Valentina Enzo Alves Almeida",
      "primeiroNome": "Valentina",
      "sobrenome": "Alves",
      "cpf": "372.684.284-56",
      "rg": "81.559.535-2",
      "dataNascimento": "1994-04-13",
      "genero": "Feminino",
      "email": "valentina.enzo.alves.almeida.teste@example.com",
      "telefone": "(19) 3731-2092",
      "celular": "(19) 94708-9880",
      "profissao": "Analista de Sistemas"
    },
    "endereco": {
      "cep": "13010-111",
      "logradouro": "Rua Barão de Jaguara",
      "numero": "1753",
      "complemento": "Loja 3",
      "bairro": "Centro",
      "cidade": "Campinas",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Santos Nacional Ltda.",
      "nomeFantasia": "Consultoria Santos Nacional",
      "cnpj": "01.034.213/0001-05",
      "inscricaoEstadual": "508.180.110.849",
      "inscricaoMunicipal": "2.479.165-9",
      "emailComercial": "contato@consultoriasantosnacional.com.br",
      "telefoneComercial": "(19) 3170-1984",
      "site": "https://www.consultoriasantosnacional.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_065_vinicius_almeida",
    "label": "Vinícius Caio Almeida Vieira — PF + PJ (MG)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Vinícius Caio Almeida Vieira",
      "primeiroNome": "Vinícius",
      "sobrenome": "Almeida",
      "cpf": "011.006.753-37",
      "rg": "72.150.965-8",
      "dataNascimento": "1990-07-14",
      "genero": "Masculino",
      "email": "vinicius.caio.almeida.vieira.teste@example.com",
      "telefone": "(31) 3199-4854",
      "celular": "(31) 97335-9033",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "30112-010",
      "logradouro": "Rua dos Carijós",
      "numero": "145",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Belo Horizonte",
      "estado": "Minas Gerais",
      "uf": "MG",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Silva Nova Ltda.",
      "nomeFantasia": "Alimentos Silva Nova",
      "cnpj": "04.471.107/0001-79",
      "inscricaoEstadual": "129.959.158.789",
      "inscricaoMunicipal": "7.850.927-1",
      "emailComercial": "contato@alimentossilvanova.com.br",
      "telefoneComercial": "(31) 3732-8206",
      "site": "https://www.alimentossilvanova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — MG. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_066_fernanda_vieira",
    "label": "Fernanda Eduardo Vieira Costa — PF + PJ (PR)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Fernanda Eduardo Vieira Costa",
      "primeiroNome": "Fernanda",
      "sobrenome": "Vieira",
      "cpf": "979.550.286-78",
      "rg": "33.339.580-8",
      "dataNascimento": "1972-09-08",
      "genero": "Feminino",
      "email": "fernanda.eduardo.vieira.costa.teste@example.com",
      "telefone": "(41) 3326-4230",
      "celular": "(41) 98454-7739",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "80010-000",
      "logradouro": "Rua XV de Novembro",
      "numero": "2510",
      "complemento": "Loja 3",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "Paraná",
      "uf": "PR",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Gomes Rio Ltda.",
      "nomeFantasia": "Logística Gomes Rio",
      "cnpj": "52.531.596/0001-50",
      "inscricaoEstadual": "683.909.717.868",
      "inscricaoMunicipal": "9.260.481-8",
      "emailComercial": "contato@logisticagomesrio.com.br",
      "telefoneComercial": "(41) 4132-6317",
      "site": "https://www.logisticagomesrio.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — PR. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_067_felipe_oliveira",
    "label": "Felipe Fernanda Oliveira Barbosa — PF + PJ (RS)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Felipe Fernanda Oliveira Barbosa",
      "primeiroNome": "Felipe",
      "sobrenome": "Oliveira",
      "cpf": "619.537.126-22",
      "rg": "93.412.772-1",
      "dataNascimento": "1995-08-09",
      "genero": "Masculino",
      "email": "felipe.fernanda.oliveira.barbosa.teste@example.com",
      "telefone": "(51) 3702-8504",
      "celular": "(51) 96965-3301",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "90010-150",
      "logradouro": "Rua dos Andradas",
      "numero": "1832",
      "complemento": "Casa",
      "bairro": "Centro Histórico",
      "cidade": "Porto Alegre",
      "estado": "Rio Grande do Sul",
      "uf": "RS",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Alves Brasil Ltda.",
      "nomeFantasia": "Construtora Alves Brasil",
      "cnpj": "39.365.884/0001-13",
      "inscricaoEstadual": "107.693.979.809",
      "inscricaoMunicipal": "4.359.949-5",
      "emailComercial": "contato@construtoraalvesbrasil.com.br",
      "telefoneComercial": "(51) 4307-5829",
      "site": "https://www.construtoraalvesbrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — RS. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_068_camila_almeida",
    "label": "Camila Arthur Almeida Silva — PF + PJ (SC)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Camila Arthur Almeida Silva",
      "primeiroNome": "Camila",
      "sobrenome": "Almeida",
      "cpf": "176.918.551-84",
      "rg": "25.660.903-5",
      "dataNascimento": "1975-12-28",
      "genero": "Feminino",
      "email": "camila.arthur.almeida.silva.teste@example.com",
      "telefone": "(48) 3983-4048",
      "celular": "(48) 98452-5731",
      "profissao": "Técnica em Informática"
    },
    "endereco": {
      "cep": "88010-560",
      "logradouro": "Rua Felipe Schmidt",
      "numero": "2099",
      "complemento": "Sala 101",
      "bairro": "Centro",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "uf": "SC",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Vieira Brasil Ltda.",
      "nomeFantasia": "Educação Vieira Brasil",
      "cnpj": "68.483.462/0001-40",
      "inscricaoEstadual": "607.736.647.450",
      "inscricaoMunicipal": "7.292.701-7",
      "emailComercial": "contato@educacaovieirabrasil.com.br",
      "telefoneComercial": "(48) 3527-4793",
      "site": "https://www.educacaovieirabrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — SC. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_069_caio_almeida",
    "label": "Caio Carolina Almeida Monteiro — PF + PJ (BA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Caio Carolina Almeida Monteiro",
      "primeiroNome": "Caio",
      "sobrenome": "Almeida",
      "cpf": "957.719.290-42",
      "rg": "50.969.727-3",
      "dataNascimento": "1987-12-07",
      "genero": "Masculino",
      "email": "caio.carolina.almeida.monteiro.teste@example.com",
      "telefone": "(71) 3681-6388",
      "celular": "(71) 92707-5295",
      "profissao": "Técnico em Informática"
    },
    "endereco": {
      "cep": "40020-010",
      "logradouro": "Rua da Ajuda",
      "numero": "516",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "Bahia",
      "uf": "BA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Oliveira Digital Ltda.",
      "nomeFantasia": "Marketing Oliveira Digital",
      "cnpj": "20.340.239/0001-18",
      "inscricaoEstadual": "164.668.481.163",
      "inscricaoMunicipal": "2.715.748-2",
      "emailComercial": "contato@marketingoliveiradigital.com.br",
      "telefoneComercial": "(71) 4652-9884",
      "site": "https://www.marketingoliveiradigital.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — BA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_070_luiza_campos",
    "label": "Luiza Lucas Campos Costa — PF + PJ (PE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Luiza Lucas Campos Costa",
      "primeiroNome": "Luiza",
      "sobrenome": "Campos",
      "cpf": "720.497.703-32",
      "rg": "11.592.534-5",
      "dataNascimento": "1976-09-02",
      "genero": "Feminino",
      "email": "luiza.lucas.campos.costa.teste@example.com",
      "telefone": "(81) 3821-8382",
      "celular": "(81) 91005-3595",
      "profissao": "Administradora"
    },
    "endereco": {
      "cep": "50030-230",
      "logradouro": "Rua do Bom Jesus",
      "numero": "453",
      "complemento": "Sala 101",
      "bairro": "Recife Antigo",
      "cidade": "Recife",
      "estado": "Pernambuco",
      "uf": "PE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Santos Brasil Ltda.",
      "nomeFantasia": "Saúde Santos Brasil",
      "cnpj": "98.420.898/0001-51",
      "inscricaoEstadual": "641.789.660.735",
      "inscricaoMunicipal": "3.737.966-4",
      "emailComercial": "contato@saudesantosbrasil.com.br",
      "telefoneComercial": "(81) 3477-9959",
      "site": "https://www.saudesantosbrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — PE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_071_nicolas_silva",
    "label": "Nicolas Gustavo Silva Castro — PF + PJ (CE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Nicolas Gustavo Silva Castro",
      "primeiroNome": "Nicolas",
      "sobrenome": "Silva",
      "cpf": "403.703.260-08",
      "rg": "76.441.903-6",
      "dataNascimento": "1998-07-17",
      "genero": "Masculino",
      "email": "nicolas.gustavo.silva.castro.teste@example.com",
      "telefone": "(85) 3960-5554",
      "celular": "(85) 96423-4649",
      "profissao": "Técnico em Informática"
    },
    "endereco": {
      "cep": "60025-060",
      "logradouro": "Rua Floriano Peixoto",
      "numero": "115",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Fortaleza",
      "estado": "Ceará",
      "uf": "CE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Dias Brasil Ltda.",
      "nomeFantasia": "Comercial Dias Brasil",
      "cnpj": "41.506.868/0001-45",
      "inscricaoEstadual": "353.122.465.174",
      "inscricaoMunicipal": "6.680.691-6",
      "emailComercial": "contato@comercialdiasbrasil.com.br",
      "telefoneComercial": "(85) 3021-1094",
      "site": "https://www.comercialdiasbrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — CE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_072_isabella_ferreira",
    "label": "Isabella Renata Ferreira Carvalho — PF + PJ (GO)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Isabella Renata Ferreira Carvalho",
      "primeiroNome": "Isabella",
      "sobrenome": "Ferreira",
      "cpf": "958.388.167-83",
      "rg": "81.302.735-5",
      "dataNascimento": "1991-12-21",
      "genero": "Feminino",
      "email": "isabella.renata.ferreira.carvalho.teste@example.com",
      "telefone": "(62) 3131-3545",
      "celular": "(62) 92537-4485",
      "profissao": "Consultora Comercial"
    },
    "endereco": {
      "cep": "74015-010",
      "logradouro": "Avenida Goiás",
      "numero": "2278",
      "complemento": "Sala 101",
      "bairro": "Setor Central",
      "cidade": "Goiânia",
      "estado": "Goiás",
      "uf": "GO",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Moura Digital Ltda.",
      "nomeFantasia": "Serviços Moura Digital",
      "cnpj": "81.471.135/0001-37",
      "inscricaoEstadual": "274.738.219.385",
      "inscricaoMunicipal": "1.728.749-7",
      "emailComercial": "contato@servicosmouradigital.com.br",
      "telefoneComercial": "(62) 4094-8165",
      "site": "https://www.servicosmouradigital.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — GO. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_073_gabriel_barbosa",
    "label": "Gabriel Felipe Barbosa Souza — PF + PJ (DF)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Gabriel Felipe Barbosa Souza",
      "primeiroNome": "Gabriel",
      "sobrenome": "Barbosa",
      "cpf": "348.252.845-40",
      "rg": "42.276.163-1",
      "dataNascimento": "1993-04-11",
      "genero": "Masculino",
      "email": "gabriel.felipe.barbosa.souza.teste@example.com",
      "telefone": "(61) 3704-2378",
      "celular": "(61) 99169-7965",
      "profissao": "Consultor Comercial"
    },
    "endereco": {
      "cep": "70040-010",
      "logradouro": "SCS Quadra 2",
      "numero": "2154",
      "complemento": "Apto 202",
      "bairro": "Asa Sul",
      "cidade": "Brasília",
      "estado": "Distrito Federal",
      "uf": "DF",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Azevedo Nacional Ltda.",
      "nomeFantasia": "Tech Azevedo Nacional",
      "cnpj": "84.122.909/0001-02",
      "inscricaoEstadual": "762.942.445.359",
      "inscricaoMunicipal": "4.909.910-4",
      "emailComercial": "contato@techazevedonacional.com.br",
      "telefoneComercial": "(61) 4037-4669",
      "site": "https://www.techazevedonacional.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — DF. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_074_maria_santos",
    "label": "Maria Luiza Santos Barbosa — PF + PJ (AM)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Maria Luiza Santos Barbosa",
      "primeiroNome": "Maria",
      "sobrenome": "Santos",
      "cpf": "281.964.429-55",
      "rg": "77.424.318-5",
      "dataNascimento": "1974-06-14",
      "genero": "Feminino",
      "email": "maria.luiza.santos.barbosa.teste@example.com",
      "telefone": "(92) 3581-8535",
      "celular": "(92) 93424-3229",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "69005-070",
      "logradouro": "Avenida Eduardo Ribeiro",
      "numero": "762",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Manaus",
      "estado": "Amazonas",
      "uf": "AM",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Monteiro Nacional Ltda.",
      "nomeFantasia": "Consultoria Monteiro Nacional",
      "cnpj": "67.533.820/0001-10",
      "inscricaoEstadual": "167.643.499.717",
      "inscricaoMunicipal": "2.623.101-9",
      "emailComercial": "contato@consultoriamonteironacional.com.br",
      "telefoneComercial": "(92) 3312-6605",
      "site": "https://www.consultoriamonteironacional.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — AM. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_075_samuel_silva",
    "label": "Samuel Luiza Silva Moura — PF + PJ (PA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Samuel Luiza Silva Moura",
      "primeiroNome": "Samuel",
      "sobrenome": "Silva",
      "cpf": "087.875.740-63",
      "rg": "26.936.684-8",
      "dataNascimento": "1991-06-18",
      "genero": "Masculino",
      "email": "samuel.luiza.silva.moura.teste@example.com",
      "telefone": "(91) 3645-2317",
      "celular": "(91) 94362-8003",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "66010-000",
      "logradouro": "Avenida Presidente Vargas",
      "numero": "245",
      "complemento": "Casa",
      "bairro": "Campina",
      "cidade": "Belém",
      "estado": "Pará",
      "uf": "PA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Cardoso Urbana Ltda.",
      "nomeFantasia": "Alimentos Cardoso Urbana",
      "cnpj": "33.524.965/0001-32",
      "inscricaoEstadual": "359.886.321.391",
      "inscricaoMunicipal": "8.882.921-4",
      "emailComercial": "contato@alimentoscardosourbana.com.br",
      "telefoneComercial": "(91) 4943-1925",
      "site": "https://www.alimentoscardosourbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — PA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_076_giovanna_monteiro",
    "label": "Giovanna Maria Monteiro Rodrigues — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Giovanna Maria Monteiro Rodrigues",
      "primeiroNome": "Giovanna",
      "sobrenome": "Monteiro",
      "cpf": "130.908.094-19",
      "rg": "10.253.246-4",
      "dataNascimento": "1970-05-10",
      "genero": "Feminino",
      "email": "giovanna.maria.monteiro.rodrigues.teste@example.com",
      "telefone": "(21) 3817-8865",
      "celular": "(21) 96191-9997",
      "profissao": "Arquiteta"
    },
    "endereco": {
      "cep": "20040-020",
      "logradouro": "Rua da Assembleia",
      "numero": "1903",
      "complemento": "Casa",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Silva Digital Ltda.",
      "nomeFantasia": "Logística Silva Digital",
      "cnpj": "15.430.813/0001-99",
      "inscricaoEstadual": "799.104.494.423",
      "inscricaoMunicipal": "7.274.318-5",
      "emailComercial": "contato@logisticasilvadigital.com.br",
      "telefoneComercial": "(21) 3735-7964",
      "site": "https://www.logisticasilvadigital.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_077_samuel_moura",
    "label": "Samuel Bianca Moura Santos — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Samuel Bianca Moura Santos",
      "primeiroNome": "Samuel",
      "sobrenome": "Moura",
      "cpf": "912.843.662-86",
      "rg": "27.607.439-5",
      "dataNascimento": "1973-01-01",
      "genero": "Masculino",
      "email": "samuel.bianca.moura.santos.teste@example.com",
      "telefone": "(21) 3637-7384",
      "celular": "(21) 98402-8009",
      "profissao": "Engenheiro Civil"
    },
    "endereco": {
      "cep": "24020-125",
      "logradouro": "Rua das Flores",
      "numero": "1584",
      "complemento": "",
      "bairro": "Icaraí",
      "cidade": "Niterói",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Santos Urbana Ltda.",
      "nomeFantasia": "Construtora Santos Urbana",
      "cnpj": "20.663.799/0001-03",
      "inscricaoEstadual": "453.302.777.716",
      "inscricaoMunicipal": "1.971.129-4",
      "emailComercial": "contato@construtorasantosurbana.com.br",
      "telefoneComercial": "(21) 4911-5018",
      "site": "https://www.construtorasantosurbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_078_debora_fernandes",
    "label": "Débora Sophia Fernandes Souza — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Débora Sophia Fernandes Souza",
      "primeiroNome": "Débora",
      "sobrenome": "Fernandes",
      "cpf": "764.767.587-72",
      "rg": "10.620.295-9",
      "dataNascimento": "1996-02-07",
      "genero": "Feminino",
      "email": "debora.sophia.fernandes.souza.teste@example.com",
      "telefone": "(11) 3866-5830",
      "celular": "(11) 91790-4046",
      "profissao": "Técnica em Informática"
    },
    "endereco": {
      "cep": "01310-100",
      "logradouro": "Avenida Paulista",
      "numero": "247",
      "complemento": "Bloco B",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Monteiro Urbana Ltda.",
      "nomeFantasia": "Educação Monteiro Urbana",
      "cnpj": "62.054.192/0001-76",
      "inscricaoEstadual": "254.443.817.129",
      "inscricaoMunicipal": "5.365.435-6",
      "emailComercial": "contato@educacaomonteirourbana.com.br",
      "telefoneComercial": "(11) 4204-5035",
      "site": "https://www.educacaomonteirourbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_079_davi_moura",
    "label": "Davi Leonardo Moura Fernandes — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Davi Leonardo Moura Fernandes",
      "primeiroNome": "Davi",
      "sobrenome": "Moura",
      "cpf": "077.026.453-00",
      "rg": "86.733.253-1",
      "dataNascimento": "1985-08-20",
      "genero": "Masculino",
      "email": "davi.leonardo.moura.fernandes.teste@example.com",
      "telefone": "(19) 3008-8919",
      "celular": "(19) 99476-3336",
      "profissao": "Contador"
    },
    "endereco": {
      "cep": "13010-111",
      "logradouro": "Rua Barão de Jaguara",
      "numero": "321",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Campinas",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Soares Urbana Ltda.",
      "nomeFantasia": "Marketing Soares Urbana",
      "cnpj": "90.050.077/0001-69",
      "inscricaoEstadual": "402.466.103.898",
      "inscricaoMunicipal": "2.338.206-5",
      "emailComercial": "contato@marketingsoaresurbana.com.br",
      "telefoneComercial": "(19) 3893-2146",
      "site": "https://www.marketingsoaresurbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_080_bianca_cardoso",
    "label": "Bianca Lucas Cardoso Almeida — PF + PJ (MG)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Bianca Lucas Cardoso Almeida",
      "primeiroNome": "Bianca",
      "sobrenome": "Cardoso",
      "cpf": "085.623.846-58",
      "rg": "44.736.380-3",
      "dataNascimento": "1977-10-23",
      "genero": "Feminino",
      "email": "bianca.lucas.cardoso.almeida.teste@example.com",
      "telefone": "(31) 3180-6449",
      "celular": "(31) 92732-1018",
      "profissao": "Contadora"
    },
    "endereco": {
      "cep": "30112-010",
      "logradouro": "Rua dos Carijós",
      "numero": "162",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Belo Horizonte",
      "estado": "Minas Gerais",
      "uf": "MG",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Correia Sul Ltda.",
      "nomeFantasia": "Saúde Correia Sul",
      "cnpj": "54.130.761/0001-97",
      "inscricaoEstadual": "918.766.626.962",
      "inscricaoMunicipal": "8.975.880-5",
      "emailComercial": "contato@saudecorreiasul.com.br",
      "telefoneComercial": "(31) 3143-3243",
      "site": "https://www.saudecorreiasul.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — MG. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_081_gabriel_castro",
    "label": "Gabriel Bruno Castro Oliveira — PF + PJ (PR)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Gabriel Bruno Castro Oliveira",
      "primeiroNome": "Gabriel",
      "sobrenome": "Castro",
      "cpf": "188.213.855-40",
      "rg": "38.580.570-7",
      "dataNascimento": "2000-10-15",
      "genero": "Masculino",
      "email": "gabriel.bruno.castro.oliveira.teste@example.com",
      "telefone": "(41) 3540-3725",
      "celular": "(41) 97877-5545",
      "profissao": "Arquiteto"
    },
    "endereco": {
      "cep": "80010-000",
      "logradouro": "Rua XV de Novembro",
      "numero": "2840",
      "complemento": "Loja 3",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "Paraná",
      "uf": "PR",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Almeida Central Ltda.",
      "nomeFantasia": "Comercial Almeida Central",
      "cnpj": "94.386.296/0001-74",
      "inscricaoEstadual": "211.522.590.499",
      "inscricaoMunicipal": "4.304.960-2",
      "emailComercial": "contato@comercialalmeidacentral.com.br",
      "telefoneComercial": "(41) 3580-8903",
      "site": "https://www.comercialalmeidacentral.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — PR. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_082_debora_correia",
    "label": "Débora Matheus Correia Pereira — PF + PJ (RS)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Débora Matheus Correia Pereira",
      "primeiroNome": "Débora",
      "sobrenome": "Correia",
      "cpf": "799.029.543-16",
      "rg": "30.716.834-9",
      "dataNascimento": "1994-03-02",
      "genero": "Feminino",
      "email": "debora.matheus.correia.pereira.teste@example.com",
      "telefone": "(51) 3568-3626",
      "celular": "(51) 96376-3990",
      "profissao": "Administradora"
    },
    "endereco": {
      "cep": "90010-150",
      "logradouro": "Rua dos Andradas",
      "numero": "950",
      "complemento": "Loja 3",
      "bairro": "Centro Histórico",
      "cidade": "Porto Alegre",
      "estado": "Rio Grande do Sul",
      "uf": "RS",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Ribeiro Sul Ltda.",
      "nomeFantasia": "Serviços Ribeiro Sul",
      "cnpj": "34.190.955/0001-70",
      "inscricaoEstadual": "374.134.674.384",
      "inscricaoMunicipal": "5.208.727-7",
      "emailComercial": "contato@servicosribeirosul.com.br",
      "telefoneComercial": "(51) 4137-2331",
      "site": "https://www.servicosribeirosul.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — RS. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_083_daniel_gomes",
    "label": "Daniel Lívia Gomes Alves — PF + PJ (SC)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Daniel Lívia Gomes Alves",
      "primeiroNome": "Daniel",
      "sobrenome": "Gomes",
      "cpf": "767.780.241-94",
      "rg": "65.243.465-2",
      "dataNascimento": "1986-10-14",
      "genero": "Masculino",
      "email": "daniel.livia.gomes.alves.teste@example.com",
      "telefone": "(48) 3224-3684",
      "celular": "(48) 91102-8078",
      "profissao": "Professor"
    },
    "endereco": {
      "cep": "88010-560",
      "logradouro": "Rua Felipe Schmidt",
      "numero": "251",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "uf": "SC",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Oliveira Prime Ltda.",
      "nomeFantasia": "Tech Oliveira Prime",
      "cnpj": "42.359.843/0001-29",
      "inscricaoEstadual": "526.556.802.805",
      "inscricaoMunicipal": "5.892.274-5",
      "emailComercial": "contato@techoliveiraprime.com.br",
      "telefoneComercial": "(48) 3336-1096",
      "site": "https://www.techoliveiraprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — SC. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_084_lorena_oliveira",
    "label": "Lorena Matheus Oliveira Alves — PF + PJ (BA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lorena Matheus Oliveira Alves",
      "primeiroNome": "Lorena",
      "sobrenome": "Oliveira",
      "cpf": "116.472.555-62",
      "rg": "19.322.330-8",
      "dataNascimento": "1993-03-03",
      "genero": "Feminino",
      "email": "lorena.matheus.oliveira.alves.teste@example.com",
      "telefone": "(71) 3992-9739",
      "celular": "(71) 99498-1958",
      "profissao": "Arquiteta"
    },
    "endereco": {
      "cep": "40020-010",
      "logradouro": "Rua da Ajuda",
      "numero": "1505",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "Bahia",
      "uf": "BA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Soares Prime Ltda.",
      "nomeFantasia": "Consultoria Soares Prime",
      "cnpj": "41.300.227/0001-30",
      "inscricaoEstadual": "157.430.828.108",
      "inscricaoMunicipal": "3.777.933-6",
      "emailComercial": "contato@consultoriasoaresprime.com.br",
      "telefoneComercial": "(71) 3138-9380",
      "site": "https://www.consultoriasoaresprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — BA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_085_lucas_carvalho",
    "label": "Lucas Rafael Carvalho Azevedo — PF + PJ (PE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lucas Rafael Carvalho Azevedo",
      "primeiroNome": "Lucas",
      "sobrenome": "Carvalho",
      "cpf": "152.677.188-82",
      "rg": "24.598.214-1",
      "dataNascimento": "1974-07-18",
      "genero": "Masculino",
      "email": "lucas.rafael.carvalho.azevedo.teste@example.com",
      "telefone": "(81) 3452-5105",
      "celular": "(81) 97526-9448",
      "profissao": "Designer de Produto"
    },
    "endereco": {
      "cep": "50030-230",
      "logradouro": "Rua do Bom Jesus",
      "numero": "1621",
      "complemento": "Sala 101",
      "bairro": "Recife Antigo",
      "cidade": "Recife",
      "estado": "Pernambuco",
      "uf": "PE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Fernandes Central Ltda.",
      "nomeFantasia": "Alimentos Fernandes Central",
      "cnpj": "03.329.353/0001-28",
      "inscricaoEstadual": "532.665.252.592",
      "inscricaoMunicipal": "1.425.463-6",
      "emailComercial": "contato@alimentosfernandescentral.com.br",
      "telefoneComercial": "(81) 3191-1573",
      "site": "https://www.alimentosfernandescentral.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — PE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_086_camila_carvalho",
    "label": "Camila João Carvalho Monteiro — PF + PJ (CE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Camila João Carvalho Monteiro",
      "primeiroNome": "Camila",
      "sobrenome": "Carvalho",
      "cpf": "556.973.558-58",
      "rg": "73.977.411-1",
      "dataNascimento": "1980-09-14",
      "genero": "Feminino",
      "email": "camila.joao.carvalho.monteiro.teste@example.com",
      "telefone": "(85) 3417-5239",
      "celular": "(85) 92560-2838",
      "profissao": "Técnica em Informática"
    },
    "endereco": {
      "cep": "60025-060",
      "logradouro": "Rua Floriano Peixoto",
      "numero": "1326",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Fortaleza",
      "estado": "Ceará",
      "uf": "CE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Vieira Urbana Ltda.",
      "nomeFantasia": "Logística Vieira Urbana",
      "cnpj": "70.303.418/0001-53",
      "inscricaoEstadual": "917.282.314.540",
      "inscricaoMunicipal": "4.549.939-7",
      "emailComercial": "contato@logisticavieiraurbana.com.br",
      "telefoneComercial": "(85) 4298-7869",
      "site": "https://www.logisticavieiraurbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — CE. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_087_enzo_lopes",
    "label": "Enzo Valentina Lopes Ferreira — PF + PJ (GO)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Enzo Valentina Lopes Ferreira",
      "primeiroNome": "Enzo",
      "sobrenome": "Lopes",
      "cpf": "739.968.105-80",
      "rg": "93.207.804-0",
      "dataNascimento": "1984-12-27",
      "genero": "Masculino",
      "email": "enzo.valentina.lopes.ferreira.teste@example.com",
      "telefone": "(62) 3416-5211",
      "celular": "(62) 91491-2769",
      "profissao": "Consultor Comercial"
    },
    "endereco": {
      "cep": "74015-010",
      "logradouro": "Avenida Goiás",
      "numero": "1682",
      "complemento": "Apto 202",
      "bairro": "Setor Central",
      "cidade": "Goiânia",
      "estado": "Goiás",
      "uf": "GO",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Rodrigues Nacional Ltda.",
      "nomeFantasia": "Construtora Rodrigues Nacional",
      "cnpj": "24.160.112/0001-78",
      "inscricaoEstadual": "263.596.250.593",
      "inscricaoMunicipal": "7.310.392-8",
      "emailComercial": "contato@construtorarodriguesnacional.com.br",
      "telefoneComercial": "(62) 4506-4840",
      "site": "https://www.construtorarodriguesnacional.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — GO. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_088_heloisa_rodrigues",
    "label": "Heloísa Henrique Rodrigues Cardoso — PF + PJ (DF)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Heloísa Henrique Rodrigues Cardoso",
      "primeiroNome": "Heloísa",
      "sobrenome": "Rodrigues",
      "cpf": "883.345.483-54",
      "rg": "90.748.790-2",
      "dataNascimento": "1972-03-22",
      "genero": "Feminino",
      "email": "heloisa.henrique.rodrigues.cardoso.teste@example.com",
      "telefone": "(61) 3095-9152",
      "celular": "(61) 97802-9904",
      "profissao": "Consultora Comercial"
    },
    "endereco": {
      "cep": "70040-010",
      "logradouro": "SCS Quadra 2",
      "numero": "531",
      "complemento": "Casa",
      "bairro": "Asa Sul",
      "cidade": "Brasília",
      "estado": "Distrito Federal",
      "uf": "DF",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Souza Nova Ltda.",
      "nomeFantasia": "Educação Souza Nova",
      "cnpj": "31.176.555/0001-12",
      "inscricaoEstadual": "836.344.400.826",
      "inscricaoMunicipal": "9.388.325-8",
      "emailComercial": "contato@educacaosouzanova.com.br",
      "telefoneComercial": "(61) 3491-5885",
      "site": "https://www.educacaosouzanova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — DF. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_089_rafael_santos",
    "label": "Rafael Pedro Santos Carvalho — PF + PJ (AM)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Rafael Pedro Santos Carvalho",
      "primeiroNome": "Rafael",
      "sobrenome": "Santos",
      "cpf": "861.124.424-93",
      "rg": "56.824.596-5",
      "dataNascimento": "1986-10-19",
      "genero": "Masculino",
      "email": "rafael.pedro.santos.carvalho.teste@example.com",
      "telefone": "(92) 3929-7490",
      "celular": "(92) 93618-8521",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "69005-070",
      "logradouro": "Avenida Eduardo Ribeiro",
      "numero": "2867",
      "complemento": "",
      "bairro": "Centro",
      "cidade": "Manaus",
      "estado": "Amazonas",
      "uf": "AM",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Azevedo Modelo Ltda.",
      "nomeFantasia": "Marketing Azevedo Modelo",
      "cnpj": "47.145.101/0001-14",
      "inscricaoEstadual": "397.178.769.963",
      "inscricaoMunicipal": "7.484.513-0",
      "emailComercial": "contato@marketingazevedomodelo.com.br",
      "telefoneComercial": "(92) 3403-4164",
      "site": "https://www.marketingazevedomodelo.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — AM. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_090_renata_castro",
    "label": "Renata Isabella Castro Almeida — PF + PJ (PA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Renata Isabella Castro Almeida",
      "primeiroNome": "Renata",
      "sobrenome": "Castro",
      "cpf": "463.588.492-98",
      "rg": "48.242.724-5",
      "dataNascimento": "1992-09-04",
      "genero": "Feminino",
      "email": "renata.isabella.castro.almeida.teste@example.com",
      "telefone": "(91) 3921-9328",
      "celular": "(91) 97602-1667",
      "profissao": "Engenheira Civil"
    },
    "endereco": {
      "cep": "66010-000",
      "logradouro": "Avenida Presidente Vargas",
      "numero": "481",
      "complemento": "Apto 202",
      "bairro": "Campina",
      "cidade": "Belém",
      "estado": "Pará",
      "uf": "PA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Ferreira Nacional Ltda.",
      "nomeFantasia": "Saúde Ferreira Nacional",
      "cnpj": "67.739.637/0001-75",
      "inscricaoEstadual": "981.825.364.182",
      "inscricaoMunicipal": "6.689.654-3",
      "emailComercial": "contato@saudeferreiranacional.com.br",
      "telefoneComercial": "(91) 4513-6712",
      "site": "https://www.saudeferreiranacional.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — PA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_091_joao_ferreira",
    "label": "João Gabriel Ferreira Souza — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "João Gabriel Ferreira Souza",
      "primeiroNome": "João",
      "sobrenome": "Ferreira",
      "cpf": "641.012.488-00",
      "rg": "99.274.779-2",
      "dataNascimento": "1975-11-07",
      "genero": "Masculino",
      "email": "joao.gabriel.ferreira.souza.teste@example.com",
      "telefone": "(21) 3869-5190",
      "celular": "(21) 96415-4836",
      "profissao": "Administrador"
    },
    "endereco": {
      "cep": "20040-020",
      "logradouro": "Rua da Assembleia",
      "numero": "1575",
      "complemento": "Casa",
      "bairro": "Centro",
      "cidade": "Rio de Janeiro",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Comercial Almeida Prime Ltda.",
      "nomeFantasia": "Comercial Almeida Prime",
      "cnpj": "73.660.655/0001-60",
      "inscricaoEstadual": "581.547.550.176",
      "inscricaoMunicipal": "6.189.912-4",
      "emailComercial": "contato@comercialalmeidaprime.com.br",
      "telefoneComercial": "(21) 4210-4995",
      "site": "https://www.comercialalmeidaprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Comércio Varejista — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_092_manuela_silva",
    "label": "Manuela Samuel Silva Moura — PF + PJ (RJ)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Manuela Samuel Silva Moura",
      "primeiroNome": "Manuela",
      "sobrenome": "Silva",
      "cpf": "867.380.838-31",
      "rg": "20.386.871-5",
      "dataNascimento": "1986-05-14",
      "genero": "Feminino",
      "email": "manuela.samuel.silva.moura.teste@example.com",
      "telefone": "(21) 3789-4584",
      "celular": "(21) 91568-3931",
      "profissao": "Consultora Comercial"
    },
    "endereco": {
      "cep": "24020-125",
      "logradouro": "Rua das Flores",
      "numero": "559",
      "complemento": "",
      "bairro": "Icaraí",
      "cidade": "Niterói",
      "estado": "Rio de Janeiro",
      "uf": "RJ",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Serviços Ribeiro Sul Ltda.",
      "nomeFantasia": "Serviços Ribeiro Sul",
      "cnpj": "03.173.296/0001-30",
      "inscricaoEstadual": "300.636.304.789",
      "inscricaoMunicipal": "2.153.252-6",
      "emailComercial": "contato@servicosribeirosul.com.br",
      "telefoneComercial": "(21) 3853-6813",
      "site": "https://www.servicosribeirosul.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Serviços Administrativos — RJ. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_093_leonardo_carvalho",
    "label": "Leonardo Davi Carvalho Lopes — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Leonardo Davi Carvalho Lopes",
      "primeiroNome": "Leonardo",
      "sobrenome": "Carvalho",
      "cpf": "427.372.178-30",
      "rg": "44.605.860-9",
      "dataNascimento": "1991-01-25",
      "genero": "Masculino",
      "email": "leonardo.davi.carvalho.lopes.teste@example.com",
      "telefone": "(11) 3253-4403",
      "celular": "(11) 91382-4931",
      "profissao": "Engenheiro Civil"
    },
    "endereco": {
      "cep": "01310-100",
      "logradouro": "Avenida Paulista",
      "numero": "430",
      "complemento": "Loja 3",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Tech Alves Nova Ltda.",
      "nomeFantasia": "Tech Alves Nova",
      "cnpj": "56.566.421/0001-39",
      "inscricaoEstadual": "596.438.667.458",
      "inscricaoMunicipal": "2.451.683-1",
      "emailComercial": "contato@techalvesnova.com.br",
      "telefoneComercial": "(11) 4522-6315",
      "site": "https://www.techalvesnova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Tecnologia da Informação — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_094_alice_teixeira",
    "label": "Alice Giovanna Teixeira Ferreira — PF + PJ (SP)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Alice Giovanna Teixeira Ferreira",
      "primeiroNome": "Alice",
      "sobrenome": "Teixeira",
      "cpf": "771.774.223-31",
      "rg": "26.945.951-6",
      "dataNascimento": "1978-03-19",
      "genero": "Feminino",
      "email": "alice.giovanna.teixeira.ferreira.teste@example.com",
      "telefone": "(19) 3227-5474",
      "celular": "(19) 96510-3232",
      "profissao": "Gerente de Operações"
    },
    "endereco": {
      "cep": "13010-111",
      "logradouro": "Rua Barão de Jaguara",
      "numero": "880",
      "complemento": "Casa",
      "bairro": "Centro",
      "cidade": "Campinas",
      "estado": "São Paulo",
      "uf": "SP",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Consultoria Azevedo Urbana Ltda.",
      "nomeFantasia": "Consultoria Azevedo Urbana",
      "cnpj": "05.315.247/0001-10",
      "inscricaoEstadual": "289.923.761.445",
      "inscricaoMunicipal": "1.268.822-4",
      "emailComercial": "contato@consultoriaazevedourbana.com.br",
      "telefoneComercial": "(19) 4323-7611",
      "site": "https://www.consultoriaazevedourbana.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Consultoria Empresarial — SP. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_095_lorenzo_campos",
    "label": "Lorenzo Daniel Campos Soares — PF + PJ (MG)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Lorenzo Daniel Campos Soares",
      "primeiroNome": "Lorenzo",
      "sobrenome": "Campos",
      "cpf": "963.560.775-06",
      "rg": "46.417.408-1",
      "dataNascimento": "1989-04-03",
      "genero": "Masculino",
      "email": "lorenzo.daniel.campos.soares.teste@example.com",
      "telefone": "(31) 3970-6410",
      "celular": "(31) 93876-2303",
      "profissao": "Arquiteto"
    },
    "endereco": {
      "cep": "30112-010",
      "logradouro": "Rua dos Carijós",
      "numero": "2101",
      "complemento": "Sala 101",
      "bairro": "Centro",
      "cidade": "Belo Horizonte",
      "estado": "Minas Gerais",
      "uf": "MG",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Alimentos Cardoso Central Ltda.",
      "nomeFantasia": "Alimentos Cardoso Central",
      "cnpj": "30.170.831/0001-72",
      "inscricaoEstadual": "572.212.988.910",
      "inscricaoMunicipal": "7.252.603-0",
      "emailComercial": "contato@alimentoscardosocentral.com.br",
      "telefoneComercial": "(31) 3746-9048",
      "site": "https://www.alimentoscardosocentral.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Alimentos e Bebidas — MG. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_096_mariana_lopes",
    "label": "Mariana Nicolas Lopes Costa — PF + PJ (PR)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Mariana Nicolas Lopes Costa",
      "primeiroNome": "Mariana",
      "sobrenome": "Lopes",
      "cpf": "001.769.067-62",
      "rg": "86.452.365-8",
      "dataNascimento": "1983-12-11",
      "genero": "Feminino",
      "email": "mariana.nicolas.lopes.costa.teste@example.com",
      "telefone": "(41) 3222-4507",
      "celular": "(41) 94226-5580",
      "profissao": "Técnica em Informática"
    },
    "endereco": {
      "cep": "80010-000",
      "logradouro": "Rua XV de Novembro",
      "numero": "1280",
      "complemento": "Casa",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "Paraná",
      "uf": "PR",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Logística Lopes Brasil Ltda.",
      "nomeFantasia": "Logística Lopes Brasil",
      "cnpj": "47.785.675/0001-57",
      "inscricaoEstadual": "252.487.599.614",
      "inscricaoMunicipal": "3.102.967-0",
      "emailComercial": "contato@logisticalopesbrasil.com.br",
      "telefoneComercial": "(41) 4872-2819",
      "site": "https://www.logisticalopesbrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Logística e Transportes — PR. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_097_gustavo_oliveira",
    "label": "Gustavo Helena Oliveira Moura — PF + PJ (RS)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Gustavo Helena Oliveira Moura",
      "primeiroNome": "Gustavo",
      "sobrenome": "Oliveira",
      "cpf": "756.385.755-96",
      "rg": "95.232.543-9",
      "dataNascimento": "1987-12-24",
      "genero": "Masculino",
      "email": "gustavo.helena.oliveira.moura.teste@example.com",
      "telefone": "(51) 3001-7958",
      "celular": "(51) 99198-8614",
      "profissao": "Analista de Sistemas"
    },
    "endereco": {
      "cep": "90010-150",
      "logradouro": "Rua dos Andradas",
      "numero": "989",
      "complemento": "Sala 101",
      "bairro": "Centro Histórico",
      "cidade": "Porto Alegre",
      "estado": "Rio Grande do Sul",
      "uf": "RS",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Construtora Monteiro Prime Ltda.",
      "nomeFantasia": "Construtora Monteiro Prime",
      "cnpj": "54.753.504/0001-01",
      "inscricaoEstadual": "183.569.241.701",
      "inscricaoMunicipal": "2.228.122-9",
      "emailComercial": "contato@construtoramonteiroprime.com.br",
      "telefoneComercial": "(51) 4224-3250",
      "site": "https://www.construtoramonteiroprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Construção e Reformas — RS. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_098_renata_lopes",
    "label": "Renata Lívia Lopes Lima — PF + PJ (SC)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Renata Lívia Lopes Lima",
      "primeiroNome": "Renata",
      "sobrenome": "Lopes",
      "cpf": "737.036.284-13",
      "rg": "97.735.702-3",
      "dataNascimento": "1988-05-28",
      "genero": "Feminino",
      "email": "renata.livia.lopes.lima.teste@example.com",
      "telefone": "(48) 3924-9080",
      "celular": "(48) 98334-2925",
      "profissao": "Engenheira Civil"
    },
    "endereco": {
      "cep": "88010-560",
      "logradouro": "Rua Felipe Schmidt",
      "numero": "788",
      "complemento": "Apto 202",
      "bairro": "Centro",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "uf": "SC",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Educação Teixeira Brasil Ltda.",
      "nomeFantasia": "Educação Teixeira Brasil",
      "cnpj": "77.163.173/0001-55",
      "inscricaoEstadual": "239.939.320.255",
      "inscricaoMunicipal": "7.168.516-8",
      "emailComercial": "contato@educacaoteixeirabrasil.com.br",
      "telefoneComercial": "(48) 4071-9826",
      "site": "https://www.educacaoteixeirabrasil.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Educação Profissional — SC. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_099_gabriel_silva",
    "label": "Gabriel Enzo Silva Vieira — PF + PJ (BA)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Gabriel Enzo Silva Vieira",
      "primeiroNome": "Gabriel",
      "sobrenome": "Silva",
      "cpf": "371.454.392-98",
      "rg": "51.278.666-2",
      "dataNascimento": "1993-02-08",
      "genero": "Masculino",
      "email": "gabriel.enzo.silva.vieira.teste@example.com",
      "telefone": "(71) 3461-9530",
      "celular": "(71) 92236-9485",
      "profissao": "Arquiteto"
    },
    "endereco": {
      "cep": "40020-010",
      "logradouro": "Rua da Ajuda",
      "numero": "1457",
      "complemento": "Conjunto 45",
      "bairro": "Centro",
      "cidade": "Salvador",
      "estado": "Bahia",
      "uf": "BA",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Marketing Barbosa Prime Ltda.",
      "nomeFantasia": "Marketing Barbosa Prime",
      "cnpj": "28.134.054/0001-69",
      "inscricaoEstadual": "515.967.231.537",
      "inscricaoMunicipal": "8.365.774-9",
      "emailComercial": "contato@marketingbarbosaprime.com.br",
      "telefoneComercial": "(71) 4798-6824",
      "site": "https://www.marketingbarbosaprime.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Marketing Digital — BA. CPF e CNPJ formalmente válidos."
    }
  },
  {
    "id": "perfil_extra_100_mariana_correia",
    "label": "Mariana Júlia Correia Rodrigues — PF + PJ (PE)",
    "tipo": "completo",
    "pessoaFisica": {
      "nomeCompleto": "Mariana Júlia Correia Rodrigues",
      "primeiroNome": "Mariana",
      "sobrenome": "Correia",
      "cpf": "861.192.959-41",
      "rg": "69.205.404-2",
      "dataNascimento": "1976-03-23",
      "genero": "Feminino",
      "email": "mariana.julia.correia.rodrigues.teste@example.com",
      "telefone": "(81) 3204-7421",
      "celular": "(81) 96750-9536",
      "profissao": "Consultora Comercial"
    },
    "endereco": {
      "cep": "50030-230",
      "logradouro": "Rua do Bom Jesus",
      "numero": "477",
      "complemento": "",
      "bairro": "Recife Antigo",
      "cidade": "Recife",
      "estado": "Pernambuco",
      "uf": "PE",
      "pais": "Brasil"
    },
    "pessoaJuridica": {
      "razaoSocial": "Saúde Martins Nova Ltda.",
      "nomeFantasia": "Saúde Martins Nova",
      "cnpj": "06.100.937/0001-15",
      "inscricaoEstadual": "497.308.941.142",
      "inscricaoMunicipal": "2.270.862-2",
      "emailComercial": "contato@saudemartinsnova.com.br",
      "telefoneComercial": "(81) 4794-7303",
      "site": "https://www.saudemartinsnova.com.br"
    },
    "outros": {
      "observacoes": "Perfil fictício completo para testes — Saúde e Bem-estar — PE. CPF e CNPJ formalmente válidos."
    }
  }
]