
import "../node_modules/@radix-ui/themes/styles.css";

import { Theme } from '@radix-ui/themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Routers from './Routers/Dashboard_routers/Routers.jsx'
import { persistor, sotre } from "./Redux/Rediux_main";
// import { persistor } from "./Redux/Redux_persist/Main";
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById('root')).render(

  <Provider store={sotre}>
    <PersistGate loading={null} persistor={persistor} >
      <Routers>
        <StrictMode>
          <Theme>
            <App />
          </Theme>
        </StrictMode>,
      </Routers>
    </PersistGate >
  </Provider >


)
