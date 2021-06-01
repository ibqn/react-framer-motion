import { useState } from 'react'
import styled from 'styled-components'
import Example from './components/example'
import Refresh from './components/refresh'

const Container = styled.div``

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <Container>
        <Example key={count} />
      </Container>
    </>
  )
}

export default App
