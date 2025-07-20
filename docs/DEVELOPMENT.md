# Vývojová dokumentace - AI Chat App

## 🚀 Rychlý start

### Požadavky
- Moderní webový prohlížeč
- Lokální server (pro vývoj)

### Instalace a spuštění
```bash
# Klonování repository
git clone <repository-url>
cd aiweb

# Spuštění lokálního serveru
python -m http.server 8000
# nebo
npx serve public

# Otevření v prohlížeči
open http://localhost:8000
```

---

## 📁 Struktura projektu

### Složky a jejich účel

```
aiweb/
├── public/                 # Statické soubory pro produkci
│   └── index.html         # Hlavní HTML soubor
├── src/                   # Zdrojový kód
│   ├── js/               # JavaScript soubory
│   │   └── script.js     # Hlavní aplikace
│   ├── css/              # Styly
│   │   └── styles.css    # Hlavní styly
│   ├── components/       # Znovupoužitelné komponenty
│   │   └── ui/          # UI komponenty
│   ├── utils/            # Pomocné funkce
│   │   ├── deviceUtils.js
│   │   └── constants.js
│   └── config/           # Konfigurační soubory
│       └── config.js     # Aplikace konfigurace
├── assets/               # Obrázky, ikony, fonty
├── docs/                 # Dokumentace
└── design_system.md      # Designový systém
```

---

## 🧩 Komponentový systém

### Vytváření nových komponent

#### 1. Struktura komponenty
```javascript
// src/components/ui/MyComponent.js
export class MyComponent {
  constructor(options = {}) {
    this.options = {
      // výchozí možnosti
      ...options
    };
    
    this.element = this.createElement();
  }
  
  createElement() {
    const element = document.createElement('div');
    // implementace
    return element;
  }
  
  // API metody
  destroy() {
    // cleanup
  }
}

// Factory funkce
export const createMyComponent = (options) => {
  return new MyComponent(options);
};
```

#### 2. Použití komponenty
```javascript
import { createMyComponent } from '../components/ui/MyComponent.js';

const component = createMyComponent({
  // možnosti
});

document.body.appendChild(component.getElement());
```

### Typy komponent

#### UI Komponenty (`src/components/ui/`)
- Základní UI elementy (Button, Input, Dropdown)
- Znovupoužitelné napříč aplikací
- Dodržují designový systém

#### Layout Komponenty (`src/components/layout/`)
- Struktura stránky (Header, Footer, Container)
- Grid a flexbox systémy

#### Feature Komponenty (`src/components/features/`)
- Specifické pro funkce aplikace
- Kombinují UI komponenty

---

## 🎨 Stylování

### CSS Architektura

#### 1. Design Tokeny
Používej CSS custom properties definované v designovém systému:

```css
.my-component {
  background-color: var(--bg-card);
  color: var(--color-white);
  padding: var(--space-4);
  font-size: var(--text-base);
}
```

#### 2. BEM Metodologie
```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }

/* Modifier */
.card--featured { }
.card--compact { }
```

#### 3. Utility třídy
```css
/* Utility třídy pro běžné styly */
.u-text-center { text-align: center; }
.u-margin-top { margin-top: var(--space-4); }
.u-hidden { display: none; }
```

### Přidání nových stylů

1. **Komponentové styly**: Přidej do `src/css/components/`
2. **Utility styly**: Přidej do `src/css/utilities/`
3. **Layout styly**: Přidej do `src/css/layout/`

---

## 🔧 Utility funkce

### Vytváření utility funkcí

#### 1. Struktura utility souboru
```javascript
// src/utils/myUtils.js

/**
 * Popis funkce
 * @param {string} param - Popis parametru
 * @returns {string} Popis návratové hodnoty
 */
export const myFunction = (param) => {
  // implementace
  return result;
};

// Konstanty
export const MY_CONSTANTS = {
  VALUE_1: 'value1',
  VALUE_2: 'value2'
};
```

#### 2. Použití utility funkcí
```javascript
import { myFunction, MY_CONSTANTS } from '../utils/myUtils.js';

const result = myFunction(MY_CONSTANTS.VALUE_1);
```

### Existující utility funkce

- **`deviceUtils.js`**: Detekce zařízení a kompatibility
- **`constants.js`**: Konstanty aplikace
- **`domUtils.js`**: DOM manipulace
- **`validationUtils.js`**: Validace

