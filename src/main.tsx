import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import { ClerkProvider } from '@clerk/clerk-react'
import { koKR } from "@clerk/localizations";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" localization={koKR}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
