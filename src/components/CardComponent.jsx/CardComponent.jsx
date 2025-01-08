
// Creiamo il component Card e passiamo data come props e la funzione removeClick

export const CreateCard = ({ data, remove }) => (

    data.map((element) => (
        element.published && ( // Questa condizione ci permettere di mostrare le card se la proprietà published risulta "true"
            <div className="col-6 col-md-4 col-lg-3" key={element.id}>
                <div className="card" id={element.id}>
                    <img src={element.image} className="card-img-top" alt={element.title} />
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text m-0">{element.content}</p>
                        <p className="m-0">{"Available:" + " " + String(element.published)}</p>
                        <a href="#" className="btn btn-primary">Show Details</a>
                        <button type="button" className="btn btn-danger mx-1" onClick={() => remove(element.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    )
    ));



