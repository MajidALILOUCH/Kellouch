import { Form, Input, Button } from "../styles/shared";
import { useState } from "react";

function AddDepence({ onAddDepense }) {
    const [titre, setTitre] = useState('');
    const [montant, setMontant] = useState('');
    
    const handleAddDepense = (e) => {
        e.preventDefault();
        const depense = { titre, montant: Number(montant) };
        onAddDepense(depense);
        setTitre('');
        setMontant('');
    }

    const handleChangeTitre = (e) => {
        setTitre(e.target.value);
    }

    const handleChangeMontant = (e) => {
        setMontant(e.target.value);
    }

    return (
        <Form>
            <Input 
                placeholder="Titre de la dépense" 
                value={titre}
                onChange={handleChangeTitre} 
            />
            <Input 
                placeholder="Montant de la dépense" 
                type="number"
                value={montant} 
                onChange={handleChangeMontant} 
            />
            <Button type="submit" onClick={handleAddDepense}>
                Ajouter dépense
            </Button>
        </Form>
    );
}

export default AddDepence;
