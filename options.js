(function () {
  'use strict';

  var regras = [];

  var TIPO_LABELS = {
    qualquer: 'Qualquer',
    text:     'Texto',
    select:   'Select',
    checkbox: 'Checkbox'
  };

  var perfisImportados = [];

  function init() {
    carregarRegras();
    iniciarAtalho();
    iniciarImportacaoJSON();
    document.getElementById('btn-adicionar').addEventListener('click', adicionarRegra);
    document.getElementById('btn-limpar-tudo').addEventListener('click', function () {
      if (confirm('Remover todas as regras?')) {
        regras = [];
        salvar();
        renderizar();
      }
    });
  }

  function iniciarImportacaoJSON() {
    // exemplo perfil
    document.getElementById('btn-ver-exemplo-perfil').addEventListener('click', function (e) {
      e.preventDefault();
      var el = document.getElementById('exemplo-perfil');
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
      this.textContent = el.style.display === 'none' ? 'Ver exemplo' : 'Ocultar exemplo';
    });

    // exemplo regra
    document.getElementById('btn-ver-exemplo-regra').addEventListener('click', function (e) {
      e.preventDefault();
      var el = document.getElementById('exemplo-regra');
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
      this.textContent = el.style.display === 'none' ? 'Ver exemplo' : 'Ocultar exemplo';
    });

    // importar perfis
    document.getElementById('btn-importar-perfil').addEventListener('click', function () {
      var raw = document.getElementById('inp-json-perfil').value.trim();
      var erroEl = document.getElementById('erro-json-perfil');
      erroEl.style.display = 'none';

      if (!raw) { mostrarErro(erroEl, 'Cole o JSON antes de importar.'); return; }

      var parsed;
      try { parsed = JSON.parse(raw); } catch (e) {
        mostrarErro(erroEl, 'JSON inválido: ' + e.message); return;
      }

      if (!Array.isArray(parsed)) { mostrarErro(erroEl, 'O JSON deve ser um array [ ... ].'); return; }

      var validos = [];
      var erros = [];
      parsed.forEach(function (p, i) {
        if (!p.id || !p.label || !p.tipo) {
          erros.push('Item ' + (i + 1) + ': campos obrigatórios ausentes (id, label, tipo).');
        } else {
          validos.push(p);
        }
      });

      if (erros.length > 0) { mostrarErro(erroEl, erros.join('\n')); return; }

      var novos = 0;
      validos.forEach(function (p) {
        var existe = perfisImportados.some(function (e) { return e.id === p.id; });
        if (!existe) { perfisImportados.push(p); novos++; }
      });

      chrome.storage.local.set({ perfisImportados: perfisImportados }, function () {
        document.getElementById('inp-json-perfil').value = '';
        atualizarInfoPerfis();
        toast(novos + ' perfil(is) importado(s) com sucesso.');
      });
    });

    // exportar perfis importados
    document.getElementById('btn-exportar-perfis').addEventListener('click', function () {
      if (perfisImportados.length === 0) { toast('Nenhum perfil importado para exportar.'); return; }
      baixarJSON(perfisImportados, 'perfis-importados.json');
    });

    // importar regras
    document.getElementById('btn-importar-regra').addEventListener('click', function () {
      var raw = document.getElementById('inp-json-regra').value.trim();
      var erroEl = document.getElementById('erro-json-regra');
      erroEl.style.display = 'none';

      if (!raw) { mostrarErro(erroEl, 'Cole o JSON antes de importar.'); return; }

      var parsed;
      try { parsed = JSON.parse(raw); } catch (e) {
        mostrarErro(erroEl, 'JSON inválido: ' + e.message); return;
      }

      if (!Array.isArray(parsed)) { mostrarErro(erroEl, 'O JSON deve ser um array [ ... ].'); return; }

      var validos = [];
      var erros = [];
      parsed.forEach(function (r, i) {
        if (!r.label || !r.valor) {
          erros.push('Item ' + (i + 1) + ': campos obrigatórios ausentes (label, valor).');
        } else {
          validos.push({
            id: Date.now() + i,
            label: String(r.label),
            valor: String(r.valor),
            tipoCampo: r.tipoCampo || 'qualquer'
          });
        }
      });

      if (erros.length > 0) { mostrarErro(erroEl, erros.join('\n')); return; }

      regras = regras.concat(validos);
      salvar(function () {
        document.getElementById('inp-json-regra').value = '';
        renderizar();
        toast(validos.length + ' regra(s) importada(s) com sucesso.');
      });
    });

    // exportar regras
    document.getElementById('btn-exportar-regras').addEventListener('click', function () {
      if (regras.length === 0) { toast('Nenhuma regra salva para exportar.'); return; }
      baixarJSON(regras.map(function (r) {
        return { label: r.label, valor: r.valor, tipoCampo: r.tipoCampo };
      }), 'regras-preenchebr.json');
    });

    // carregar perfis importados já salvos
    chrome.storage.local.get(['perfisImportados'], function (data) {
      perfisImportados = Array.isArray(data.perfisImportados) ? data.perfisImportados : [];
      atualizarInfoPerfis();
    });
  }

  function atualizarInfoPerfis() {
    var el = document.getElementById('perfis-importados-info');
    if (perfisImportados.length === 0) {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
      el.textContent = perfisImportados.length + ' perfil(is) importado(s) ativos. Eles aparecem na lista do popup junto aos perfis padrão.';
    }
  }

  function baixarJSON(dados, nomeArquivo) {
    var blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = nomeArquivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ── Gravador de atalho ────────────────────────────────────────────

  var atalhoCapturado = null;
  var ATALHO_PADRAO = { ctrl: true, alt: false, shift: true, meta: false, key: 'F' };

  function atalhoParaTexto(a) {
    var partes = [];
    if (a.ctrl)  partes.push('Ctrl');
    if (a.alt)   partes.push('Alt');
    if (a.shift) partes.push('Shift');
    if (a.meta)  partes.push('⌘');
    partes.push(a.key.toUpperCase());
    return partes.join(' + ');
  }

  function renderizarAtalhoDisplay(a) {
    var display = document.getElementById('atalho-display');
    var texto   = document.getElementById('atalho-texto');
    if (a) {
      texto.innerHTML = atalhoParaTexto(a).split(' + ')
        .map(function (p) { return '<kbd>' + escapeHtml(p) + '</kbd>'; })
        .join('<span style="color:#aaa;margin:0 2px">+</span>');
      display.classList.add('tem-valor');
    } else {
      texto.textContent = 'Clique aqui e pressione as teclas';
      display.classList.remove('tem-valor');
    }
  }

  function iniciarAtalho() {
    var display  = document.getElementById('atalho-display');
    var btnSalvar = document.getElementById('btn-salvar-atalho');
    var btnLimpar = document.getElementById('btn-limpar-atalho');
    var feedback  = document.getElementById('atalho-feedback');

    chrome.storage.local.get(['atalhoCustom'], function (data) {
      var salvo = data.atalhoCustom || ATALHO_PADRAO;
      atalhoCapturado = salvo;
      renderizarAtalhoDisplay(salvo);
    });

    display.addEventListener('focus', function () {
      display.classList.add('gravando');
      document.getElementById('atalho-texto').textContent = 'Pressione a combinação de teclas…';
      display.classList.remove('tem-valor');
      feedback.style.display = 'none';
    });

    display.addEventListener('blur', function () {
      display.classList.remove('gravando');
      renderizarAtalhoDisplay(atalhoCapturado);
    });

    display.addEventListener('keydown', function (e) {
      e.preventDefault();
      e.stopPropagation();

      var teclasPrincipais = /^[a-zA-Z0-9]$|^F\d+$/;
      var key = e.key;

      // Ignora pressionamento isolado de modificadores
      if (['Control','Alt','Shift','Meta'].indexOf(key) !== -1) return;

      var candidato = {
        ctrl:  e.ctrlKey,
        alt:   e.altKey,
        shift: e.shiftKey,
        meta:  e.metaKey,
        key:   key.length === 1 ? key.toUpperCase() : key
      };

      var temModificador = candidato.ctrl || candidato.alt || candidato.shift || candidato.meta;
      if (!temModificador) {
        mostrarFeedback(feedback, 'erro', 'Use ao menos Ctrl, Alt ou Shift junto à tecla.');
        return;
      }
      if (!teclasPrincipais.test(candidato.key) && !/^F\d+$/.test(candidato.key)) {
        mostrarFeedback(feedback, 'erro', 'Use uma letra, número ou tecla de função (F1–F12).');
        return;
      }

      atalhoCapturado = candidato;
      renderizarAtalhoDisplay(candidato);
      display.classList.remove('gravando');
      display.blur();
      btnSalvar.disabled = false;
      feedback.style.display = 'none';
    });

    btnSalvar.addEventListener('click', function () {
      if (!atalhoCapturado) return;
      chrome.storage.local.set({ atalhoCustom: atalhoCapturado }, function () {
        btnSalvar.disabled = true;
        mostrarFeedback(feedback, 'ok', 'Atalho salvo: ' + atalhoParaTexto(atalhoCapturado));
        toast('Atalho salvo!');
      });
    });

    btnLimpar.addEventListener('click', function () {
      atalhoCapturado = ATALHO_PADRAO;
      chrome.storage.local.set({ atalhoCustom: ATALHO_PADRAO }, function () {
        renderizarAtalhoDisplay(ATALHO_PADRAO);
        btnSalvar.disabled = true;
        mostrarFeedback(feedback, 'ok', 'Atalho redefinido para o padrão: ' + atalhoParaTexto(ATALHO_PADRAO));
        toast('Atalho redefinido.');
      });
    });
  }

  function mostrarFeedback(el, tipo, msg) {
    el.textContent = msg;
    el.className = 'atalho-feedback ' + tipo;
    el.style.display = 'block';
  }

  function carregarRegras() {
    chrome.storage.local.get(['regrasCampos'], function (data) {
      regras = Array.isArray(data.regrasCampos) ? data.regrasCampos : [];
      renderizar();
    });
  }

  function salvar(cb) {
    chrome.storage.local.set({ regrasCampos: regras }, cb);
  }

  function adicionarRegra() {
    var label = document.getElementById('inp-label').value.trim();
    var valor = document.getElementById('inp-valor').value.trim();
    var tipoCampo = document.getElementById('inp-tipo-campo').value;
    var erroEl = document.getElementById('erro-nova');

    if (!label) {
      mostrarErro(erroEl, 'Informe o texto do campo.');
      return;
    }
    if (!valor) {
      mostrarErro(erroEl, 'Informe o valor a preencher.');
      return;
    }

    erroEl.style.display = 'none';

    regras.push({ id: Date.now(), label: label, valor: valor, tipoCampo: tipoCampo });
    salvar(function () {
      document.getElementById('inp-label').value = '';
      document.getElementById('inp-valor').value = '';
      document.getElementById('inp-tipo-campo').value = 'qualquer';
      renderizar();
      toast('Regra adicionada.');
    });
  }

  function removerRegra(id) {
    regras = regras.filter(function (r) { return r.id !== id; });
    salvar(function () {
      renderizar();
      toast('Regra removida.');
    });
  }

  function renderizar() {
    var lista = document.getElementById('lista-regras');
    var contador = document.getElementById('contador');
    var btnLimpar = document.getElementById('btn-limpar-tudo');

    contador.textContent = regras.length > 0 ? '(' + regras.length + ')' : '';
    btnLimpar.style.display = regras.length > 0 ? 'inline-block' : 'none';

    if (regras.length === 0) {
      lista.innerHTML = '<p class="lista-vazia">Nenhuma regra cadastrada.</p>';
      return;
    }

    lista.innerHTML = '';
    regras.forEach(function (r) {
      var item = document.createElement('div');
      item.className = 'regra-item';
      item.innerHTML =
        '<div class="regra-info">' +
          '<span class="regra-label">' + escapeHtml(r.label) + '</span>' +
          '<div class="regra-meta">' +
            '<span class="regra-valor">→ ' + escapeHtml(r.valor) + '</span>' +
            '<span class="regra-tipo-badge">' + (TIPO_LABELS[r.tipoCampo] || r.tipoCampo) + '</span>' +
          '</div>' +
        '</div>' +
        '<button class="btn-remover" title="Remover">×</button>';
      item.querySelector('.btn-remover').addEventListener('click', function () {
        removerRegra(r.id);
      });
      lista.appendChild(item);
    });
  }

  function mostrarErro(el, msg) {
    el.textContent = msg;
    el.style.display = 'block';
  }

  function toast(msg) {
    var el = document.getElementById('toast');
    el.textContent = msg;
    el.style.display = 'block';
    el.classList.add('visible');
    setTimeout(function () {
      el.classList.remove('visible');
      setTimeout(function () { el.style.display = 'none'; }, 260);
    }, 2000);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
