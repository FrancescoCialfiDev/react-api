
// Creiamo una funzione / componente con un return che ci permette di creare l'header della nostra pagina hmtl
// Utilizziamo un export inline su una costante inizializzata ad una funzione anonima.

export const HeaderComponent = () => {
    return (
        <header className="d-flex align-items-center justify-content-center p-3">
            <h1>Web Developers</h1>
        </header>
    )
}

