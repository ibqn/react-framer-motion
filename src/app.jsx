import { useState } from 'react'
import Box from './components/box'
import Refresh from './components/refresh'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <Box key={count} />
    </>
  )
}

export default App
