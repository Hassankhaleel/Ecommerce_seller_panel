
import "../node_modules/@radix-ui/themes/styles.css";

import { Theme } from '@radix-ui/themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Routers from './Routers/Dashboard_routers/Routers.jsx'
import Context_provider_api from "./Context_api/ContextAPi";

createRoot(document.getElementById('root')).render(
  <Context_provider_api>
    <Routers>
      <StrictMode>
        <Theme>
          <App />
        </Theme>
      </StrictMode>,
    </Routers>
  </Context_provider_api>


)
