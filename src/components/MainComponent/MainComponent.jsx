// Importiamo lo useState di React per rendere le nostre variabili reattive
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
// Creiamo una funzione / componente con un return che include la logica e la struttura html della pagina.
// Utilizziamo un export inline su una costante inizializzata ad una funzione anonima. All'interno passiamo come argomento il prop passato al componente.

export const MainComponent = () => {

    const [reactData, setReactData] = useState([]) // Creaimo una variabile reattiva inizializzata al valore di dataCopy
    useEffect(() => {

        axios.get("http://localhost:3000/foods").then((res) => {
            setReactData(res.data.foods.posts)
        })


    }, [])

    // Creiamo una costante per generare tutte le card dell'array e lavoriamo sulla variabile reattiva.
    const newElement = reactData.map((element) => {
        return (
            //  element.published && ( // Questa condizione ci permettere di mostrare le card se la proprietà published risulta "true"
            <div className="col-xl-3 col-md-4 col-sm-6" key={element.id}>
                <div className="card" id={element.id}>
                    <img src={element.image} className="card-img-top" alt={element.title} />
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text m-0">{element.content}</p>
                        <p className="m-0">{"Available:" + " " + String(element.published)}</p>
                        <a href="#" className="btn btn-secondary">Show Details</a>
                        <button type="button" className="btn btn-danger mx-1" onClick={() => removeClick(element.id)}>Delete</button>
                    </div>
                </div>
            </div>
            // )
        )
    })

    // State of variables - Stato reattivo delle variabili del form.
    // const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    // const [content, setContent] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        content: "",
        available: false,
    });


    // Submit function - Funzione che si attiva all'invio del form
    const submitFunction = (event) => {
        event.preventDefault(); // Previene il comportamento default di refresh del form
        alert("The card has been generated"); // Mostriamo un alert su schermo se il processo è andato a buon fine.

        // Inizializziamo una costante come oggetto con rispettive chiavi - valore dei nuovi elementi creati tramite form
        const newCardModel = {

            id: 1,
            title: formData.title,
            image: image ? URL.createObjectURL(image) : "",
            content: formData.content,
            published: true,

        }

        // In react i cambiamenti interni ad una variabile non vengono aggiornati in automatico, bisogna utilizzare l'intera reference della costante che racchiude l'array di oggetti, faro uno spread degli elementi contenuti al suo interno piu quelli nuovi generati e creare un nuovo array. Cosi facendo react rileva una modifica è mostrerà i cambiamenti effettivi.
        const newCard = [...reactData, newCardModel];
        setReactData(newCard); // Funzione che permette di cambiare il valore di reactData con il nuovo array di oggetti creato.


    }

    //Remove Click Function
    function removeClick() {
        // Verifichiamo che l'id dell'elemento cliccato sia diverso da quello presente negli elementi dell'array
        // Cosi da creare un array con solo all'interno gli oggetti con id diverso da quello cliccato, cosi da eliminare quelli con id uguale.
        const updateData = reactData.filter(element => element.id != event.target.closest(".card").id);
        setReactData(updateData); // Aggiorniamo lo stato della variabile.


    }

    // Function for change Input - Modifichiamo il valore della nuova card creata con i valori inseriti nel form.
    // const changeTitle = (event) => {
    //     setTitle(event.target.value);
    // }
    const selectImage = (event) => {
        const file = event.target.files[0]
        setImage(file)
    }
    // const changeContent = (event) => {
    //     setContent(event.target.value);
    // }
    function handleFormData(e) {

        const value =
            e.target.type === "checkbox" ?
                e.target.checked : e.target.value;

        setFormData((formData) => ({
            ...formData,
            [e.target.name]: value,
        }));

    }






    return (

        <main className="d-flex" >
            <div className="formContainer">
                <form className="p-5 bg-white rounded-3 m-4" onSubmit={submitFunction}>
                    <div className="form-group">
                        <label htmlFor="titleForm"><span className="fw-bold">Card&apos;s Name</span></label>
                        <input name="title" type="text" value={formData.title} className="form-control" id="titleForm" placeholder="Es: React Components" onChange={handleFormData} />
                        <label htmlFor="imageForm"><span className="fw-bold">Card&apos;s Images</span></label>
                        <input name="image" type="file" className="form-control" id="imageForm" onChange={selectImage} />
                        <label htmlFor="contentForm"><span className="fw-bold">Card&apos;s Content</span></label>
                        <input name="content" type="text" value={formData.content} className="form-control" id="contentForm" placeholder="Es: Text of the content" onChange={handleFormData} />
                        <div className="d-flex flex-column align-items-start py-2 bg-warning rounded-2 p-2 my-2 border">
                            <label htmlFor="available" className="fw-bold">
                                Availability</label>
                            <div className="d-flex gap-2">
                                <label htmlFor="available">
                                    True</label>
                                <input
                                    name="available"
                                    checked={formData.available}
                                    onChange={handleFormData}
                                    id="available"
                                    type="checkbox"
                                />
                            </div>

                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    {newElement}
                </div>
            </div>
        </main >

    )

}

