import styled from 'styled-components'
import Header from './Header'
import Statistics from './Statistics'
import Details from './Details'
import { useState } from 'react'

const Layout= styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`

function MainComponent() {
  const [budget, setBudget] = useState(0);
  const [depenses, setDepenses] = useState([])
  const handleAddBudget = (montant) => {
    setBudget(Number(montant))
  }

  const handleAddDepense = (newDepense) => {
    setDepenses(prevDepenses => [...prevDepenses, newDepense])
  }
  return (
    <Layout>
      <Header />
      <Statistics budget={budget} depenses={depenses} />
      <Details onAddBudget={handleAddBudget}  onAddDepense={handleAddDepense} depenses={depenses} />
    </Layout>
  )
}

export default MainComponent;