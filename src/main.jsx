import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { GoogleOAuthProvider } from "@react-oauth/google"
const cliente_Id = import.meta.env.VITE_CLIENTE_ID_GOOGLE;

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GoogleOAuthProvider clientId={cliente_Id}>
    <App />
  </GoogleOAuthProvider>
  </StrictMode>,
)