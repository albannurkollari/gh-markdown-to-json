/**
 * Event handler callback for which an event when fired will invoke.
 * @callback EventHandler
 * @param {Event} event The `event` object.
 * @returns {void}
 */

/**
 * Unregister handler, which internally calls {@link Element.removeEventListener}
 * for the given event(s).
 * @exports UnregisterHandler
 * @callback UnregisterHandler
 * @param {string=} [eventName=''] Optional event name.
 * If passed, it will only remove that event otherwise fallbacks to
 * removing all the registered (added) events.
 * @returns {void}
 */

/**
 * @typedef {'mobile'} Mobile `min-width: 320px`
 * @typedef {'mobile.large'} MobileLarge `min-width: 480px`
 * @typedef {'tablet'} Tablet `min-width: 768px`
 * @typedef {'desktop'} Desktop `min-width: 1024px`
 * @typedef {'desktop.large'} DesktopLarge `min-width: 1200px`
 * @typedef {Mobile | MobileLarge | Tablet | Desktop | DesktopLarge} QueryKeys
 * @typedef {{query: QueryKeys, onChange: Function}} MediaQueriesParams
 */

/**
 * Callback that appends {@link HTMLElement | children nodes} to the {@link HTMLElement | root} .
 * @callback AddChildren
 * @param {HTMLElement} htmlRoot
 * @param {...HTMLElement} htmlChildren
 * @returns {void}
 */

/**
 * Callback that appends {@link HTMLElement | children nodes} to the {@link HTMLElement | root} .
 * @callback CreateElement
 * @param {HTMLElementTagNameMap} tagName
 * @param {Record<string, string|boolean|number>} [attributes={}]
 * @returns {HTMLElement}
 */

/**
 * Creates a {@link Element} from a given HTML valid string.
 * @callback CreateFromString
 * @param {string} [htmlString=''] HTML string (must be valid). _Mandatory_
 * @return {HTMLElement}
 */

/**
 * @typedef {Object} ElementUtils
 * @property {AddChildren} addChildren
 * @property {CreateElement} create
 * @property {CreateFromString} createFromString
 */
