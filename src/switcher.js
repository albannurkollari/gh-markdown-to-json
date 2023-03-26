import { elm, registerDOMEvent } from './helpers.js';

if (!customElements.get('switch-roo')) {
  customElements.define(
    'switch-roo',
    class extends HTMLElement {
      static get observedAttributes() {
        return ['data-labels', 'sticky'];
      }

      constructor() {
        super();

        const shadowDom = this.attachShadow({ mode: 'open' });
        const switcherooContainer = elm.create('div', {
          class: 'switcheroo-container',
        });
        const span = elm.create('span', { class: 'switcher switcher-1' });
        const id = 'switcheroo-input';
        const input = elm.create('input', {
          'data-label-yes': 'raw',
          'data-label-no': 'html',
          type: 'checkbox',
          id,
        });
        const label = elm.create('label', { for: id });
        const link = elm.create('link', {
          rel: 'stylesheet',
          href: './switcher.css',
        });

        this.input = input;
        this.label = input;
        this.span = span;

        elm.addChildren(span, input, label);
        elm.addChildren(switcherooContainer, span);
        shadowDom.appendChild(link);
        shadowDom.appendChild(switcherooContainer);
        this.setAttribute('checked', false);
        this.setAttribute('data-labels', 'on|off');
      }

      connectedCallback() {
        this.registerEvents();
      }

      disconnectedCallback() {
        this.input?.unregister?.();
      }

      attributeChangedCallback(name, _, newValue) {
        if (name === 'data-labels') {
          const [yes, no] = newValue.split(/[|;:,]/);

          this.input.setAttribute('data-label-yes', yes);
          this.input.setAttribute('data-label-no', no);
        }
      }

      registerEvents() {
        const change = this.onCheckStateChange.bind(this);

        this.input.unregister = registerDOMEvent(this.input, { change });
      }

      toggle() {
        const { checked } = this.input;

        this.input.checked = !checked;
        this.input.dispatchEvent(new KeyboardEvent('change'));
      }

      focus() {
        this.input.focus();
      }

      onCheckStateChange({ target: { checked } }) {
        this.setAttribute('checked', checked);
        this.dispatchEvent(new CustomEvent('change', { detail: { checked } }));
      }

      set checked(value) {
        this.input.checked = !!value;
        this.input.dispatchEvent(new KeyboardEvent('change'));
      }

      get checked() {
        return this.input.checked;
      }
    }
  );
}
