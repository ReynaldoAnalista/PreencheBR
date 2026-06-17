(function () {
  'use strict';

  let perfis = [];
  let ultimoPerfil = null;

  function init() {
    var base = typeof PERFIS_BRASILEIROS !== 'undefined' ? PERFIS_BRASILEIROS : [];
    chrome.storage.local.get(['perfisImportados'], function (data) {
      var importados = Array.isArray(data.perfisImportados) ? data.perfisImportados : [];
      perfis = base.concat(importados);
      preencherSelect();
      carregarPreferencias();
      bindEvents();
      carregarErros();
    });
  }

  function filtrarPerfis(lista, filtro) {
    if (filtro === 'todos') return lista;
    if (filtro === 'veiculo') return lista.filter(function (p) { return !!p.veiculo; });
    if (filtro === 'pj') return lista.filter(function (p) { return p.tipo === 'pj' || p.tipo === 'completo'; });
    if (filtro === 'pf') return lista.filter(function (p) { return p.tipo === 'pf' || p.tipo === 'completo'; });
    return lista.filter(function (p) { return p.tipo === filtro; });
  }

  function getFiltroTipo() {
    const radio = document.querySelector('input[name="filtro-tipo"]:checked');
    return radio ? radio.value : 'todos';
  }

  function preencherSelect() {
    const sel = document.getElementById('select-perfil');
    const filtro = getFiltroTipo();
    const perfisFiltrados = filtrarPerfis(perfis, filtro);

    const valorAtual = sel.value;
    sel.innerHTML = '';
    perfisFiltrados.forEach(function (p) {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.label;
      sel.appendChild(opt);
    });

    if (perfisFiltrados.some(function (p) { return p.id === valorAtual; })) {
      sel.value = valorAtual;
    }
  }

  function carregarPreferencias() {
    chrome.storage.local.get(['ultimoPerfilId', 'usarAleatorio', 'filtroTipo'], function (data) {
      const sel = document.getElementById('select-perfil');
      const chk = document.getElementById('check-aleatorio');

      if (data.filtroTipo) {
        const radio = document.querySelector('input[name="filtro-tipo"][value="' + data.filtroTipo + '"]');
        if (radio) {
          radio.checked = true;
          preencherSelect();
        }
      }

      if (data.usarAleatorio) {
        chk.checked = true;
        sel.disabled = true;
      }
      if (data.ultimoPerfilId) {
        sel.value = data.ultimoPerfilId;
      }
    });
  }

  function carregarErros() {
    chrome.storage.local.get(['modoErro', 'camposErro'], function (data) {
      var chkErro = document.getElementById('check-modo-erro');
      var panel = document.getElementById('erro-panel');
      if (data.modoErro) {
        chkErro.checked = true;
        panel.style.display = 'block';
      }
      if (Array.isArray(data.camposErro)) {
        document.querySelectorAll('.chk-erro').forEach(function (chk) {
          chk.checked = data.camposErro.indexOf(chk.value) !== -1;
        });
      }
    });
  }

  function getCamposErro() {
    var chkErro = document.getElementById('check-modo-erro');
    if (!chkErro.checked) return [];
    var selecionados = [];
    document.querySelectorAll('.chk-erro:checked').forEach(function (chk) {
      selecionados.push(chk.value);
    });
    return selecionados;
  }

  function bindEvents() {
    document.querySelectorAll('input[name="filtro-tipo"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        preencherSelect();
        chrome.storage.local.set({ filtroTipo: this.value });
      });
    });

    document.getElementById('check-aleatorio').addEventListener('change', function () {
      const sel = document.getElementById('select-perfil');
      sel.disabled = this.checked;
      chrome.storage.local.set({ usarAleatorio: this.checked });
    });

    document.getElementById('check-modo-erro').addEventListener('change', function () {
      document.getElementById('erro-panel').style.display = this.checked ? 'block' : 'none';
      chrome.storage.local.set({ modoErro: this.checked });
    });

    document.querySelectorAll('.chk-erro').forEach(function (chk) {
      chk.addEventListener('change', function () {
        chrome.storage.local.set({ camposErro: getCamposErro() });
      });
    });

    document.getElementById('btn-preencher').addEventListener('click', function () {
      executarAcao('PREENCHER_FORMULARIO');
    });

    document.getElementById('btn-limpar').addEventListener('click', function () {
      executarAcao('LIMPAR_CAMPOS');
    });

    document.getElementById('btn-regras').addEventListener('click', function () {
      chrome.runtime.openOptionsPage();
    });

    document.getElementById('btn-cafe').addEventListener('click', function () {
      const pix = 'reynaldo.analista@gmail.com';
      navigator.clipboard.writeText(pix).then(function () {
        showPixToast('Chave PIX copiada! ☕');
      }).catch(function () {
        showPixToast('PIX: ' + pix);
      });
    });
  }

  function showPixToast(msg) {
    var toast = document.getElementById('pix-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pix-toast';
      toast.className = 'pix-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2500);
  }

  function getPerfil() {
    const chk = document.getElementById('check-aleatorio');
    const filtro = getFiltroTipo();
    const perfisFiltrados = filtrarPerfis(perfis, filtro);

    if (chk.checked) {
      return perfisFiltrados[Math.floor(Math.random() * perfisFiltrados.length)];
    }
    const sel = document.getElementById('select-perfil');
    return perfisFiltrados.find(function (p) { return p.id === sel.value; }) || perfisFiltrados[0];
  }

  function executarAcao(action) {
    const btnPreencher = document.getElementById('btn-preencher');
    const btnLimpar = document.getElementById('btn-limpar');
    btnPreencher.disabled = true;
    btnLimpar.disabled = true;
    setStatus('loading', '⏳', 'Processando...');

    let perfil = null;
    if (action === 'PREENCHER_FORMULARIO') {
      perfil = getPerfil();
      if (!perfil) {
        setStatus('error', '❌', 'Nenhum perfil disponível.');
        btnPreencher.disabled = false;
        btnLimpar.disabled = false;
        return;
      }
      chrome.storage.local.set({ ultimoPerfilId: perfil.id });
    }

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (!tabs || !tabs[0]) {
        setStatus('error', '❌', 'Não foi possível acessar a aba atual.');
        btnPreencher.disabled = false;
        btnLimpar.disabled = false;
        return;
      }

      var tabId = tabs[0].id;
      var camposErro = getCamposErro();
      // regras personalizadas são carregadas aqui e enviadas junto ao payload
      chrome.storage.local.get(['regrasCampos'], function (data) {
        var regrasCampos = Array.isArray(data.regrasCampos) ? data.regrasCampos : [];
        var payload = { action: action, perfil: perfil, camposErro: camposErro, regrasCampos: regrasCampos };

        chrome.tabs.sendMessage(tabId, payload, function (response) {
          if (chrome.runtime.lastError || !response) {
            chrome.runtime.sendMessage(
              { action: '__INJECT_AND_FORWARD__', tabId: tabId, forward: payload },
              function (injectedResponse) {
                btnPreencher.disabled = false;
                btnLimpar.disabled = false;
                handleResponse(action, injectedResponse);
              }
            );
            return;
          }

          btnPreencher.disabled = false;
          btnLimpar.disabled = false;
          handleResponse(action, response);
        });
      });
    });
  }

  function handleResponse(action, response) {
    if (!response) {
      setStatus('error', '❌', 'Não foi possível preencher esta página.');
      return;
    }

    if (action === 'LIMPAR_CAMPOS') {
      if (response.success) {
        setStatus('success', '✅', response.message || 'Campos limpos com sucesso.');
      } else {
        setStatus('warning', '⚠️', response.message || 'Limpeza automática não disponível nesta página.');
      }
      return;
    }

    if (response.success) {
      if (response.filledFields === 0) {
        setStatus('warning', '⚠️', 'Nenhum campo compatível foi encontrado nesta página.');
      } else {
        setStatus('success', '✅', 'Formulário preenchido com sucesso.\nCampos preenchidos: ' + response.filledFields + ' de ' + response.totalFields);
      }
    } else {
      setStatus('error', '❌', response.message || 'Não foi possível preencher esta página.');
    }
  }

  function setStatus(type, icon, text) {
    const area = document.getElementById('status-area');
    const iconEl = document.getElementById('status-icon');
    const textEl = document.getElementById('status-text');
    area.className = 'status-area ' + (type || '');
    iconEl.textContent = icon;
    textEl.textContent = text;
  }

  document.addEventListener('DOMContentLoaded', init);
})();
