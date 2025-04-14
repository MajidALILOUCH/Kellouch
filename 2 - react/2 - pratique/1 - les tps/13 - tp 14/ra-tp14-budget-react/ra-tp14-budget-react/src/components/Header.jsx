import styled from 'styled-components'

const HeaderContainer = styled.header`
  text-align: center;
`

const Title = styled.h1`
  color: #333;
`

function Header() {
  return (
    <HeaderContainer>
      <Title>CALCULATEUR DE BUDGET</Title>
    </HeaderContainer>
  )
}

export default Header
