import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter } from './lib/router.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter />
    </StrictMode>,
)
