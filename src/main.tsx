import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import { queryClient } from './services/queryClient.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { GlobalStyled } from './Global.styled.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyled />
        <Home />
    </QueryClientProvider>
  </React.StrictMode>,
)
