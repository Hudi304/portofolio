import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CustomRouter } from './router/custom-router'
import { customHistory } from './router/history'
import './tailwind.scss'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <CustomRouter history={customHistory}>
    {/* <ModalProvider> */}
    {/* <DrawerProvider> */}
    {/* <ThemeProvider> */}
    <App />
    {/* </ThemeProvider> */}
    {/* </DrawerProvider> */}
    {/* </ModalProvider> */}
  </CustomRouter>,
  // </React.StrictMode>,
)
