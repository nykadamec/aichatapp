/**
 * Konstanty aplikace
 */

// API konstanty
export const API_ENDPOINTS = {
  BASE_URL: 'https://api.example.com',
  CHAT: '/chat',
  FILES: '/files',
  AGENTS: '/agents'
};

// UI konstanty
export const UI_CONSTANTS = {
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1280,
  
  // Touch-friendly velikosti
  MIN_TOUCH_TARGET: 44,
  BUTTON_HEIGHT: 48,
  
  // Z-index vrstvy
  Z_INDEX: {
    DROPDOWN: 1000,
    OVERLAY: 9999,
    MODAL: 10000
  }
};

// Typy souborů a jejich ikony
export const FILE_TYPES = {
  TYPESCRIPT: { icon: '🟦', color: '#3178c6' },
  JAVASCRIPT: { icon: '🟨', color: '#f7df1e' },
  SVELTE: { icon: '🟠', color: '#ff3e00' },
  TEST: { icon: '🟪', color: '#8b5cf6' },
  SERVER: { icon: '🟢', color: '#10b981' },
  CONFIG: { icon: '⚙️', color: '#6b7280' }
};

// AI agenti a modely
export const AI_AGENTS = {
  COPILOT: {
    id: 'copilot',
    name: 'Agent',
    description: 'GitHub Copilot'
  },
  CLAUDE: {
    id: 'claude',
    name: 'Ask',
    description: 'Claude AI'
  }
};

export const AI_MODELS = {
  CLAUDE_SONNET: {
    id: 'claude-sonnet',
    name: 'Claude 3.7 Sonnet',
    description: 'Nejnovější Claude model'
  },
  CLAUDE_HAIKU: {
    id: 'claude-haiku',
    name: 'Claude 3.7 Haiku',
    description: 'Rychlý Claude model'
  },
  GPT4: {
    id: 'gpt4',
    name: 'GPT-4 Turbo',
    description: 'OpenAI GPT-4'
  }
};

// Akce pro soubory
export const FILE_ACTIONS = {
  KEEP: 'keep',
  UNDO: 'undo',
  ADD_CONTEXT: 'add-context'
};

// Event typy
export const EVENTS = {
  FILE_ACTION: 'file-action',
  MESSAGE_SENT: 'message-sent',
  AGENT_CHANGED: 'agent-changed',
  MODEL_CHANGED: 'model-changed'
};

// Local storage klíče
export const STORAGE_KEYS = {
  SELECTED_AGENT: 'selected-agent',
  SELECTED_MODEL: 'selected-model',
  USER_PREFERENCES: 'user-preferences',
  CHAT_HISTORY: 'chat-history'
};

// Error zprávy
export const ERROR_MESSAGES = {
  DEVICE_NOT_SUPPORTED: 'Tato aplikace je optimalizována pouze pro mobilní zařízení.',
  NETWORK_ERROR: 'Chyba připojení k síti.',
  API_ERROR: 'Chyba při komunikaci se serverem.',
  VALIDATION_ERROR: 'Neplatné vstupní údaje.'
};

// Success zprávy
export const SUCCESS_MESSAGES = {
  CHANGES_SAVED: 'Změny uloženy!',
  CHANGES_UNDONE: 'Změny vráceny!',
  MESSAGE_SENT: 'Zpráva odeslána!'
}; 