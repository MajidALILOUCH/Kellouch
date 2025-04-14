import { Form, Input, Button } from "../styles/shared";
import { useState } from "react";

function AddBudget({ onAddBudget }) {
  const [montantBudget, setMontantBudget] = useState(0);

  const handleChangeBudget = (e) => {
    setMontantBudget(Number(e.target.value));
  };

  const handleAddBudget = (e) => {
    e.preventDefault();
    onAddBudget(montantBudget);
  };

  return (
    <Form>
      <Input
        placeholder="Donner votre budget"
        value={montantBudget}
        onChange={handleChangeBudget}
        type="number"
      />
      <Button type="submit" onClick={handleAddBudget}>
        Ajouter budget
      </Button>
    </Form>
  );
}

export default AddBudget;
