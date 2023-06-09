import { elm } from './helpers.js';

const ELEMENT_NAME = 'trade-mark';
const tradeMarkSVGElm =
  elm.createFromString(`<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1204" height="369.333" viewBox="0 0 903 277">
<path
  d="M70 46.6c-18.8 4-32.5 13.5-39.3 27.3-3 6.1-3.2 7.3-3.2 16.6 0 8.7.3 10.7 2.6 15.5 1.4 3.1 4 7.2 5.8 9.2 1.7 2 3.1 4 3.1 4.4 0 .5-3 2.4-6.8 4.2-22.1 10.6-33.1 30.5-29.3 53.1 4.2 25.7 29.6 42.7 68.5 46.1 31.7 2.7 61.1-4.4 85.8-20.6 13-8.6 28-27.3 28.2-35.2.1-3.3-.2-3.7-2.7-4-2.2-.3-3 .3-4.5 2.9-15.3 28-44.2 45.2-82.7 49-20.4 2-45.5-2-60.6-9.6-16.5-8.4-26-23.8-24.6-40 1.4-16.6 11.7-29.2 30-36.5l7.5-3 5.4 2.5c13.9 6.4 37.8 9.4 48.9 6.2 5.7-1.7 10.9-6 11.1-9.3.5-7-4.2-10.7-15.9-12.4-7.9-1.1-28.7.2-40 2.6-8.4 1.7-9.4 1.4-14.7-4.8-5.3-6.1-7.9-13.8-7.4-21.8 1.1-16.6 14.3-29.5 35.5-34.5 10.2-2.5 31.8-1.7 41.8 1.5 15.3 4.8 26.6 13.4 31.4 23.8 2.1 4.5 2.9 5.3 4.9 5 4.4-.5 5-3.1 2.1-9-7.2-14.6-23.3-25.5-43.6-29.4-9.3-1.8-28.7-1.7-37.3.2zm32.8 75.3c2.7 1.5 2.5 3.1-.9 4.9-5.3 2.9-38.9-.4-38.9-3.8 0-.5 1.9-1.1 4.3-1.4 2.3-.3 5.3-.8 6.7-1 5.2-.9 26.5 0 28.8 1.3zM844.4 48.4c-14 6.2-23.6 48-22.1 96.6.3 10.7 1.1 22.8 1.7 26.8.9 6.1.9 7.7-.3 9-.8 1-3.3 5.4-5.6 9.8-10.6 20.6-27.5 28-40.1 17.6l-3.4-2.9 4.1-2.6c11.2-7.1 16.3-14.3 17-24.1.9-11.2-4.3-17.6-14.4-17.6-8.2 0-14.3 5.4-17.7 15.6-2.7 7.9-12.5 23.4-19 30.1-4.6 4.7-7 6.3-10 6.9-5.5 1-10-1.4-12.7-6.8-2-3.9-2.2-5.5-1.9-18.3.7-28.7.7-29.7-1.3-30.9-1.5-.9-2.2-.7-3.7 1.2-1.4 1.7-2 4.7-2.5 12.2-.7 9.2-1.1 10.5-4.7 16.7-10.6 18.2-21.6 26.5-30.2 22.9-2-.8-4.5-3-5.6-4.8-2.2-3.5-2.3-7.2-.5-29.3.4-4.8.2-7.8-.7-9.5-1.9-3.7-7.4-6-14-6h-5.7l-.6-3.8c-1.7-9.9-4.2-14.2-8.2-14.2-7.1 0-15.7 19.7-10.5 24.2.9.9 3.6 1.9 5.8 2.3l4.2.6-1.3 4.9c-3.3 12.7-15.1 30.7-22.6 34.5-4.2 2.2-8.3 1.8-11.7-1-3.4-2.8-7.8-12.2-9.4-19.8-1-4.9-.9-5.8 2.2-13.7 14.4-37.1 21.4-75.3 18-96.9-2-12-7.2-18-14.5-16.7-9.3 1.8-15.6 14.4-19.1 38.6-1.5 10.9-1.8 46.2-.4 56 .5 3.5.7 6.6.5 6.8-.2.2-1.2-.1-2.4-.7-3.1-1.7-11.1.5-16.8 4.4-5.2 3.7-11.6 11.8-16.2 20.5-4.4 8.3-11.6 17.6-16.2 21-5.2 3.7-10.6 4.1-13.5.9-1.7-1.9-1.9-3.8-2-17.8 0-8.6-.4-17.1-.8-18.8-1-4.4-5.8-8.3-10.2-8.3-8.5 0-15.5 7.5-29 31.2-3.3 5.9-6.3 10.6-6.5 10.3-.3-.2 0-6 .7-12.7 1.7-17 1.7-24.1-.2-28.8-1.8-4.5-3.8-6-8.3-6-4.8 0-9.6 5.7-15.9 18.9-6.8 14.2-11.1 21.3-16.6 26.9-5.1 5.4-8.4 7.2-13.1 7.2-2.9 0-3.9-.6-5.6-3.2-1.8-3-2-4.7-1.7-18.8.3-17.3-.5-21.1-5.3-23.5-3.6-1.9-8.2-1.9-11.7-.1-5.7 3-14.3 14.4-23.3 31.2-2.8 5.2-5.4 9.3-5.7 9-.2-.3.1-7.4.8-15.9 1.8-21.5.6-29.1-5.1-31.1-7.1-2.5-11.5 2.1-21.4 22-4.1 8.3-9.3 17.5-11.5 20.3-7.6 9.6-17.3 13.7-26.4 11.1-4.1-1.1-9.6-5.1-9.6-6.9 0-.5 2-2.1 4.4-3.5 9.3-5.4 16.7-16.8 16.6-25.5-.1-4.4-3.7-10.9-7.2-13.1-3.5-2.1-10-2.6-14.1-1.1-3.9 1.5-9.3 7.7-11.2 12.9-4 11.2-11.7 23.4-19.2 30.4-7.9 7.3-15.5 8.4-20.8 2.8-4-4.2-4.6-9.5-2.8-23.5 2.4-18.7.3-22.4-13.1-23.4l-7.1-.6-.6-5.2c-.4-2.9-1.5-6.7-2.6-8.5-1.6-2.7-2.5-3.3-5.3-3.3s-3.9.7-6.5 4.1c-4.1 5.4-6.9 14.2-5.6 17.6 1 2.7 2.9 3.7 7.9 4.2 3.5.4 3.8 2.3 1.7 9.1-2.1 6.5-1.5 8.5 2.3 8.5 2.5 0 3.2-.6 4.5-4.3.9-2.3 1.9-5.6 2.2-7.2 1.5-6.6 1.3-6.5 6.6-6.5 6.3 0 9.2 2.5 8.4 7.3-3.7 23-2.4 32.4 5.5 39 10.7 9.1 26.8 3.8 38.2-12.3 4-5.7 5.8-6.7 5.8-3.2 0 .9 1.3 4 3 6.8 7.2 12.6 20.8 17.4 34.7 12.3 4.5-1.7 7.4-3.8 12.9-9.4 6.3-6.3 8.1-9 14.5-22.1 8.2-16.8 10.4-20.4 12.5-20.4 1.9 0 1.9 7.7-.2 29.8-1.5 15.9-1.5 17.4 0 19.7 1.9 2.9 6.9 3.4 10.3 1 1.2-.8 4.9-6.7 8.2-13 14.2-27.1 23.8-37.6 27.3-30 .8 1.7.8 5.2.1 12.4-2.2 22 2.7 32.1 15.6 32.1 12.5 0 24-11.9 35.9-37.1 5.4-11.5 8.3-15.6 10-14.5 1.6 1 1.5 5.8-.4 27.8-1.6 17.5-1.6 18.8 0 21.2 2 3.1 7.3 3.5 10.4.8 1.2-.9 4.2-5.8 6.8-10.7 10.4-20.2 20.6-34.5 24.5-34.5 3.2.1 4.4 1.9 4.3 6.7-.1 2.6-.3 9.7-.5 15.8-.3 9.6-.1 11.6 1.8 15.7 2.7 6 7.1 8.8 13.7 8.8 6.9 0 12.4-3 19.4-10.4l5.8-6.3 1.7 4.8c3.1 8.5 11.5 13.1 20 10.8 5.1-1.3 13-9 16.6-16.2 1.3-2.6 2.7-4.7 3.1-4.7.3 0 1.6 2.4 2.9 5.4 2.9 7 9.1 14.1 13.7 15.6 2 .7 5.8 1 8.4.8 11.8-1.2 25.4-17.8 32.6-39.8l3.1-9.5 5-.3c8-.5 9.7 2.8 7.2 13.8-.6 2.5-1.1 8.1-1.1 12.5-.1 9.8 2.6 16.3 8.4 20.5 10.4 7.6 23.9 3.4 35.7-11 2.4-3 4.7-5.4 5-5.3.3.1.9 1.8 1.3 3.8 1.6 7.7 7.3 15.2 13.1 17.4 4.6 1.8 10.4 1.3 15.5-1.3s14.1-11.5 18.7-18.4l2.9-4.3 1.8 5c6 16.1 24.1 23.4 39.5 16 6.1-2.9 14.8-11.8 19.3-19.7 1.9-3.4 3.8-6.2 4.2-6.2.4 0 1.1 1.2 1.4 2.7 1.2 4.8 6.2 14.6 9.5 18.7 10 12 25.9 9.2 37.9-6.7 5.7-7.6 13-20.7 13-23.4 0-2.4-3-4.6-5.2-3.8-.7.3-3.5 4.7-6.3 9.7-6.2 11.4-15.1 21.3-20.6 23-3.3.9-4.5.9-7.3-.5-6.4-3-12.1-12.8-14.7-25.2l-1.2-6 5.5-11c11-21.8 19.1-44 22.7-62.1 5.3-26.7 2.8-51.5-5.9-57.5-3.6-2.5-8-3.1-11.6-1.5zm7.8 9.3c6.9 7.9 5.7 37.6-2.6 64.8-5.5 18.1-16.2 43.3-17.8 41.7-1.5-1.5-2.1-30.4-.9-46.7 2.4-31.3 7.4-53.7 13.5-59.8 2.2-2.2 5.9-2.2 7.8 0zM606.3 70.8c5.6 6.2 4.3 36.2-2.8 64.2-2.6 10-8.9 29.8-9.9 30.7-1.1 1.1-1.4-.2-2.5-11.1-3.4-34.1 1.5-75.2 9.9-83.6 2.5-2.5 3.2-2.5 5.3-.2zm-399 85.9c.8 4.6-1 6.4-4.3 4.3-1.2-.8-1.2-1.3.3-4.4 2.1-4.6 3.3-4.5 4 .1zm435.2-.1c.7 4.2.5 4.7-2.8 4.2-2.5-.3-2.5-.3-1-4.1 1.9-4.7 2.9-4.7 3.8-.1zm-56.9 18.3l1.4 8.1-4 8.5c-8.4 18.3-17 23.6-23.9 14.9-2.6-3.4-2.9-12.8-.5-19.9 2.5-7.2 9.5-13.9 16.6-16 3.1-.9 6.2-2.3 6.9-3.1.6-.8 1.4-1.2 1.6-1 .3.3 1.1 4.1 1.9 8.5zm-285.9-5.1c3.4 2.2 3.4 9.2 0 15.8-2.1 4-10.6 11.6-12.6 11.2-3.4-.7-3.6-13.8-.4-20.3 2.6-5.1 5.4-7.5 8.7-7.5 1.7 0 3.6.4 4.3.8zm486.8 1.2c2.5 2.8 1.6 10.7-1.9 16-2.7 4.1-9.9 10-12.2 10-1.8 0-2.8-6-2.1-12.5.6-5.8 3.7-12.8 6.4-14.4 3-1.7 7.8-1.3 9.8.9z" />
<path
  d="M711.9 118.9c-2 2-2.9 4-2.9 6.1 0 9.6 10.5 14.6 17.1 8.1 6.4-6.5 2-17.1-7.1-17.1-3.3 0-4.8.6-7.1 2.9zM723 124c.8 1.4.8 2.6 0 4-1.9 3.5-8 2-8-2s6.1-5.5 8-2z" />
</svg>`);
const heartsSVGElm =
  elm.createFromString(`<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 96 96">
  <path
    d="M10.2 14.1C.8 18.8-2.4 30.6 2.9 41.4c2.9 5.9 11.3 15 22.7 24.7 7.9 6.7 8.6 7.1 10.1 5.6 1.6-1.5 1.5-2-.7-6.4-4.8-9.6-3.7-18.4 3.2-25.9 6.4-7 13.1-8.4 26.6-5.8 3.2.6 3.2.6 3.2-3.2 0-9.3-7.3-17.1-17.1-18-4.6-.5-6.2-.1-11.1 2.4L34 17.7l-5.6-2.9c-6.9-3.4-12.3-3.6-18.2-.7z" />
  <path
    d="M48.4 41.4C42 44.2 38.7 51.8 40.9 59c1.4 4.7 8 12.1 17.7 20.1l7.4 6.1 6.3-5c8.6-7 15.1-13.9 17.7-19 6.8-13.1-7-26.1-20.4-19.3-3.8 2-3.8 2-7.4 0-4.2-2.2-9.4-2.4-13.8-.5z" />
</svg>`);

