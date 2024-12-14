import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoContextProvider } from './context/todoContext.tsx'
import App from './App.tsx'
import 'todomvc-app-css/index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <TodoContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TodoContextProvider>
)
