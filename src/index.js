import React from 'react'
import { createRoot } from 'react-dom/client'
import state from './store'
import { Provider } from 'react-redux'
import App from './App'


const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={state}>
    <App />
  </Provider>

)
