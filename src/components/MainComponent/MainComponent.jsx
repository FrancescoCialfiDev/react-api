import { useState, useEffect } from "react";
import axios from "axios";
import { CreateCard } from "../CardComponent.jsx/CardComponent"; // Import del componente card

const apiUrl = "http://localhost:3000/foods"; // URL dell'API

export const MainComponent = () => {
    // Stato per i dati e per la gestione del form
    const [reactData, setReactData] = useState([]);
    const [image, setImage] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        content: "",
        available: false,
    });

    // Funzione per ottenere i dati dal backend
    const getData = () => {
        axios
            .get(apiUrl)
            .then((res) => setReactData(res.data.foods.posts))
            .catch((error) => console.error(error))
            .finally(() => console.log("Data fetch completed"));
    };

    // Eseguiamo la chiamata API al caricamento del componente
    useEffect(getData, []);

    // Funzione per eliminare un elemento
    const removeDataItem = (id) => {
        axios
            .delete(`${apiUrl}/${id}`)
            .then(() => {
                setReactData((prevData) => prevData.filter((item) => item.id !== id));
                console.log("Item deleted successfully");
            })
            .catch((error) => console.error("Error deleting item:", error));
    };

    // Funzione per gestire l'invio del form
    const submitFunction = (event) => {
        event.preventDefault(); // Previene il comportamento di default del form
        alert("The card has been generated"); // Messaggio di conferma

        // Creiamo un nuovo oggetto card da aggiungere ai dati
        const newCardModel = {
            id: 1,
            title: formData.title,
            image: image ? URL.createObjectURL(image) : "",
            content: formData.content,
            published: true,
        };

        // Aggiungiamo la nuova card ai dati esistenti
        const newCard = [...reactData, newCardModel];
        setReactData(newCard); // Aggiorniamo lo stato
    };

    // Funzione per gestire la selezione dell'immagine
    const selectImage = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    // Funzione generica per aggiornare i dati del form
    const handleFormData = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: value,
        }));
    };

    return (
        <main className="d-flex">
            {/* Form Section */}
            <div className="formContainer">
                <form className="p-5 bg-white rounded-3 m-3" onSubmit={submitFunction}>
                    <div className="form-group">
                        <label htmlFor="titleForm"><span className="fw-bold">Card&apos;s Name</span></label>
                        <input name="title" type="text" value={formData.title} className="form-control" id="titleForm" placeholder="Es: React Components" onChange={handleFormData} />
                        <label htmlFor="imageForm"><span className="fw-bold">Card&apos;s Image</span></label>
                        <input name="image" type="file" className="form-control" id="imageForm" onChange={selectImage} />
                        <label htmlFor="contentForm"><span className="fw-bold">Card&apos;s Content</span></label>
                        <input name="content" type="text" value={formData.content} className="form-control" id="contentForm" placeholder="Es: Text of the content" onChange={handleFormData} />
                        <div className="d-flex flex-column align-items-start py-2 bg-warning rounded-2 p-2 my-2 border">
                            <label htmlFor="available" className="fw-bold">Availability</label>
                            <div className="d-flex gap-2">
                                <label htmlFor="available">True</label>
                                <input name="available" checked={formData.available} onChange={handleFormData} id="available" type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
            {/* Card Section */}
            <div className="container">
                <div className="row align-items-center">
                    <CreateCard data={reactData} remove={removeDataItem} />
                </div>
            </div>
        </main>
    );

};
