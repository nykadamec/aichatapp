// Konfigurace aplikace
const settings = {
  devmode: true,
  mobileOnlyMode: false,
  // Další nastavení lze přidat podle potřeby
  debugMode: false,
  apiUrl: 'https://api.example.com',
  version: '1.0.0'
};

// Export nastavení
if (typeof module !== 'undefined' && module.exports) {
  module.exports = settings;
} else {
  window.settings = settings;
}
