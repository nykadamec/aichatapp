/**
 * Utility funkce pro detekci zařízení a kompatibility
 */

/**
 * Detekuje, zda je zařízení mobilní
 * @returns {boolean} True pokud je zařízení mobilní
 */
export const isMobileDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isMobileResolution = window.innerWidth <= 768;
  
  return isMobile && isMobileResolution;
};

/**
 * Detekuje rozlišení obrazovky
 * @returns {Object} Objekt s width a height
 */
export const getScreenResolution = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

/**
 * Kontroluje kompatibilitu zařízení
 * @param {Object} settings - Nastavení aplikace
 * @returns {boolean} True pokud je zařízení kompatibilní
 */
export const checkDeviceCompatibility = (settings = {}) => {
  // Pokud je zapnutý dev mode, obejdi kontrolu
  if (settings.devmode === true) {
    console.log('🔧 Dev mode aktivní - obcházím kontrolu mobilního zařízení');
    return true;
  }
  
  return isMobileDevice();
};

/**
 * Vytvoří overlay s upozorněním pro nekompatibilní zařízení
 * @param {number} width - Šířka obrazovky
 * @param {number} height - Výška obrazovky
 */
export const createCompatibilityOverlay = (width, height) => {
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
        Vaše rozlišení: ${width} × ${height}px
      </div>
    </div>
  `;
  
  return overlay;
}; 