document.addEventListener('DOMContentLoaded', function() {
  // Detekce rozlišení obrazovky a typu zařízení
  function checkDeviceCompatibility() {
    // Pokud je zapnutý dev mode, obejdi kontrolu zařízení
    if (window.settings && window.settings.devmode === true) {
      console.log('🔧 Dev mode aktivní - obcházím kontrolu mobilního zařízení');
      return true;
    }
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Detekce mobilního zařízení podle user agent
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    
    // Detekce podle rozlišení (mobilní zařízení obvykle mají šířku do 768px)
    const isMobileResolution = screenWidth <= 768;
    
    // Pokud není mobilní zařízení nebo má velké rozlišení
    if (!isMobile || !isMobileResolution) {
      // Vytvoření overlay s upozorněním
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        font-family: sans-serif;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
      `;
      
      overlay.innerHTML = `
        <div style="max-width: 400px;">
          <h2 style="color: #ff6b6b; margin-bottom: 20px;">📱 Pouze pro mobilní zařízení</h2>
          <p style="font-size: 18px; line-height: 1.5; margin-bottom: 20px;">
            Tato aplikace je optimalizována pouze pro mobilní telefony.
          </p>
          <p style="font-size: 16px; color: #ccc; margin-bottom: 30px;">
            Prosím, otevřete ji na svém mobilním zařízení pro nejlepší zážitek.
          </p>
          <div style="font-size: 14px; color: #888;">
            Vaše rozlišení: ${screenWidth} × ${screenHeight}px
          </div>
        </div>
      `;
      
      document.body.appendChild(overlay);
      return false;
    }
    return true;
  }
  
  // Kontrola kompatibility při načtení
  const isCompatible = checkDeviceCompatibility();
  
  // Kontrola při změně orientace nebo velikosti okna
  window.addEventListener('resize', checkDeviceCompatibility);
  window.addEventListener('orientationchange', function() {
    setTimeout(checkDeviceCompatibility, 100);
  });
  
  // Pokud je zařízení kompatibilní, inicializuj aplikaci
  if (isCompatible) {
    const keepButton = document.querySelector('.btn-keep');
    const undoButton = document.querySelector('.btn-undo');
    const input = document.querySelector('input[type="text"]');
    const sendButton = document.querySelector('.input-wrapper button');

    keepButton.addEventListener('click', function() {
      alert('Změny uloženy!');
    });

    undoButton.addEventListener('click', function() {
      alert('Změny vráceny!');
    });

    sendButton.addEventListener('click', function() {
      const message = input.value.trim();
      if (message) {
        alert('Zpráva odeslána: ' + message);
        input.value = '';
      }
    });
    
    // Odeslání zprávy při stisknutí Enter
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendButton.click();
      }
    });
  }
});