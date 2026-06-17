// Carrega os perfis no service worker para uso pelo atalho de teclado
try { importScripts('data/perfis.js'); } catch (e) {}

// Service worker: injeta os scripts na aba quando o content script ainda não está presente.
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg && msg.action === '__INJECT_AND_FORWARD__') {
    var tabId = msg.tabId;
    var forward = msg.forward;

    chrome.scripting.executeScript(
      { target: { tabId: tabId }, files: ['data/perfis.js'] },
      function () {
        chrome.scripting.executeScript(
          { target: { tabId: tabId }, files: ['content.js'] },
          function () {
            // Pequeno delay para o content script registrar o listener
            setTimeout(function () {
              chrome.tabs.sendMessage(tabId, forward, function (response) {
                sendResponse(response || { success: false, message: 'Não foi possível preencher esta página.' });
              });
            }, 150);
          }
        );
      }
    );
    return true; // async
  }
});

// Atalho de teclado: Ctrl+Shift+F (ou Command+Shift+F no Mac)
chrome.commands.onCommand.addListener(function (command) {
  if (command !== 'preencher-formulario') return;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (!tabs || !tabs[0]) return;
    var tabId = tabs[0].id;

    chrome.storage.local.get(
      ['ultimoPerfilId', 'usarAleatorio', 'filtroTipo', 'modoErro', 'camposErro', 'regrasCampos'],
      function (data) {
        var perfis = typeof PERFIS_BRASILEIROS !== 'undefined' ? PERFIS_BRASILEIROS : [];

        // Resolve o perfil usando as mesmas regras do popup
        var filtro = data.filtroTipo || 'todos';
        var perfisFiltrados = filtro === 'todos'
          ? perfis
          : perfis.filter(function (p) { return p.tipo === filtro || (filtro === 'pj' && p.tipo === 'completo'); });

        var perfil;
        if (data.usarAleatorio || !data.ultimoPerfilId) {
          perfil = perfisFiltrados[Math.floor(Math.random() * perfisFiltrados.length)];
        } else {
          perfil = perfisFiltrados.find(function (p) { return p.id === data.ultimoPerfilId; }) || perfisFiltrados[0];
        }

        if (!perfil) return;

        var camposErro = data.modoErro && Array.isArray(data.camposErro) ? data.camposErro : [];
        var regrasCampos = Array.isArray(data.regrasCampos) ? data.regrasCampos : [];

        var payload = {
          action: 'PREENCHER_FORMULARIO',
          perfil: perfil,
          camposErro: camposErro,
          regrasCampos: regrasCampos
        };

        chrome.tabs.sendMessage(tabId, payload, function (response) {
          if (chrome.runtime.lastError || !response) {
            // Injeta os scripts caso o content script ainda não esteja na página
            chrome.scripting.executeScript(
              { target: { tabId: tabId }, files: ['data/perfis.js'] },
              function () {
                chrome.scripting.executeScript(
                  { target: { tabId: tabId }, files: ['content.js'] },
                  function () {
                    setTimeout(function () {
                      chrome.tabs.sendMessage(tabId, payload);
                    }, 150);
                  }
                );
              }
            );
          }
        });

        chrome.storage.local.set({ ultimoPerfilId: perfil.id });
      }
    );
  });
});
