import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`
const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
  padding: 1rem;
  
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:nth-child(odd) {
    background-color: #fff;
  }
`
const Th = styled.th`
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: left;
`

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;

`

function ListeDepences( {depenses=[]} ) {
  return (
    <Table>
          <thead>
            <Tr>
              <Th>Titre</Th>
              <Th>Montant</Th>
            </Tr>
          </thead>
          <tbody>
            {/* Les dépenses seront ajoutées ici dynamiquement */}
            {depenses.map((depense, index) => (
              <Tr key={index}>
                <Td>{depense.titre}</Td>
                <Td>{depense.montant}</Td>
              </Tr>
            ))}
            
          </tbody>
        </Table>
  )
}

export default ListeDepences;