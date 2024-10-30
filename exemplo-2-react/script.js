import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const newH1 = React.createElement(
  'h1',
  { id: "title" },
  [
    "Boas vindas ao workshop, ",
    React.createElement('span', {
      onClick: (ev) => (ev.target.style.color = "red")
    }, "@fulano")
  ]
);

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

rootElement.render(newH1);