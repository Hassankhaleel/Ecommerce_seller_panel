
import "../node_modules/@radix-ui/themes/styles.css";

import { Theme } from '@radix-ui/themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Routers from './Routers/Dashboard_routers/Routers.jsx'
import { sotre } from "./Redux/Rediux_main";

import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(

  <Provider store={sotre}>
    <Routers>
      <StrictMode>
        <Theme>
          <App />
        </Theme>
      </StrictMode>,
    </Routers>
  </Provider>


)