class TradeMark extends HTMLElement {
  constructor() {
    super();

    const shadowDom = this.attachShadow({ mode: 'open' });
    const link = elm.create('link', {
      rel: 'stylesheet',
      href: './trademark.css',
    });
    const div = elm.create('div', { class: 'trademark' });
    const tradeMarkLogo = (() => {
      const node = tradeMarkSVGElm.cloneNode(true);
      node.classList.add('trademark__erenndriel');

      return node;
    })();
    const heartsLogo = (() => {
      const node = heartsSVGElm.cloneNode(true);
      node.classList.add('trademark__hearts');

      return node;
    })();
    const madeWithLove = (() => {
      const node = elm.create('span');
      node.innerHTML = `Made with ${heartsLogo.outerHTML} by`;

      return node;
    })();
    const linkWithTrademark = (() => {
      const node = elm.create('a', {
        href: 'https://github.com/albannurkollari/',
        rel: 'noopener noreferrer',
        target: '_blank',
        title: 'Opens in a new tab',
      });
      elm.addChildren(node, tradeMarkLogo);

      return node;
    })();

    elm.addChildren(div, madeWithLove, linkWithTrademark);

    shadowDom.appendChild(link);
    shadowDom.appendChild(div);
  }
}

if (!customElements.get(ELEMENT_NAME)) {
  customElements.define(ELEMENT_NAME, TradeMark);
}
