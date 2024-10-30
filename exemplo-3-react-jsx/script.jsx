import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

function App() {
  return (
    <h1>
      Boas vindas ao workshop, 
      <span onClick={(ev) => (ev.target.style.color = 'red')} >@fulano</span>
    </h1>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)