/**
 * Progetto: Gestione dinamica delle card.
 * Obiettivo: Creare un'app full-stack per aggiungere, visualizzare e rimuovere card in tempo reale.
 *
 * Funzionalità richieste:
 * Frontend (React):
 * - Form per aggiungere nuove card.
 * - Visualizzazione dinamica delle card con opzione di rimozione.
 * - Utilizzo di:
 *   - useState: Per gestire lo stato locale delle card.
 *   - useEffect: Per sincronizzare il caricamento iniziale tramite API.
 * - Chiamate API per interagire con il backend.
 *
 * Backend (Express):
 * - Endpoints API:
 *   - GET /cards: Restituisce tutte le card.
 *   - POST /cards: Aggiunge una nuova card.
 *   - DELETE /cards/:id: Rimuove una card tramite ID.
 * - Dati gestiti in memoria.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Stili di Bootstrap
import './app.css'; // Stili personalizzati
import { App } from './App.jsx'; // Componente principale

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);