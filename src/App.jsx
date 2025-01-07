
/**
 * Esercizio: Creazione di un semplice form per la gestione degli articoli di un blog.
 * 
 * Funzionalità principali:
 * - Un campo input per inserire il titolo di un articolo.
 * - Una lista che mostra gli articoli inseriti.
 * - Possibilità di cancellare un articolo dalla lista utilizzando un'icona.
 * 
 * BONUS:
 * - Aggiunta di ulteriori campi al form, come:
 *   - Stato dell'articolo (es. "Draft", "Published").
 *   - Nome dell'autore.
 * 
 * Obiettivo:
 * - Gestire lo stato degli articoli tramite React (useState).
 * - Mostrare dinamicamente la lista degli articoli.
 * - Eseguire operazioni di aggiunta e rimozione in modo interattivo.
 */

// Importiamo i componenti dal path components:
import { FooterComponent } from "./components/FooterComponent/FooterComponent"
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent"
import { MainComponent } from "./components/MainComponent/MainComponent"


export const App = () => {
  return (

    <>
      {/* HEADER */}
      <HeaderComponent /> {/* IMPORTIAMO IL COMPONENTE HEADER/}
            {/* MAIN */}
      <MainComponent /> {/* IMPORTIAMO IL COMPONENTE MAIN E PASSIAMO COME PROP L'ARRAY DI DATI FORNITI*/}
      {/* FOOTER */}
      <FooterComponent /> {/* IMPORTIAMO IL COMPONENTE FOOTER*/}
    </>

  )
}


