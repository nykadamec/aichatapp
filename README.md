# AI Chat App

Mobilní webová aplikace pro interaktivní komunikaci s AI asistenty v kontextu změn v kódu.

## 🚀 Funkce

- 📱 Optimalizováno pro mobilní zařízení
- 💬 Chat rozhraní pro komunikaci s AI
- 📁 Zobrazení změn v souborech s vizuálními indikátory
- ✅ Interaktivní rozhodování (Keep/Undo)
- 🤖 Výběr různých AI agentů a modelů
- 🎨 Moderní dark theme design

## 📁 Struktura projektu

```
aiweb/
├── public/                 # Statické soubory
│   └── index.html         # Hlavní HTML soubor
├── src/                   # Zdrojový kód
│   ├── js/               # JavaScript soubory
│   │   └── script.js     # Hlavní aplikace
│   ├── css/              # Styly
│   │   └── styles.css    # Hlavní styly
│   ├── components/       # Znovupoužitelné komponenty
│   ├── utils/            # Pomocné funkce
│   └── config/           # Konfigurační soubory
│       └── config.js     # Aplikace konfigurace
├── assets/               # Obrázky, ikony, fonty
│   ├── images/
│   └── icons/
├── docs/                 # Dokumentace
└── design_system.md      # Designový systém
```

## 🛠️ Technologie

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Custom CSS s design tokeny
- **Build**: Žádný (čistý vanilla JS)
- **Deployment**: Statické soubory

## 🚀 Spuštění

### Rychlý start

1. **Klonej repository:**
   ```bash
   git clone <repository-url>
   cd aiweb
   ```

2. **Spusť development server:**
   ```bash
   # Node.js (doporučeno)
   npm start
   # nebo
   node dev-server.js
   
   # Alternativní způsoby:
   npm run serve    # serve package
   npm run python   # Python server
   ```

3. **Otevři v prohlížeči:**
   ```bash
   # Automatické otevření
   npm run open
   
   # Nebo manuálně otevři:
   # http://localhost:3000
   ```

### Development prostředí

Projekt obsahuje **development wrapper** (`index.html`) který:
- 🎨 Zobrazuje aplikaci v development prostředí
- 📱 Umožňuje testování na desktopu
- 🔧 Poskytuje rychlý přístup k dokumentaci
- 📊 Zobrazuje informace o struktuře projektu

### Alternativní spuštění

```bash
# Přímé otevření aplikace
open public/index.html

# Python server
python -m http.server 8000
open http://localhost:8000

# Serve package
npx serve public
open http://localhost:3000
```

### Přístup:
- **Development**: `http://localhost:3000` (s wrapperem)
- **Přímá aplikace**: `http://localhost:3000/public/index.html`
- **Poznámka:** Aplikace je optimalizována pro mobilní zařízení

## ⚙️ Konfigurace

Konfigurace aplikace se nachází v `src/config/config.js`:

```javascript
const settings = {
  devmode: true,           // Vývojový režim
  mobileOnlyMode: false,   // Pouze mobilní zařízení
  debugMode: false,        // Debug režim
  apiUrl: 'https://api.example.com',
  version: '1.0.0'
};
```

## 🎨 Designový systém

Projekt používá kompletní designový systém definovaný v `design_system.md`, který zahrnuje:

- 🎨 Design tokeny (barvy, typografie, spacing)
- 📝 Naming conventions
- 🧩 Komponentový systém
- ♿ Přístupnost guidelines
- 📱 Responsive design

## 🔧 Vývoj

### Přidání nových komponent:

1. Vytvoř soubor v `src/components/`
2. Dodržuj naming conventions z designového systému
3. Přidej styly do `src/css/`
4. Aktualizuj dokumentaci

### CSS architektura:

- Používej CSS custom properties (design tokeny)
- Dodržuj BEM metodologii pro naming
- Organizuj styly podle komponent

## 📱 Mobilní optimalizace

Aplikace je optimalizována pro mobilní zařízení:

- Touch-friendly interface
- Responsive design
- Optimalizované pro vertikální scroll
- Detekce zařízení s fallback

## 🤝 Přispívání

1. Fork repository
2. Vytvoř feature branch (`git checkout -b feature/amazing-feature`)
3. Commit změny (`git commit -m 'Add amazing feature'`)
4. Push do branch (`git push origin feature/amazing-feature`)
5. Otevři Pull Request

## 📄 Licence

Tento projekt je pod licencí MIT. Viz `LICENSE` soubor pro detaily.

## 📞 Kontakt

Pro otázky a návrhy vytvořte issue v GitHub repository.

---

*Vytvořeno s ❤️ pro lepší vývojářský zážitek*