# Designový systém - AI Chat App

## 🎯 Název a účel projektu

**AI Chat App** je mobilní webová aplikace pro interaktivní komunikaci s AI asistenty v kontextu změn v kódu. Aplikace umožňuje uživatelům prohlížet změny v souborech, rozhodovat se o jejich přijetí nebo vrácení, a komunikovat s různými AI modely.

### Klíčové funkce:
- Zobrazení změn v souborech s vizuálními indikátory
- Interaktivní rozhodování (Keep/Undo)
- Chat rozhraní pro komunikaci s AI
- Výběr různých AI agentů a modelů
- Optimalizace pro mobilní zařízení

---

## 📝 Zásady pro psaní kódu

### Naming Conventions

#### Soubory a složky:
- **Soubory**: `kebab-case` (např. `file-manager.js`, `user-profile.css`)
- **Složky**: `kebab-case` (např. `src/components/`, `src/utils/`)
- **Konfigurační soubory**: `camelCase` (např. `config.js`, `appConfig.js`)

#### Proměnné a funkce:
- **Proměnné**: `camelCase` (např. `userName`, `isLoading`)
- **Funkce**: `camelCase` s prefixem `handle` pro event handlery (např. `handleClick`, `handleSubmit`)
- **Konstanty**: `UPPER_SNAKE_CASE` (např. `API_BASE_URL`, `MAX_RETRY_COUNT`)
- **CSS třídy**: `kebab-case` (např. `btn-primary`, `card-container`)

### File Structure
```
aiweb/
├── public/                 # Statické soubory
│   └── index.html         # Hlavní HTML soubor
├── src/                   # Zdrojový kód
│   ├── js/               # JavaScript soubory
│   ├── css/              # Styly
│   ├── components/       # Znovupoužitelné komponenty
│   ├── utils/            # Pomocné funkce
│   └── config/           # Konfigurační soubory
├── assets/               # Obrázky, ikony, fonty
├── docs/                 # Dokumentace
└── design_system.md      # Tento soubor
```

### DRY (Don't Repeat Yourself) a Reusability
- Vytvářej znovupoužitelné komponenty pro opakující se UI elementy
- Používej utility funkce pro běžné operace
- Centralizuj konfiguraci a konstanty
- Vytvářej CSS třídy pro opakující se styly

---

## 🧩 Komponentový systém

### Struktura komponent:
```
src/components/
├── ui/                   # Základní UI komponenty
│   ├── Button.js
│   ├── Dropdown.js
│   ├── Card.js
│   └── Input.js
├── layout/               # Layout komponenty
│   ├── Container.js
│   └── Header.js
└── features/             # Feature-specific komponenty
    ├── FileList.js
    ├── ChatInterface.js
    └── AgentSelector.js
```

### Hooky:
```
src/hooks/
├── useDeviceDetection.js
├── useDropdown.js
└── useLocalStorage.js
```

### Utility funkce:
```
src/utils/
├── deviceUtils.js        # Detekce zařízení
├── domUtils.js          # DOM manipulace
├── validationUtils.js   # Validace
└── constants.js         # Konstanty
```

---

## 🎨 Přístup ke stylům

### CSS Architektura
Používáme **vanilla CSS** s následujícími principy:

#### Organizace CSS:
- **Base styles**: Základní reset a typografie
- **Layout styles**: Grid a flexbox systémy
- **Component styles**: Styly pro specifické komponenty
- **Utility styles**: Pomocné třídy

#### CSS Naming Convention:
```css
/* Komponenty */
.component-name { }
.component-name__element { }
.component-name--modifier { }

/* Utility třídy */
.u-text-center { }
.u-margin-top { }
.u-hidden { }
```

#### CSS Struktura:
```css
/* 1. Reset a base */
/* 2. Typography */
/* 3. Layout */
/* 4. Components */
/* 5. Utilities */
/* 6. Responsive */
```

---

## 🎨 Design Tokeny

### Barvy

#### Primární paleta:
```css
:root {
  /* Základní barvy */
  --color-black: #000000;
  --color-white: #ffffff;
  
  /* Grayscale */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  
  /* Sémantické barvy */
  --color-primary: #8ab4f8;
  --color-success: #2e7d32;
  --color-error: #b00020;
  --color-warning: #f59e0b;
  
  /* Background barvy */
  --bg-primary: #000000;
  --bg-secondary: #0e0e0e;
  --bg-tertiary: #151515;
  --bg-card: #151515;
}
```

#### Sémantické použití:
- **Primary**: Hlavní akce, odkazy
- **Success**: Potvrzovací akce, úspěšné stavy
- **Error**: Chyby, destruktivní akce
- **Warning**: Upozornění, varování

### Typografie

#### Font Stack:
```css
:root {
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
}
```

#### Font velikosti:
```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
}
```

#### Font váhy:
```css
:root {
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Spacing systém

#### Základní jednotky:
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
}
```

#### Použití:
- **Padding**: `var(--space-4)` pro základní padding
- **Margin**: `var(--space-2)` pro malé mezery
- **Gap**: `var(--space-3)` pro flexbox gap

### Breakpoints

#### Mobilní-first přístup:
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

#### Media queries:
```css
/* Tablet a větší */
@media (min-width: 768px) { }

/* Desktop a větší */
@media (min-width: 1024px) { }
```

---

## ♿ Přístupnost a UX Guidelines

### Přístupnost (A11y)

#### Klávesnicová navigace:
- Všechny interaktivní elementy musí být dostupné pomocí klávesnice
- Používej `tabindex="0"` pro focusable elementy
- Implementuj `onKeyDown` handlery pro Enter a Space

#### Screen reader podpora:
- Používej `aria-label` pro popisné texty
- Implementuj `role` atributy kde je potřeba
- Zajisti správnou hierarchii nadpisů (h1-h6)

#### Kontrast:
- Minimální kontrast 4.5:1 pro normální text
- Minimální kontrast 3:1 pro velký text (18px+)

### UX Guidelines

#### Mobilní optimalizace:
- Touch-friendly velikosti (min. 44px pro tlačítka)
- Adekvátní spacing mezi interaktivními elementy
- Optimalizace pro vertikální scroll

#### Loading stavy:
- Zobrazuj loading indikátory pro dlouhé operace
- Používej skeleton loading pro obsah
- Poskytuj feedback pro všechny akce

#### Error handling:
- Zobrazuj uživatelsky přívětivé chybové zprávy
- Implementuj retry mechanismy
- Poskytuj návody pro řešení problémů

#### Performance:
- Lazy loading pro obrázky a komponenty
- Optimalizace bundle velikosti
- Caching strategie pro statické assety

---

## 🔧 Vývojové nástroje a workflow

### Code Quality:
- ESLint pro JavaScript linting
- Prettier pro code formatting
- Husky pro pre-commit hooks

### Testing:
- Jest pro unit testy
- Cypress pro E2E testy
- Lighthouse pro performance audit

### Build proces:
- Webpack nebo Vite pro bundling
- CSS minification
- Asset optimization

---

## 📚 Dokumentace a reference

### Komponenty dokumentace:
Každý komponent by měl mít:
- Popis účelu a použití
- Props/parametry
- Příklady použití
- Accessibility considerations

### Style guide:
- Konzistentní naming conventions
- Code formatting rules
- Best practices pro performance

---

*Tento designový systém je živý dokument a měl by být pravidelně aktualizován podle potřeb projektu.* 