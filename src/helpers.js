import "./jsdoc.js";

/**
 * Adds one or more event listeners to the given element and returns
 * a callback unregister (remove) function.
 * @param {HTMLElement | HTMLDocument | Window | MediaQueryList} elm
 * @param {Record<string, EventHandler> | [string, EventHandler]} options
 * @return {UnregisterHandler}
 */
export const registerDOMEvent = (elm, options) => {
  if (options?.constructor === Object) {
    const events = Object.entries(options).map(([event, handler]) =>
      registerDOMEvent(elm, [event, handler])
    );

    return function unregister(_event = "") {
      events?.[_event]?.() ?? events.forEach((unregister) => unregister());
    };
  } else if (Array.isArray(options) && options?.length === 2) {
    const [event, handler] = options;
    const events = event.split(" ");

    events.forEach((event) => elm.addEventListener(event, handler));

    return function unregister() {
      elm.removeEventListener(event, handler);
    };
  }
};

export const listenToMediaQueryChanges = (() => {
  const queries = {
    mobile: "(min-width: 320px)",
    "mobile.large": "(min-width: 480px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)",
    "desktop.large": "(min-width: 1200px)",
  };

  /**
   * Attaches event listener to changes done to MediaQuery in the browser.
   * Reports back to the callback that is given whether or not given query
   * media string is matched.
   * @param {MediaQueriesParams} params An object with required  `query` key
   * and `onChange` callback function.
   * @return {Function} Unregister handler for the event.
   */
  return ({ query, onChange = () => {} }) => {
    const mediaQuery = window.matchMedia(queries[query] ?? query);

    onChange?.(mediaQuery);

    return registerDOMEvent(mediaQuery, { change: onChange });
  };
})();

/** @type {ElementUtils} */
export const elm = {
  addChildren: (root, ...children) => root.append(...children),
  create: (tag, attributes = {}) => {
    const node = document.createElement(tag);

    Object.entries(attributes).forEach(([key, value]) =>
      node.setAttribute(key, value)
    );

    return node;
  },
  createFromString: (htmlString = "") => {
    const container = elm.create("div");

    container.innerHTML = htmlString;

    return container.firstElementChild;
  },
};
