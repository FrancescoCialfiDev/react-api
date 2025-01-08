
// Creiamo una funzione / componente con un return inplicito che ci permette di creare l'header della nostra pagina hmtl
// Utilizziamo un export inline su una costante inizializzata ad una funzione anonima.

export const HeaderComponent = () => (
    <header className=" d-flex align-items-center mx-4">
        <nav className="navbar bg-ternary w-100 h-100">
            <div className="container-fluid">
                <a className="navbar-brand">Languages Of Programmation</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </header>
);

