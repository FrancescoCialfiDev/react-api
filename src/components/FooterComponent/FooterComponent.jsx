
// Creiamo una funzione / componente con un return che ci permette di creare il footer della nostra pagina hmtl.
// Utilizziamo un export inline su una costante inizializzata ad una funzione anonima.

export const FooterComponent = () => {

    return (

        <footer className="text-bg-dark  d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center text-center pt-3">
                <h6>Benvenuti nel nostro Blog sullo Sviluppo Web!</h6>
                <p>
                    Scopri le basi di HTML, padroneggia il CSS per uno stile impeccabile, e rendi le tue pagine interattive con JavaScript. Approfondisci temi come il design responsivo e le migliori pratiche per l&apos;accessibilità. Perfetto per principianti e appassionati che vogliono creare siti web moderni e inclusivi! 🚀
                </p>
            </div>
        </footer>

    )
}

