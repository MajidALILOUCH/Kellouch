import styled from 'styled-components'
import AddBudget from './AddBudget'
import AddDepence from './AddDepence'
import ListeDepences from './ListeDepences'

const DetailsContainer = styled.div`
  display: flex;
  gap: 2rem;
`

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const RightPanel = styled.div`
  flex: 3;
`


function Details({ onAddBudget, onAddDepense, depenses = []}) {
  return (
    <DetailsContainer>
      <LeftPanel>
        <AddBudget onAddBudget={ onAddBudget }/>
        <AddDepence onAddDepense={onAddDepense}/>
      </LeftPanel>
      <RightPanel>
        <ListeDepences  depenses={depenses}/>
      </RightPanel>
    </DetailsContainer>
  )
}

export default Details
