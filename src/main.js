// Docs
import "./jsdoc.js";

// Helpers
import { listenToMediaQueryChanges, registerDOMEvent } from "./helpers.js";

// Constants
import { PR_TEXT } from "./pr-body-data.js";
import * as REGEX from "./regex.js";

const elm = {
  get prBody() {
    return document.querySelector("[data-pr-body]");
  },
  get codeBlock() {
    return document.querySelector("[data-json-block]");
  },
  get wrapBtn() {
    return document.querySelector("[data-wrapper]");
  },
  get copyBtn() {
    return document.querySelector("[data-copy]");
  },
  get viewModeToggle() {
    return document.querySelector("#viewModeToggle");
  },
  get stateModeToggle() {
    return document.querySelector("#stateModeToggle");
  },
};

let result = {};
let stringifiedResult = "{}";

function findE2EDataWithRegex() {
  const fromTextOrHTML = elm.viewModeToggle.checked
    ? "textContent"
    : "innerHTML";

  const rawContent = elm.prBody[fromTextOrHTML]?.trim() ?? "";
  const content = rawContent.replace(REGEX.DETAILS_REST_ATTR, "$1>");
  const [e2eContent = ""] = content.match(REGEX.E2E_FILTERS_CONTENT) ?? [];
  const detailsFindings = e2eContent.match(REGEX.DETAILS_LIST) ?? [];

  return detailsFindings.reduce((acc, item) => {
    const { id, content } = item.match(REGEX.SINGLE_DETAIL)?.groups ?? {};
    const checked = content.match(REGEX.CHECKED_ITEM) ?? [];
    const values = checked.map((c) => c.replace(REGEX.CHECKED_BOX, ""));

    return { ...acc, [id]: values };
  }, {});
}

function printResultToCodeBlock() {
  if (!(elm.codeBlock instanceof Element)) return;

  result = findE2EDataWithRegex();
  stringifiedResult = JSON.stringify(result, null, 2);

  !!localStorage.gfmParseDebug && console.log(result);

  elm.codeBlock.firstElementChild.innerHTML = stringifiedResult;
}

(function initApp() {
  let isNotDesktop = false;

  const toggleState = (callback, { target, type }) => {
    if (type === "click" && isNotDesktop) return;
    else if (type === "touchstart") {
      target.classList.add("tapped");
    }

    const isToggled = target.dataset.state === "false" ? false : true;
    target.dataset.state = !isToggled;

    callback?.(!isToggled);
  };

  // Event registering
  registerDOMEvent(elm.prBody, {
    dblclick: () => {
      elm.stateModeToggle.checked = true;
    },
    input: printResultToCodeBlock,
    keydown: (event) => {
      if ((event.key === "Enter" && event.ctrlKey) || event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        elm.stateModeToggle.checked = false;
        elm.stateModeToggle.focus();
      }
    },
  });
  registerDOMEvent(elm.wrapBtn, {
    "click touchstart": toggleState.bind(null, (isToggled) => {
      elm.codeBlock.classList.toggle("wrapped", isToggled);
    }),
    touchend: ({ target }) => target.classList.remove("tapped"),
  });
  registerDOMEvent(elm.copyBtn, {
    "click touchstart": toggleState.bind(null, () => {
      elm.copyBtn.style.pointerEvents = "none";

      navigator.clipboard.writeText(stringifiedResult).then(
        () => console.log("Text copied to clipboard"),
        () => console.log("Failed to copy text to clipboard")
      );

      setTimeout(() => {
        elm.copyBtn.style.removeProperty("pointer-events");
        elm.copyBtn.dataset.state = false;
      }, 1000);
    }),
    touchend: ({ target }) => target.classList.remove("tapped"),
  });
  registerDOMEvent(elm.viewModeToggle, {
    change: ({ detail: { checked } }) => {
      const { innerHTML, textContent } = elm.prBody;

      if (checked) {
        elm.prBody.textContent = innerHTML;
      } else {
        elm.prBody.innerHTML = textContent;
      }
    },
  });
  registerDOMEvent(elm.stateModeToggle, {
    change: ({ detail: { checked } }) => {
      if (checked) {
        elm.prBody.contentEditable = true;
        elm.prBody.focus();
      } else {
        elm.prBody.contentEditable = false;
      }
    },
  });

  listenToMediaQueryChanges({
    query: "tablet",
    onChange: ({ matches }) => (isNotDesktop = !matches),
  });

  // Finally, append initial PR body to DOM!
  elm.prBody.innerHTML = PR_TEXT.trim();
  // Get the result!
  printResultToCodeBlock();
})();
