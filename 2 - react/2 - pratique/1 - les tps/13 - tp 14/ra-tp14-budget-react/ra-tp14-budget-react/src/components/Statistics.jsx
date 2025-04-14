import styled, { css } from 'styled-components'
import { FaMoneyBill, FaEuroSign, FaBalanceScale } from 'react-icons/fa'

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${props => props.backGoundColor};
`

function Statistics({ budget = 0, depenses = []}) {
  const totalDepenses = depenses.reduce((total, depense) => total + depense.montant, 0);
  const ecart = budget - totalDepenses;
  return (
    <StatsContainer>
      <Card backGoundColor="#4CAF50">
        <FaMoneyBill size={40} />
        <p>BUDGET : {budget } DH</p>
      </Card>
      <Card backGoundColor="#ffcdd2">
        <FaEuroSign size={40} />
        <p>DEPENSES : {totalDepenses} DH</p>
      </Card>
      <Card backGoundColor="#ffd54f">
        <FaBalanceScale size={40} />
        <p>ECART : {ecart} DH</p>
      </Card>
    </StatsContainer>
  )
}

export default Statistics
