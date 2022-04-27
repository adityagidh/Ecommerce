import React from 'react'
import Rout from "./Routes"
import ReactDOM from 'react-dom/client'

// ReactDOM.render(<Rout/>,document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
);