---

## ⚙️ Konfigurace

### Přidání nových nastavení

1. **Rozšiř konfiguraci** v `src/config/config.js`:
```javascript
const settings = {
  // existující nastavení
  newSetting: 'value',
  featureFlags: {
    newFeature: true
  }
};
```

2. **Použij v aplikaci**:
```javascript
import settings from '../config/config.js';

if (settings.featureFlags.newFeature) {
  // implementace
}
```

### Environment-specific konfigurace
```javascript
const isDevelopment = window.location.hostname === 'localhost';
const isProduction = window.location.hostname === 'example.com';

const config = {
  apiUrl: isDevelopment ? 'http://localhost:3000' : 'https://api.example.com',
  debugMode: isDevelopment
};
```

---

## 🧪 Testing

### Unit testy
```javascript
// src/utils/__tests__/myUtils.test.js
import { myFunction } from '../myUtils.js';

describe('myFunction', () => {
  test('should return expected result', () => {
    const result = myFunction('test');
    expect(result).toBe('expected');
  });
});
```

### E2E testy
```javascript
// cypress/integration/app.spec.js
describe('AI Chat App', () => {
  it('should display file changes', () => {
    cy.visit('/');
    cy.get('.file').should('have.length', 4);
  });
});
```

---

## 📱 Mobilní optimalizace

### Detekce zařízení
```javascript
import { isMobileDevice, checkDeviceCompatibility } from '../utils/deviceUtils.js';

if (!checkDeviceCompatibility(settings)) {
  // zobraz overlay pro nekompatibilní zařízení
}
```

### Touch-friendly design
- Minimální velikost tlačítek: 44px
- Adekvátní spacing mezi elementy
- Optimalizace pro vertikální scroll

---

## ♿ Přístupnost

### Klávesnicová navigace
```javascript
element.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    // akce
  }
});
```

### ARIA atributy
```html
<button 
  role="button" 
  aria-label="Uložit změny"
  tabindex="0">
  Uložit
</button>
```

### Screen reader podpora
- Používej sémantické HTML elementy
- Implementuj `aria-label` pro popisné texty
- Zajisti správnou hierarchii nadpisů

---

## 🚀 Performance

### Optimalizace

#### 1. Lazy loading
```javascript
// Lazy loading komponent
const loadComponent = async () => {
  const { MyComponent } = await import('./MyComponent.js');
  return new MyComponent();
};
```

#### 2. Event delegation
```javascript
// Místo mnoha event listenerů
document.addEventListener('click', (event) => {
  if (event.target.matches('.btn')) {
    // handle button click
  }
});
```

#### 3. Debouncing
```javascript
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
```

---

## 🔍 Debugging

### Console logging
```javascript
// Používej konzistentní prefixy
console.log('🔧 [Config] Loading settings:', settings);
console.log('📱 [Device] Mobile detected:', isMobileDevice());
console.log('🎨 [UI] Component created:', component);
```

### Dev tools
- Chrome DevTools pro debugging
- Lighthouse pro performance audit
- Accessibility audit v DevTools

---

## 📚 Best Practices

### Kód
- Používej ES6+ syntax
- Dodržuj naming conventions
- Piš dokumentaci pro funkce
- Používej early returns

### CSS
- Používej design tokeny
- Dodržuj BEM metodologii
- Minimalizuj CSS specificity
- Organizuj styly logicky

### JavaScript
- Používej const/let místo var
- Implementuj error handling
- Používej async/await
- Dodržuj DRY princip

---

## 🚨 Troubleshooting

### Časté problémy

#### 1. Cesty k souborům
```javascript
// ✅ Správně
import config from '../config/config.js';

// ❌ Špatně
import config from './config.js';
```

#### 2. Event listenery
```javascript
// ✅ Cleanup při destroy
destroy() {
  this.element.removeEventListener('click', this.handleClick);
}

// ❌ Memory leak
// Chybí cleanup
```

#### 3. CSS specificity
```css
/* ✅ Nízká specificita */
.btn { }

/* ❌ Vysoká specificita */
body div.container .card .btn { }
```

---

## 📞 Podpora

Pro otázky a problémy:
1. Zkontroluj tuto dokumentaci
2. Podívej se do `design_system.md`
3. Vytvoř issue v GitHub repository
4. Kontaktuj vývojový tým

---

*Poslední aktualizace: 2024* 