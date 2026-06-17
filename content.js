(function () {
  'use strict';

  // Campos preenchidos na última execução: {element, previousValue}
  var filledFieldsLog = [];

  function normalizeText(text) {
    if (!text) return '';
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getAssociatedLabelText(el) {
    if (el.id) {
      var label = document.querySelector('label[for="' + el.id + '"]');
      if (label) return label.textContent || '';
    }
    var parent = el.closest('label');
    if (parent) return parent.textContent || '';
    var prev = el.previousElementSibling;
    if (prev && (prev.tagName === 'LABEL' || prev.tagName === 'SPAN' || prev.tagName === 'P')) {
      return prev.textContent || '';
    }
    return '';
  }

  function getFieldContext(el) {
    var parts = [
      el.name || '',
      el.id || '',
      el.placeholder || '',
      el.getAttribute('aria-label') || '',
      el.getAttribute('title') || '',
      el.getAttribute('autocomplete') || '',
      el.className || '',
      getAssociatedLabelText(el)
    ];
    return parts.join(' ');
  }

  function contains(ctx, terms) {
    return terms.some(function (t) { return ctx.indexOf(t) !== -1; });
  }

  function isUnsafeField(el) {
    if (el.disabled || el.readOnly) return true;
    var type = (el.type || '').toLowerCase();
    var unsafeTypes = ['password', 'hidden', 'file', 'checkbox', 'radio', 'submit', 'button', 'reset', 'image'];
    if (unsafeTypes.indexOf(type) !== -1) return true;
    var ctx = normalizeText(getFieldContext(el));
    var unsafeTerms = [
      'password', 'senha', 'new-password', 'current-password',
      'cartao', 'cartao de credito', 'credit card', 'card number',
      'cvv', 'cvc', 'codigo de seguranca', 'token', '2fa',
      'autenticacao', 'captcha', 'recaptcha', 'upload'
    ];
    return unsafeTerms.some(function (t) { return ctx.indexOf(t) !== -1; });
  }

  function hasFormPJSignal(perfil) {
    var allInputs = document.querySelectorAll('input, textarea, select');
    var pjTerms = ['razao social', 'razao', 'nome fantasia', 'fantasia', 'cnpj', 'inscricao estadual', 'inscricao municipal'];
    for (var i = 0; i < allInputs.length; i++) {
      var ctx = normalizeText(getFieldContext(allInputs[i]));
      if (pjTerms.some(function (t) { return ctx.indexOf(t) !== -1; })) return true;
    }
    return false;
  }

  function detectFieldType(el, perfil) {
    var ctx = normalizeText(getFieldContext(el));
    var type = (el.type || 'text').toLowerCase();

    if (type === 'email' || contains(ctx, ['email', 'e-mail', 'mail', 'correio eletronico'])) {
      if (perfil.tipo === 'pj' || (perfil.pessoaJuridica && perfil.pessoaJuridica.emailComercial && hasFormPJSignal(perfil))) {
        return 'emailComercial';
      }
      return 'email';
    }
    if (type === 'tel') {
      if (contains(ctx, ['celular', 'whatsapp', 'whats', 'mobile', 'smartphone', 'telefone celular'])) return 'celular';
      if (contains(ctx, ['comercial', 'empresa', 'corporativo'])) return 'telefoneComercial';
      return 'telefone';
    }
    if (contains(ctx, ['celular', 'whatsapp', 'whats', 'mobile', 'smartphone', 'telefone celular'])) return 'celular';
    if (contains(ctx, ['telefone comercial', 'fone comercial', 'tel comercial'])) return 'telefoneComercial';
    if (contains(ctx, ['telefone', 'tel ', ' tel', 'telefone fixo', 'fone', 'phone'])) return 'telefone';
    if (contains(ctx, ['cnpj', 'cadastro nacional', 'pessoa juridica', 'cnpj empresa', 'cnpj da empresa', 'cnpj do fornecedor'])) return 'cnpj';
    if (contains(ctx, ['cpf', 'cadastro de pessoa fisica', 'cpf do responsavel', 'cpf cliente', 'cpf titular'])) return 'cpf';
    if (contains(ctx, ['documento', 'numero do documento', 'identificacao', 'doc '])) {
      if (hasFormPJSignal(perfil)) return 'cnpj';
      return 'cpf';
    }
    if (contains(ctx, ['rg', 'identidade', 'registro geral'])) return 'rg';
    if (contains(ctx, ['cep', 'codigo postal', 'postal code', 'zip'])) return 'cep';
    if (contains(ctx, ['razao social', 'nome empresarial', 'empresa ', ' empresa', 'company', 'corporate name'])) return 'razaoSocial';
    if (contains(ctx, ['nome fantasia', 'fantasia', 'nome comercial', 'trade name'])) return 'nomeFantasia';
    if (contains(ctx, ['inscricao estadual', ' ie ', 'ie '])) return 'inscricaoEstadual';
    if (contains(ctx, ['inscricao municipal', ' im ', 'im '])) return 'inscricaoMunicipal';
    if (contains(ctx, ['site', 'website', 'url', 'pagina'])) return 'site';
    if (contains(ctx, ['primeiro nome', 'firstname', 'first name', 'first_name', 'nome inicial'])) return 'primeiroNome';
    if (contains(ctx, ['sobrenome', 'ultimo nome', 'lastname', 'last name', 'last_name'])) return 'sobrenome';
    if (contains(ctx, ['nome completo', 'seu nome', 'nome do cliente', 'responsavel', 'responsavel', 'contato', 'solicitante', 'requerente', 'titular'])) return 'nomeCompleto';
    if (contains(ctx, ['nome ', ' nome']) && !contains(ctx, ['nome fantasia', 'razao', 'nomecomercial'])) return 'nomeCompleto';
    if (type === 'date' || contains(ctx, ['nascimento', 'data de nascimento', 'dt nascimento', 'aniversario', 'birthdate', 'date of birth'])) return 'dataNascimento';
    if (contains(ctx, ['genero', 'sexo', 'gender'])) return 'genero';
    if (contains(ctx, ['profissao', 'profissao', 'ocupacao', 'cargo', 'funcao'])) return 'profissao';
    if (contains(ctx, ['logradouro', 'endereco completo', 'endereco completo', 'rua ', 'avenida', 'address', 'endereco ', 'endereco '])) return 'logradouro';
    if (contains(ctx, ['numero ', 'nro', 'num ', ' num', 'n ', 'n ', 'numero do endereco', 'numero do endereco'])) return 'numero';
    if (contains(ctx, ['complemento', 'apto', 'apartamento', 'bloco ', ' bloco', 'sala '])) return 'complemento';
    if (contains(ctx, ['bairro', 'distrito', 'neighborhood'])) return 'bairro';
    if (contains(ctx, ['cidade', 'municipio', 'localidade', 'city'])) return 'cidade';
    if (contains(ctx, ['estado', 'uf ', ' uf', 'unidade federativa', 'state'])) return 'estado';
    if (contains(ctx, ['pais', 'country'])) return 'pais';
    if (contains(ctx, ['observacoes', 'mensagem', 'descricao', 'comentarios', 'detalhes'])) return 'observacoes';
    // Veículo
    if (contains(ctx, ['placa', 'placa do veiculo', 'placa veiculo', 'placa do carro', 'license plate'])) return 'placa';
    if (contains(ctx, ['renavam', 'registro nacional de veiculo'])) return 'renavam';
    if (contains(ctx, ['chassi', 'numero do chassi', 'chassis', 'vin'])) return 'chassi';
    if (contains(ctx, ['marca do veiculo', 'marca do carro', 'fabricante', 'montadora'])) return 'marcaVeiculo';
    if (contains(ctx, ['modelo do veiculo', 'modelo do carro', 'modelo veiculo'])) return 'modeloVeiculo';
    if (contains(ctx, ['ano do veiculo', 'ano fabricacao', 'ano modelo', 'ano do carro', 'ano fabricacao', 'ano do modelo'])) return 'anoVeiculo';
    if (contains(ctx, ['cor do veiculo', 'cor do carro', 'cor veiculo', 'color'])) return 'corVeiculo';
    if (contains(ctx, ['combustivel', 'tipo combustivel', 'tipo de combustivel', 'fuel'])) return 'combustivel';
    if (contains(ctx, ['categoria veiculo', 'tipo veiculo', 'tipo de veiculo', 'categoria do veiculo'])) return 'categoriaVeiculo';
    if (contains(ctx, ['veiculo', 'automovel', 'carro ']) && !contains(ctx, ['placa', 'renavam', 'chassi', 'marca', 'modelo', 'ano', 'cor', 'combustivel'])) return 'modeloVeiculo';
    return null;
  }

  function needsMask(el) {
    var cls = normalizeText(el.className + ' ' + (el.getAttribute('data-mask') || '') + ' ' + (el.placeholder || ''));
    return cls.indexOf('mask') !== -1 || cls.indexOf('formato') !== -1 ||
      /\d.*[.\-\/].*\d/.test(el.placeholder || '');
  }

  function formatCPF(cpf, withMask) {
    var n = String(cpf).replace(/\D/g, '');
    if (withMask) return n.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return n;
  }

  function formatCNPJ(cnpj, withMask) {
    var n = String(cnpj).replace(/\D/g, '');
    if (withMask) return n.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return n;
  }

  function formatCEP(cep, withMask) {
    var n = String(cep).replace(/\D/g, '');
    if (withMask) return n.replace(/(\d{5})(\d{3})/, '$1-$2');
    return n;
  }

  function formatPlaca(placa, withMask) {
    var n = String(placa).replace(/[^A-Z0-9]/gi, '').toUpperCase();
    if (!withMask) return n;
    // Mercosul: LLLNLNN — ex: ABC1D23
    if (/^[A-Z]{3}\d[A-Z]\d{2}$/.test(n)) return n.slice(0, 3) + '-' + n.slice(3);
    // Antigo: LLLNNNN — ex: ABC-1234
    if (/^[A-Z]{3}\d{4}$/.test(n)) return n.slice(0, 3) + '-' + n.slice(3);
    return placa;
  }

  function formatRenavam(renavam, withMask) {
    var n = String(renavam).replace(/\D/g, '');
    if (!withMask) return n;
    if (n.length === 11) return n.slice(0, 8) + '-' + n.slice(8);
    if (n.length === 9) return n.slice(0, 6) + '-' + n.slice(6);
    return renavam;
  }

  function formatTelefone(tel, withMask) {
    var n = String(tel).replace(/\D/g, '');
    if (!withMask) return n;
    if (n.length === 11) return n.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    if (n.length === 10) return n.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    return n;
  }

  var ERRO_MAP = {
    cpf:      ['cpf'],
    cnpj:     ['cnpj'],
    email:    ['email', 'emailComercial'],
    telefone: ['telefone', 'celular', 'telefoneComercial'],
    cep:      ['cep'],
    data:     ['dataNascimento'],
    texto:    ['nomeCompleto', 'primeiroNome', 'sobrenome', 'razaoSocial', 'nomeFantasia', 'logradouro', 'bairro', 'cidade'],
    placa:    ['placa'],
    renavam:  ['renavam']
  };

  function corromperValor(fieldType, value, camposErro) {
    var categoria = null;
    for (var cat in ERRO_MAP) {
      if (ERRO_MAP[cat].indexOf(fieldType) !== -1) { categoria = cat; break; }
    }
    if (!categoria || camposErro.indexOf(categoria) === -1) return value;

    switch (categoria) {
      case 'cpf': {
        var digits = value.replace(/\D/g, '');
        if (digits.length < 2) return value;
        var last = (parseInt(digits[digits.length - 1], 10) + 1) % 10;
        var corrupted = digits.slice(0, -1) + last;
        return corrupted.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      }
      case 'cnpj': {
        var digits = value.replace(/\D/g, '');
        if (digits.length < 2) return value;
        var last = (parseInt(digits[digits.length - 1], 10) + 1) % 10;
        var corrupted = digits.slice(0, -1) + last;
        return corrupted.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }
      case 'email':
        return value.replace('@', '@@').replace(/\.com/, '.invalido');
      case 'telefone':
        return value.replace(/(\d{4,5})-(\d{4})$/, '$199-$2');
      case 'cep': {
        var digits = value.replace(/\D/g, '');
        var reversed = digits.slice(0, 5) + digits.slice(5).split('').reverse().join('');
        return reversed.replace(/(\d{5})(\d{3})/, '$1-$2');
      }
      case 'data':
        return value.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$1-13-$3')
                    .replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$1/13/$3');
      case 'texto':
        return '!!! ' + value;
      case 'placa': {
        var placaLetras = value.replace(/[^A-Z]/gi, '').toUpperCase();
        var placaDigitos = value.replace(/\D/g, '');
        return placaLetras.slice(0, 3) + '-' + placaDigitos.slice(0, 3) + 'X';
      }
      case 'renavam': {
        var digits = value.replace(/\D/g, '');
        if (digits.length < 2) return value;
        var last = (parseInt(digits[digits.length - 1], 10) + 1) % 10;
        var corrupted = digits.slice(0, -1) + last;
        return corrupted.slice(0, 8) + '-' + corrupted.slice(8);
      }
      default:
        return value;
    }
  }

  function dispatchFieldEvents(el) {
    try { el.dispatchEvent(new Event('input', { bubbles: true, cancelable: true })); } catch (e) {}
    try { el.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true })); } catch (e) {}
    try { el.dispatchEvent(new Event('change', { bubbles: true })); } catch (e) {}
    try { el.dispatchEvent(new Event('blur', { bubbles: true })); } catch (e) {}
  }

  function fillSelect(el, value) {
    var norm = normalizeText(value);
    var bestIdx = -1;
    var bestScore = 0;
    for (var i = 0; i < el.options.length; i++) {
      var optNorm = normalizeText(el.options[i].text + ' ' + el.options[i].value);
      if (optNorm === norm) { bestIdx = i; bestScore = 3; break; }
      if (optNorm.indexOf(norm) !== -1 || norm.indexOf(optNorm) !== -1) {
        var score = optNorm.length > 0 ? 2 : 1;
        if (score > bestScore) { bestScore = score; bestIdx = i; }
      }
    }
    if (bestIdx !== -1) {
      el.selectedIndex = bestIdx;
      return true;
    }
    return false;
  }

  function getValueByFieldType(fieldType, perfil, el) {
    var pf = perfil.pessoaFisica || {};
    var pj = perfil.pessoaJuridica || {};
    var end = perfil.endereco || {};
    var outros = perfil.outros || {};
    var veiculo = perfil.veiculo || {};
    var useMask = needsMask(el);

    switch (fieldType) {
      case 'nomeCompleto': return pf.nomeCompleto || '';
      case 'primeiroNome': return pf.primeiroNome || '';
      case 'sobrenome': return pf.sobrenome || '';
      case 'cpf': return formatCPF(pf.cpf || '', true);
      case 'rg': return pf.rg || '';
      case 'dataNascimento':
        if ((el.type || '').toLowerCase() === 'date') return pf.dataNascimento || '';
        var d = (pf.dataNascimento || '').split('-');
        return d.length === 3 ? d[2] + '/' + d[1] + '/' + d[0] : '';
      case 'genero': return pf.genero || '';
      case 'email': return pf.email || '';
      case 'telefone': return formatTelefone(pf.telefone || '', true);
      case 'celular': return formatTelefone(pf.celular || '', true);
      case 'profissao': return pf.profissao || '';
      case 'cep': return formatCEP(end.cep || '', true);
      case 'logradouro': return end.logradouro || '';
      case 'numero': return end.numero || '';
      case 'complemento': return end.complemento || '';
      case 'bairro': return end.bairro || '';
      case 'cidade': return end.cidade || '';
      case 'estado': return end.estado || end.uf || '';
      case 'pais': return end.pais || 'Brasil';
      case 'cnpj': return formatCNPJ(pj.cnpj || '', true);
      case 'razaoSocial': return pj.razaoSocial || '';
      case 'nomeFantasia': return pj.nomeFantasia || '';
      case 'inscricaoEstadual': return pj.inscricaoEstadual || '';
      case 'inscricaoMunicipal': return pj.inscricaoMunicipal || '';
      case 'emailComercial': return pj.emailComercial || '';
      case 'telefoneComercial': return formatTelefone(pj.telefoneComercial || '', true);
      case 'site': return pj.site || '';
      case 'observacoes': return outros.observacoes || '';
      case 'placa': return veiculo.placa ? formatPlaca(veiculo.placa, true) : '';
      case 'renavam': return veiculo.renavam ? formatRenavam(veiculo.renavam, true) : '';
      case 'chassi': return veiculo.chassi || '';
      case 'marcaVeiculo': return veiculo.marca || '';
      case 'modeloVeiculo': return veiculo.modelo || '';
      case 'anoVeiculo': return veiculo.ano ? String(veiculo.ano) : '';
      case 'corVeiculo': return veiculo.cor || '';
      case 'combustivel': return veiculo.combustivel || '';
      case 'categoriaVeiculo': return veiculo.categoria || '';
      default: return null;
    }
  }

  function fillField(el, value) {
    if (value === null || value === undefined || value === '') return false;
    var tag = el.tagName.toLowerCase();
    if (tag === 'select') {
      return fillSelect(el, value);
    }
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    var nativeTextareaSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value');
    try {
      if (tag === 'textarea' && nativeTextareaSetter) {
        nativeTextareaSetter.set.call(el, value);
      } else if (nativeInputValueSetter) {
        nativeInputValueSetter.set.call(el, value);
      } else {
        el.value = value;
      }
    } catch (e) {
      el.value = value;
    }
    return true;
  }

  function matchRegraPersonalizada(el, regras) {
    if (!regras || regras.length === 0) return null;
    var ctx = normalizeText(getFieldContext(el));
    var tag = el.tagName.toLowerCase();
    var type = (el.type || '').toLowerCase();

    for (var i = 0; i < regras.length; i++) {
      var r = regras[i];
      var tc = r.tipoCampo || 'qualquer';

      if (tc === 'select' && tag !== 'select') continue;
      if (tc === 'checkbox' && type !== 'checkbox') continue;
      if (tc === 'text' && (tag === 'select' || type === 'checkbox')) continue;

      var termo = normalizeText(r.label);
      if (termo && ctx.indexOf(termo) !== -1) return r;
    }
    return null;
  }

  function preencherFormulario(perfil, camposErro, regrasCampos) {
    camposErro = camposErro || [];
    regrasCampos = regrasCampos || [];
    filledFieldsLog = [];
    var elements = document.querySelectorAll('input, textarea, select');
    var total = 0;
    var filled = 0;
    var detectedTypes = [];

    elements.forEach(function (el) {
      if (isUnsafeField(el) && (el.type || '').toLowerCase() !== 'checkbox') return;
      if ((el.type || '').toLowerCase() === 'checkbox') {
        // apenas regras personalizadas atuam em checkboxes
        var regraChk = matchRegraPersonalizada(el, regrasCampos);
        if (!regraChk) return;
        total++;
        var marcar = regraChk.valor.toLowerCase() !== 'false' && regraChk.valor !== '0';
        if (el.checked !== marcar) {
          var prev = el.checked;
          el.checked = marcar;
          filledFieldsLog.push({ element: el, previousValue: prev, isCheckbox: true });
          dispatchFieldEvents(el);
          filled++;
          detectedTypes.push('custom:' + regraChk.label);
        }
        return;
      }

      if (isUnsafeField(el)) return;
      total++;

      // Regra personalizada tem prioridade sobre detecção automática
      var regraCustom = matchRegraPersonalizada(el, regrasCampos);
      if (regraCustom) {
        var previous = el.value;
        var ok = fillField(el, regraCustom.valor);
        if (ok) {
          filled++;
          detectedTypes.push('custom:' + regraCustom.label);
          filledFieldsLog.push({ element: el, previousValue: previous });
          dispatchFieldEvents(el);
        }
        return;
      }

      var fieldType = detectFieldType(el, perfil);
      if (!fieldType) return;

      var value = getValueByFieldType(fieldType, perfil, el);
      if (value === null || value === '') return;
      if (camposErro.length > 0) value = corromperValor(fieldType, value, camposErro);

      var previous = el.value;
      var ok = fillField(el, value);
      if (ok) {
        filled++;
        detectedTypes.push(fieldType);
        filledFieldsLog.push({ element: el, previousValue: previous });
        dispatchFieldEvents(el);
      }
    });

    return {
      success: true,
      totalFields: total,
      filledFields: filled,
      detectedTypes: detectedTypes,
      message: filled > 0
        ? 'Formulário preenchido com sucesso. Campos preenchidos: ' + filled + ' de ' + total
        : 'Nenhum campo compatível foi encontrado nesta página.'
    };
  }

  function limparCampos() {
    if (filledFieldsLog.length === 0) {
      return { success: false, message: 'Nenhum campo foi preenchido nesta sessão.' };
    }
    var restored = 0;
    filledFieldsLog.forEach(function (entry) {
      try {
        if (entry.isCheckbox) {
          entry.element.checked = entry.previousValue;
        } else {
          entry.element.value = entry.previousValue;
        }
        dispatchFieldEvents(entry.element);
        restored++;
      } catch (e) {}
    });
    filledFieldsLog = [];
    return {
      success: true,
      message: restored > 0 ? 'Campos restaurados com sucesso.' : 'Limpeza automática não disponível nesta página.'
    };
  }

  // Atalho de teclado customizado — dispara preenchimento direto na página
  var ATALHO_PADRAO_CONTENT = { ctrl: true, alt: false, shift: true, meta: false, key: 'F' };

  document.addEventListener('keydown', function (e) {
    chrome.storage.local.get(
      ['atalhoCustom', 'ultimoPerfilId', 'usarAleatorio', 'filtroTipo', 'modoErro', 'camposErro', 'regrasCampos'],
      function (data) {
        var a = data.atalhoCustom || ATALHO_PADRAO_CONTENT;

        var teclaOk = (e.key.toUpperCase() === a.key.toUpperCase()) ||
                      (e.key === a.key);
        var modOk   = (!!e.ctrlKey  === !!a.ctrl)  &&
                      (!!e.altKey   === !!a.alt)   &&
                      (!!e.shiftKey === !!a.shift)  &&
                      (!!e.metaKey  === !!a.meta);

        if (!teclaOk || !modOk) return;

        e.preventDefault();

        var perfis = typeof PERFIS_BRASILEIROS !== 'undefined' ? PERFIS_BRASILEIROS : [];
        var filtro = data.filtroTipo || 'todos';
        var perfisFiltrados = filtro === 'todos'
          ? perfis
          : perfis.filter(function (p) {
              return p.tipo === filtro || (filtro === 'pj' && p.tipo === 'completo');
            });

        var perfil;
        if (data.usarAleatorio || !data.ultimoPerfilId) {
          perfil = perfisFiltrados[Math.floor(Math.random() * perfisFiltrados.length)];
        } else {
          perfil = perfisFiltrados.find(function (p) { return p.id === data.ultimoPerfilId; })
                   || perfisFiltrados[0];
        }

        if (!perfil) return;

        var camposErro   = data.modoErro && Array.isArray(data.camposErro) ? data.camposErro : [];
        var regrasCampos = Array.isArray(data.regrasCampos) ? data.regrasCampos : [];

        preencherFormulario(perfil, camposErro, regrasCampos);
      }
    );
  }, true);

  chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (!msg || !msg.action) return;
    try {
      if (msg.action === 'PREENCHER_FORMULARIO') {
        var result = preencherFormulario(msg.perfil, msg.camposErro, msg.regrasCampos);
        sendResponse(result);
      } else if (msg.action === 'LIMPAR_CAMPOS') {
        var result = limparCampos();
        sendResponse(result);
      }
    } catch (e) {
      sendResponse({ success: false, message: 'Erro interno no content script.' });
    }
    return true;
  });
})();
