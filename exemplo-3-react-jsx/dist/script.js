"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _httpsEsmShReact18 = require("https://esm.sh/react@18");

var _httpsEsmShReact182 = _interopRequireDefault(_httpsEsmShReact18);

var _httpsEsmShReactDom18 = require("https://esm.sh/react-dom@18");

var _httpsEsmShReactDom182 = _interopRequireDefault(_httpsEsmShReactDom18);

function App() {
  return _httpsEsmShReact182["default"].createElement(
    "h1",
    null,
    "Boas vindas ao workshop,",
    _httpsEsmShReact182["default"].createElement(
      "span",
      { onClick: function (ev) {
          return ev.target.style.color = 'red';
        } },
      "@fulano"
    )
  );
}

var root = _httpsEsmShReactDom182["default"].createRoot(document.querySelector('#root'));
root.render(_httpsEsmShReact182["default"].createElement(App, null));
