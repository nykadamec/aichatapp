/**
 * Button komponenta
 * Znovupoužitelná komponenta pro tlačítka
 */

export class Button {
  /**
   * Vytvoří nové tlačítko
   * @param {Object} options - Možnosti tlačítka
   * @param {string} options.text - Text tlačítka
   * @param {string} options.variant - Varianta tlačítka (primary, secondary, success, error)
   * @param {string} options.size - Velikost tlačítka (small, medium, large)
   * @param {Function} options.onClick - Click handler
   * @param {boolean} options.disabled - Zda je tlačítko zakázané
   * @param {string} options.className - Dodatečné CSS třídy
   */
  constructor(options = {}) {
    this.options = {
      text: 'Button',
      variant: 'primary',
      size: 'medium',
      onClick: null,
      disabled: false,
      className: '',
      ...options
    };
    
    this.element = this.createButton();
  }
  
  /**
   * Vytvoří DOM element tlačítka
   * @returns {HTMLElement} Button element
   */
  createButton() {
    const button = document.createElement('button');
    
    // Základní třídy
    const baseClasses = ['btn'];
    
    // Variant třídy
    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      success: 'btn-success',
      error: 'btn-error'
    };
    
    // Size třídy
    const sizeClasses = {
      small: 'btn-small',
      medium: 'btn-medium',
      large: 'btn-large'
    };
    
    // Sestavení tříd
    const classes = [
      ...baseClasses,
      variantClasses[this.options.variant] || 'btn-primary',
      sizeClasses[this.options.size] || 'btn-medium',
      this.options.className
    ].filter(Boolean);
    
    button.className = classes.join(' ');
    button.textContent = this.options.text;
    button.disabled = this.options.disabled;
    
    // Accessibility
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', this.options.disabled ? '-1' : '0');
    
    // Event listeners
    if (this.options.onClick) {
      button.addEventListener('click', this.options.onClick);
    }
    
    // Keyboard support
    button.addEventListener('keydown', this.handleKeyDown.bind(this));
    
    return button;
  }
  
  /**
   * Handler pro klávesnicové události
   * @param {KeyboardEvent} event - Keyboard event
   */
  handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.options.onClick && !this.options.disabled) {
        this.options.onClick(event);
      }
    }
  }
  
  /**
   * Nastaví text tlačítka
   * @param {string} text - Nový text
   */
  setText(text) {
    this.element.textContent = text;
  }
  
  /**
   * Nastaví disabled stav
   * @param {boolean} disabled - Zda je tlačítko zakázané
   */
  setDisabled(disabled) {
    this.options.disabled = disabled;
    this.element.disabled = disabled;
    this.element.setAttribute('tabindex', disabled ? '-1' : '0');
  }
  
  /**
   * Přidá CSS třídu
   * @param {string} className - CSS třída
   */
  addClass(className) {
    this.element.classList.add(className);
  }
  
  /**
   * Odebere CSS třídu
   * @param {string} className - CSS třída
   */
  removeClass(className) {
    this.element.classList.remove(className);
  }
  
  /**
   * Vrátí DOM element
   * @returns {HTMLElement} Button element
   */
  getElement() {
    return this.element;
  }
  
  /**
   * Zničí komponentu
   */
  destroy() {
    if (this.options.onClick) {
      this.element.removeEventListener('click', this.options.onClick);
    }
    this.element.removeEventListener('keydown', this.handleKeyDown);
    this.element.remove();
  }
}

/**
 * Factory funkce pro vytvoření tlačítka
 * @param {Object} options - Možnosti tlačítka
 * @returns {Button} Button instance
 */
export const createButton = (options) => {
  return new Button(options);
};

/**
 * Předpřipravené varianty tlačítek
 */
export const ButtonVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ERROR: 'error'
};

export const ButtonSizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}; 